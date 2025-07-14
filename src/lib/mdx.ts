import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeImgSize from 'rehype-img-size';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import remarkGfm from 'remark-gfm';

import { type BlogPost, type MDXContent } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypePrism,
    rehypeSlug,
    [
      rehypeToc,
      {
        headings: ['h1', 'h2', 'h3'],
        position: 'before-content',
      },
    ],
    [rehypeImgSize, { dir: 'public' }],
  ],
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // Ensure the directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory does not exist:', postsDirectory);
      return [];
    }

    // Get all MDX files from the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map(async (fileName) => {
          const post = await getPostBySlug(fileName.replace(/\.mdx$/, ''));
          return post;
        })
    );

    // Filter out any null posts and sort by date
    return allPostsData
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Compile MDX content
    const { content: compiledContent } = await compileMDX<MDXContent>({
      source: content,
      options: { parseFrontmatter: true, ...mdxOptions },
    });

    // Validate required fields
    if (!data.title || !data.date) {
      throw new Error(`Missing required fields in ${slug}`);
    }

    // Combine the data with the slug
    return {
      slug,
      title: data.title,
      description: data.description || '',
      date: new Date(data.date).toISOString(),
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      content: compiledContent,
      readingTime: data.readingTime || '5 min',
      author: data.author || 'Ahmet Seha',
      image: data.image || null,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}
