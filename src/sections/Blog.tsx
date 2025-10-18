'use client';
import React, { useEffect, useState } from 'react';
import { GET_ALL_POSTS } from '@/lib/queries';
import Image from 'next/image';
import { client } from '@/lib/graphql-client';
import Link from 'next/link';

type Blog = {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

type RecentPostsResponse = {
  posts: {
    nodes: Blog[];
  };
};

export default function Blog() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.request<RecentPostsResponse>(GET_ALL_POSTS);
        setPosts(data.posts.nodes.slice(0, 3)); 
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-14">Read the latest insights powering business growth.</h2>

        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-purple-600">
              <div className="flex items-center mb-6">
                <Image
                  src={post.featuredImage?.node.sourceUrl || '/placeholder.jpg'}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="rounded-lg h-[250px] w-full object-cover"
                />
              </div>
              <div className="block">
                <h4
                  className="text-gray-900 font-medium leading-8 mb-9"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                ></h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By {post.author.node.name}</h6>
                  <span className="text-sm text-indigo-600">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <a
          href="/blog"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  );
}
