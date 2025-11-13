import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramsData = await params;
  const post = await getPostBySlug(paramsData.slug);

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
  const paramsData = await params;
  const post = await getPostBySlug(paramsData.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
      <article className="w-full">
        <div className="mb-6 sm:mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Blog'a Dön
          </Link>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">{post.title}</h1>
        
        <div className="flex gap-2 text-sm text-muted-foreground mb-8 sm:mb-12">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-3xl prose-h1:mb-4
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-base prose-p:leading-7 prose-p:mb-4
          prose-a:text-foreground prose-a:underline prose-a:decoration-muted-foreground/50 hover:prose-a:decoration-foreground
          prose-strong:font-semibold prose-strong:text-foreground
          prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-muted prose-pre:border prose-pre:border-border
          prose-ul:my-4 prose-ol:my-4 prose-li:my-1
          prose-img:rounded-lg prose-img:border prose-img:border-border">
          {post.content}
        </div>
      </article>
    </main>
  );
}
