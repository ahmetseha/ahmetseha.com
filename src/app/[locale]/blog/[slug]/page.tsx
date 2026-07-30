import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArrowLeft, Clock3 } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

import { Link, routing } from '@/i18n/navigation';

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
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

  return posts.flatMap((post) =>
    routing.locales.map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export default async function BlogPost({ params }: Props) {
  const paramsData = await params;
  setRequestLocale(paramsData.locale);
  const post = await getPostBySlug(paramsData.slug);
  const t = await getTranslations('Blog');

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-16 sm:px-6 sm:pb-24">
      <article className="w-full">
        <header className="mb-9 max-w-2xl border-b pb-7 sm:mb-12 sm:pb-9">
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
            <Link
              href="/blog"
              className="border-b border-primary pb-1 text-primary transition-opacity hover:opacity-80"
            >
              Blog
            </Link>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3" aria-hidden="true" />
              {t('backToBlog')}
            </Link>
          </div>

          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3" aria-hidden="true" />
              {post.readingTime}
            </span>
            <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
            <span>{post.category}</span>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                >
                  <span className="mr-0.5 text-primary">#</span>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.description && (
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {post.description}
            </p>
          )}
        </header>

        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,42rem)_12rem]">
          <div
            className="prose prose-neutral max-w-none
            prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
            prose-h1:mb-4 prose-h1:text-3xl
            prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-2xl
            prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl
            prose-p:mb-5 prose-p:text-base prose-p:leading-8 prose-p:text-foreground/90
            prose-a:text-foreground prose-a:underline prose-a:decoration-primary/50 hover:prose-a:decoration-primary
            prose-strong:font-semibold prose-strong:text-foreground
            prose-blockquote:border-l-primary prose-blockquote:text-foreground/90
            prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-foreground
            prose-pre:border prose-pre:border-border prose-pre:bg-muted
            prose-ul:my-5 prose-ul:text-foreground/90 prose-ol:my-5 prose-ol:text-foreground/90 prose-li:my-1.5 prose-li:leading-7
            prose-img:rounded-lg prose-img:border prose-img:border-border"
          >
            {post.content}
          </div>

          {post.headings.length > 0 && (
            <aside className="sticky top-8 hidden border-l pl-4 lg:block">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                On this page
              </p>
              <nav aria-label="Table of contents">
                <ol className="space-y-3">
                  {post.headings.map((heading) => (
                    <li key={heading.id} className={heading.level === 3 ? 'pl-3' : undefined}>
                      <a
                        href={`#${heading.id}`}
                        className="block font-mono text-[10px] leading-relaxed text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
        </div>
      </article>
    </main>
  );
}
