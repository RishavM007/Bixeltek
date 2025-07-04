import { client } from '@/lib/graphql-client';
import { GET_SINGLE_POST, GET_SUGGESTED_POSTS } from '@/lib/queries';
import Link from 'next/link';

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
    <div className="bg-black text-white min-h-screen py-10">
      <div className="w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-10">
        {/* Main content */}
        <div>
          <div className="flex gap-4 items-center mb-6">
            <img
              className="w-12 h-12 rounded-full border border-neutral-700"
              src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e"
              alt="Author avatar"
            />
            <div>
              <h4 className="font-semibold text-white">Rishav Mondal</h4>
              <ul className="text-xs text-neutral-400 flex gap-4 mt-1">
                <li>{formattedDate}</li>
                <li>{readTime}</li>
              </ul>
            </div>
          </div>

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
            className="space-y-6 leading-relaxed text-neutral-200 text-base"
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
          {/* Search */}
          <div className="bg-neutral-900 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Search</h2>
            <form
              action="/blog"
              method="GET"
              className="relative"
            >
              <input
                type="text"
                name="q"
                placeholder="Search posts..."
                className="w-full p-2 bg-neutral-800 text-white placeholder-neutral-400 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Suggested Posts */}
          <div className="bg-neutral-900 p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Suggested Posts</h2>
            <ul className="space-y-4">
              {suggested.posts.nodes.map((post) => (
                <li key={post.slug} className="border-b border-neutral-800 pb-2">
                  <Link href={`/blog/${post.slug}`} className="block text-white font-medium hover:underline">
                    {post.title}
                  </Link>
                  <p className="text-sm text-neutral-500" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
