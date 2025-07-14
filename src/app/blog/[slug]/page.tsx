import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: "The post you're looking for doesn't exist",
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto py-8">
      <h1>{post.title}</h1>
      <div className="flex gap-2 text-sm text-gray-500">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="mt-8">{post.content}</div>
    </article>
  );
}
