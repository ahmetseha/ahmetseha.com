import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowLeft, Clock3 } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { BlogTableOfContents } from '@/components/blog-table-of-contents';
import BlurFade from '@/components/magicui/blur-fade';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

import { routing } from '@/i18n/navigation';

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const BLUR_FADE_DELAY = 0.04;

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
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-16 sm:px-6 sm:pb-24">
      <article className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY} className="2xl:w-[44rem]">
          <header className="mb-9 w-full border-b pb-7 sm:mb-12 sm:pb-9">
            <div className="mb-6">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              >
                <span className="grid size-6 place-items-center rounded-full border border-zinc-700 transition-colors group-hover:border-primary/60 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowLeft className="size-3" aria-hidden="true" />
                </span>
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
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                {post.description}
              </p>
            )}
          </header>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2} className="xl:w-[56rem] 2xl:w-[61rem]">
          {post.headings.length > 0 && (
            <details className="mb-8 border-y py-4 xl:hidden">
              <summary className="cursor-pointer list-none font-mono text-[10px] uppercase tracking-[0.14em] text-primary [&::-webkit-details-marker]:hidden">
                On this page
              </summary>
              <div className="mt-4">
                <BlogTableOfContents headings={post.headings} variant="mobile" />
              </div>
            </details>
          )}

          <div className="grid min-w-0 items-start gap-12 xl:grid-cols-[minmax(0,39rem)_14rem] 2xl:grid-cols-[minmax(0,44rem)_14rem]">
            <div
              className="prose prose-invert min-w-0 max-w-none
            prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h1:mb-4 prose-h1:text-3xl
              prose-h2:mb-4 prose-h2:mt-12 prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-3 prose-h2:text-2xl prose-h2:text-primary
              prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl prose-h3:text-[#f5e66a]
            prose-p:mb-5 prose-p:text-base prose-p:leading-8 prose-p:text-zinc-300
            prose-a:text-foreground prose-a:underline prose-a:decoration-primary/50 hover:prose-a:decoration-primary
            prose-strong:font-semibold prose-strong:text-foreground
            prose-blockquote:border-l-primary prose-blockquote:text-zinc-300
            prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-foreground
            prose-pre:border prose-pre:border-border prose-pre:bg-muted
            prose-ul:my-5 prose-ul:text-zinc-300 prose-ol:my-5 prose-ol:text-zinc-300 prose-li:my-1.5 prose-li:leading-7 prose-li:text-zinc-300
            prose-img:rounded-lg prose-img:border prose-img:border-border"
            >
              {post.content}
            </div>

            {post.headings.length > 0 && (
              <aside className="sticky top-8 hidden border-l border-zinc-700/80 pl-5 xl:block">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  On this page
                </p>
                <BlogTableOfContents headings={post.headings} />
              </aside>
            )}
          </div>
        </BlurFade>
      </article>
    </main>
  );
}
