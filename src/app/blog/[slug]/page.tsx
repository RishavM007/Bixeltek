import { notFound } from "next/navigation";

interface BlogPostProps {
  params: { slug: string };
}

async function getBlogPost(slug: string) {
  const res = await fetch(`https://bixeltek.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) return null;

  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return notFound();
  }

  const author = post._embedded?.["author"]?.[0]?.name || "Unknown Author";
  const date = new Date(post.date).toLocaleDateString();
  const categories = post._embedded?.["wp:term"]?.[0]?.map((cat: any) => cat.name).join(", ") || "Uncategorized";

  return (
    <main >
      <section className="max-w-full mx-auto">
        <div className="relative isolate mt-[-20px] md:mt-[-60px] lg:mt-[-120px] overflow-hidden bg-black h-[70vh] border-b border-fuchsia-600 md:h-[100vh] lg:h-[70vh] xl:h-[80vh] flex items-center justify-center">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
              <pattern id="hero-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
          </svg>
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
            <div
              className="aspect-[1108/632] w-[80.25rem] bg-gradient-to-l from-[#5544db] to-[#ae07e6] opacity-50"
              style={{
                clipPath:
                  "polygon(53.6% 50.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 12.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
          </div>
          <div className="max-w-full px-4 text-center lg:max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-white lg:text-5xl">
              {post.title.rendered}
            </h1>
            <p className="mt-5 text-md text-gray-100">By {author} | {date} | {categories}</p>
          </div>
        </div>
      </section>

      <article className="prose prose-invert max-w-[85%] mx-auto mt-10 mb-32 [&_iframe]:mx-auto [&_iframe]:block [&_iframe]:w-3/4 [&_iframe]:h-auto md:[&_iframe]:h-[600px] ">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>
    </main>
  );
}
