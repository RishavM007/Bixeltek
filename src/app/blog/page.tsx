import { client } from '@/lib/graphql-client';
import { GET_ALL_POSTS } from '@/lib/queries';

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
};

type GetAllPostsResponse = {
  posts: {
    nodes: Post[];
  };
};

export default async function BlogPage() {
  const data = await client.request<GetAllPostsResponse>(GET_ALL_POSTS);
  const posts: Post[] = data.posts.nodes;

  return (
    <section className="py-24 bg-[black] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-center mb-16 text-white">
          Our Latest Blog
        </h2>

        <div className="flex justify-center gap-y-8 lg:gap-y-0 lg:flex-row lg:justify-center lg:gap-x-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-700 bg-[#1a1a1a] rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <img
                  src={
                    post.featuredImage?.node?.sourceUrl ||
                    'https://via.placeholder.com/400x250.png?text=No+Image'
                  }
                  alt={post.title}
                  className="rounded-t-2xl w-full h-64 object-cover"
                />
              </div>

              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-[#1f1f1f]">
                <span className="text-indigo-400 font-medium mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>

                <h4 className="text-xl text-white font-semibold leading-8 mb-5">
                  {post.title}
                </h4>

                <div
                  className="text-gray-400 leading-6 mb-8 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />

                <a
                  href={`/blog/${post.slug}`}
                  className="cursor-pointer text-lg text-indigo-400 font-semibold hover:underline"
                >
                  Read more..
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
