import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      author: item.fields.author,
      date: new Date(item.sys.createdAt).toLocaleDateString(),
      featuredImage: item.fields.featuredImage?.fields?.file?.url,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

export const getBlogPost = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const post = response.items[0];
    return {
      id: post.sys.id,
      title: post.fields.title,
      content: post.fields.content,
      author: post.fields.author,
      date: new Date(post.sys.createdAt).toLocaleDateString(),
      featuredImage: post.fields.featuredImage?.fields?.file?.url,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};
