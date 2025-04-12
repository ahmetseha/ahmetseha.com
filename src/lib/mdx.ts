import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/data/posts");

export function getAllPosts(): BlogPost[] {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get all MDX files from the posts directory
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        tags: data.tags,
        content,
        readingTime: data.readingTime,
        author: data.author,
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      tags: data.tags,
      content,
      readingTime: data.readingTime,
      author: data.author,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}
