import { client } from '@/lib/graphql-client';
import { GET_SINGLE_POST, GET_SUGGESTED_POSTS } from '@/lib/queries';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

type SinglePost = {
  id: string;
  title: string;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
};

type GetSinglePostResponse = {
  post: SinglePost;
};

type SuggestedPost = {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: { node: { sourceUrl: string } };
};

type SuggestedPostsResponse = {
  posts: {
    nodes: SuggestedPost[];
  };
};

const calculateReadTime = (html: string): string => {
  const text = html.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  return `${Math.ceil(wordCount / 200)} min read`;
};

// ✅ DYNAMIC META HANDLER
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  try {
    const { post } = await client.request<GetSinglePostResponse>(GET_SINGLE_POST, { slug });

    const cleanContent = post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const metaTitle = post.title.slice(0, 60);
    const metaDescription = cleanContent.slice(0, 150);

    return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        images: post.featuredImage?.node.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
      },
    };
  } catch (err) {
    console.error('Failed to fetch metadata:', err);
    return {
      title: 'Post not found | Bixeltek Blog',
      description: 'The blog post you’re looking for could not be found.',
    };
  }
}

// 📰 MAIN BLOG PAGE
export default async function SinglePostPage({ params }: Props) {
  const { slug } = params;

  const { post } = await client.request<GetSinglePostResponse>(GET_SINGLE_POST, { slug });
  const suggested = await client.request<SuggestedPostsResponse>(GET_SUGGESTED_POSTS, {
    excludeId: post.id,
  });

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const readTime = calculateReadTime(post.content);

  return (
    <>
      <div className="bg-blue-700 text-white pt-40 pb-24 px-6 sm:px-12 lg:px-24">
        <div className="sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col items-center justify-center text-center lg:text-center">

          <h1 className="text-4xl sm:text-5xl font-bold text-center leading-tight mb-8">{post.title}</h1>

          {/* Blog excerpt */}
          <p className="md:text-base sm:text-sm text-center max-w-[80%] mx-auto text-white/90  lg:mx-0 mb-6">
            {post.content
              .replace(/<[^>]*>/g, '')
              .split(' ')
              .slice(0, 40)
              .join(' ') + '...'}
          </p>

          {/* Optional CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-center gap-4 mb-6">
            <div>
              <ul className="text-sm text-white flex gap-4 mt-1 justify-center sm:justify-start">
                <h4 className='border-r border-white/80 pr-4'>By {post.author.node.name}</h4>
                <li className='border-r border-white/80 pr-4'>{formattedDate}</li>
                <li>{readTime}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-transparent text-black min-h-screen sm:py-16 lg:py-24">
        <div className="sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-10">
          {/* Main content */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            {post.featuredImage?.node.sourceUrl && (
              <figure className="mb-6">
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  className="w-full object-cover rounded-xl"
                />
                <figcaption className="mt-3 text-sm text-center text-neutral-500">Featured image</figcaption>
              </figure>
            )}

           <div
  className="font-inter leading-relaxed text-neutral-900 text-base
             [&_h1]:text-5xl [&_h1]:font-bold
             [&_h2]:text-3xl [&_h2]:mb-4 [&_h2]:font-semibold
             [&_h3]:text-3xl [&_h3]:mb-4 [&_h3]:mt-5 [&_h3]:font-semibold
             [&_h4]:text-xl
             [&_h5]:text-xl
             [&_h6]:text-lg
             [&_p]:mb-4
             [&_ul]:list-disc [&_ul]:pl-6
             [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-700"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>


            <div className="mt-10">
              {post.categories?.nodes.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="m-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="backdrop-blur-md bg-black/5 border border-white/10 py-8 px-4 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold font-sofiasanscondensed tracking-wide text-neutral-900 mb-4">
                Suggested Posts
              </h2>
              <ul className="space-y-4">
                {suggested.posts.nodes.map((post) => (
                  <li key={post.slug} className="flex gap-3 items-center">
                    <img
                      src={post.featuredImage?.node.sourceUrl || 'https://via.placeholder.com/64'}
                      alt={post.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-medium font-poppins text-neutral-900 hover:underline hover:underline-offset-1"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-black/80 leading-snug line-clamp-2">
                        {post.excerpt.replace(/<[^>]+>/g, '')}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
