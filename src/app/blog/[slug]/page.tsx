import { notFound } from "next/navigation";

interface BlogPostProps {
  params: { slug: string };
}

async function getBlogPost(slug: string) {
  const res = await fetch(`https://bixeltek.com/wp-json/wp/v2/posts?slug=${slug}`);
  if (!res.ok) return null;

  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-[90%] mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">{post.title.rendered}</h1>
      <p className="text-gray-100 mb-4">{new Date(post.date).toLocaleDateString()}</p>
      <div
        className="prose max-w-full text-white"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
