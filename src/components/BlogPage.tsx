'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: { node: { sourceUrl: string } };
  categories?: { nodes: { name: string; slug: string }[] };
};

type Category = { name: string; slug: string; count: number };

export function BlogPageUI({ allPosts, categories }: { allPosts: Post[]; categories: Category[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
  return allPosts.filter(post => {
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    // If no category is selected, include all posts (even if they have no categories)
    if (!selectedCategory) {
      return matchSearch;
    }

    // If a category is selected, include only posts that have categories AND match selected
    const matchCategory = post.categories?.nodes.some(cat => cat.slug === selectedCategory);
    return matchSearch && matchCategory;
  });
}, [searchQuery, selectedCategory, allPosts]);

  const recentPosts = useMemo(() => {
    
    return allPosts
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [allPosts]);

  return (
    <section className="flex bg-transparent text-neutral-800 min-h-screen sm:py-40 md:py-48 lg:py-64 px-6 lg:px-16">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:w-1/4 flex-col gap-8 pr-8 sticky top-0 h-fit">
        {/* Search */}
        <div className="bg-neutral-900 p-4 rounded-xl">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Category Filter */}
        <div className="bg-neutral-900 py-8 px-5 rounded-xl">
          <h2 className="text-2xl tracking-wide text-white/90 font-sofiasanscondensed font-semibold mb-2">Categories</h2>
          <ul className="flex flex-col gap-3">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`flex text-white font-poppins justify-between px-2 py-1 rounded cursor-pointer ${!selectedCategory ? 'bg-purple-700' : 'hover:bg-neutral-800'}`}
            >
              <span>All</span>
              <span>{allPosts.length}</span>
            </li>
            {categories.map(cat => (
              <li
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`flex text-white font-poppins  justify-between px-2 py-1 rounded cursor-pointer ${selectedCategory === cat.slug ? 'bg-purple-700' : 'hover:bg-neutral-800'}`}
              >
                <span>{cat.name}</span>
                <span>{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-neutral-900 py-8 px-5 rounded-xl">
          <h2 className="text-2xl tracking-wide text-white/90 font-sofiasanscondensed font-semibold mb-4">Recent Posts</h2>
          <ul className="flex flex-col gap-4">
            {recentPosts.map(post => (
              <li key={post.slug} className="flex gap-3 items-center">
                <img
                  src={post.featuredImage?.node.sourceUrl || 'https://via.placeholder.com/64'}
                  alt={post.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <Link href={`/blog/${post.slug}`} className="font-medium font-poppins text-white hover:underline hover:underline-offset-1">
                    {post.title}
                  </Link>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {post.excerpt.replace(/<[^>]+>/g, '')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Blog Grid */}
      <div className="flex-1">
        <h2 className="font-sofiasanscondensed text-5xl tracking-wide font-bold text-center mb-16">Our Latest Blog</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="group border border-gray-700 bg-[#1a1a1a] rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.featuredImage?.node.sourceUrl || 'https://via.placeholder.com/400x250.png?text=No+Image'}
                alt={post.title}
                className="rounded-t-2xl w-full h-64 object-cover"
              />
              <div className="p-4 lg:p-6 transition-colors duration-300 group-hover:bg-[#1f1f1f]">
                <span className="text-indigo-400 font-medium mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl text-white font-semibold hover:underline hover:underline-offset-1 leading-8 mb-5">{post.title}</h2>
                </Link>
                <div
                  className="text-gray-400 leading-6 mb-8 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg text-indigo-400 font-semibold hover:underline"
                >
                  Read more..
                </Link>
              </div>
            </div>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center mt-12 text-neutral-400 text-lg">No posts match your filters.</p>
        )}
      </div>
    </section>
  );
}
