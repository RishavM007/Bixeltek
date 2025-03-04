import React from "react";
import Image from "next/image";
import { fetchPosts } from "@/lib/fetchposts";
import Link from "next/link";
import { Post } from "@/types/Posts";

export default async function BlogList() {
    const posts: Post[] = await fetchPosts();

    return (
        <section className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:container mx-auto mt-44 md:mt-24 lg:mt-44 mb-10 md:mb-16 lg:mb-20">
    <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => {
                
                const excerptText = post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""); 
                const limitedExcerpt = excerptText.split(" ").slice(0, 20).join(" ") + "..."; 

                return (
                    <div key={post.id} className="border-b pb-2">
                        {post.featured_media_url && (
                            <Image
                                src={post.featured_media_url}
                                alt={post.title.rendered}
                                width={600}
                                height={350}
                                className="w-full h-[350px] object-cover rounded-lg mb-4"
                            />
                        )}
                        <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
                            <div className="text-white font-sofiasanscondensed" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                        <p className="text-gray-100">{limitedExcerpt}</p> {/* Display limited excerpt */}
                    </div>
                );
            })}
        </div>
    </div>
</section>


    );
}
