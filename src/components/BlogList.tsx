import React from 'react'
import { fetchPosts } from "@/lib/fetchposts";
import Link from 'next/link';
import { Post } from "@/types/Posts";

export default async function BlogList() {
    const posts: Post[] = await fetchPosts();
  return (
    <>
    <section className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:container mx-auto mt-44 md:mt-24 lg:mt-44 mb-10 md:mb-16 lg:mb-20">
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
                    <h1 className="text-3xl font-bold">Blog Posts</h1>
                    <ul className="mt-4 space-y-4">
                        {posts.map((post) => (
                            <li key={post.id} className="border-b flex flex-col pb-2">
                                <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:underline">
                                    <div className='text-white font-sofiasanscondensed' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                </Link>
                                <p className="text-gray-100" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
    </>
  )
}
