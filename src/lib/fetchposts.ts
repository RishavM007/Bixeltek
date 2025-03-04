import { Post } from "@/types/Posts";
export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://demo.bixeltek.com/headless/wp-json/wp/v2/posts?per_page=10", {
        next: { revalidate: 10 }, 
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}