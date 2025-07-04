// app/blog/page.tsx

import { client } from '@/lib/graphql-client';
import { GET_ALL_POSTS, GET_ALL_CATEGORIES_WITH_COUNT } from '@/lib/queries';
import { BlogPageUI } from '@/components/BlogPage';
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

type GetAllPostsResponse = {
  posts: { nodes: Post[] };
};

type GetCategoriesResponse = {
  categories: { nodes: Category[] };
};

export default async function BlogPage() {
  const [postsData, categoriesData] = await Promise.all([
    client.request<GetAllPostsResponse>(GET_ALL_POSTS),
    client.request<GetCategoriesResponse>(GET_ALL_CATEGORIES_WITH_COUNT),
  ]);

  const posts = postsData.posts.nodes;
  const categories = categoriesData.categories.nodes;

  return <BlogPageUI allPosts={posts} categories={categories} />;
}

