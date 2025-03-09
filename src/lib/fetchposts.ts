import { Post } from "@/types/Posts";

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://bixeltek.com/wp-json/wp/v2/posts?per_page=10", {
        next: { revalidate: 10 },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts: Post[] = await response.json();

    // Fetch featured media URLs in parallel
    const postsWithImages = await Promise.all(
        posts.map(async (post) => {
            if (post.featured_media) {
                try {
                    const mediaResponse = await fetch(
                        `https://bixeltek.com/wp-json/wp/v2/media/${post.featured_media}`
                    );

                    if (mediaResponse.ok) {
                        const mediaData = await mediaResponse.json();
                        return { ...post, featured_media_url: mediaData.source_url };
                    }
                } catch (error) {
                    console.error(`Error fetching media for post ${post.id}:`, error);
                }
            }
            return { ...post, featured_media_url: "" }; // Fallback if no image is found
        })
    );

    return postsWithImages;
}
