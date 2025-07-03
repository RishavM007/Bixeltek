import { client } from '@/lib/graphql-client';
import { GET_SINGLE_POST } from '@/lib/queries';

type Props = {
  params: {
    slug: string;
  };
};

type SinglePost = {
  title: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
};

type GetSinglePostResponse = {
  post: SinglePost;
};

export default async function SinglePostPage({ params }: Props) {
  const { slug } = params;
  const data = await client.request<GetSinglePostResponse>(GET_SINGLE_POST, { slug });
  const post = data.post;

  return (
    <article className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.featuredImage?.node?.sourceUrl && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt=""
          className="mb-6 w-full rounded"
        />
      )}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
