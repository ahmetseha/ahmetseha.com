import Link from 'next/link';

import { ArrowUpRight, Clock3 } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

import BlurFade from '@/components/magicui/blur-fade';
import { HoverBeam } from '@/components/ui/hover-beam';

import { getAllPosts } from '@/lib/mdx';

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);

  const posts = await getAllPosts();

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-16 sm:px-6 sm:pb-24">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="mb-8 border-b pb-6 sm:mb-10 sm:pb-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                Field notes
              </p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">Writing</h1>
            </div>
            <span className="mb-1 shrink-0 rounded-full border bg-card/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {String(posts.length).padStart(2, '0')} entries
            </span>
          </div>
          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Notes on software, product thinking, developer tools, and the things I learn while
            building.
          </p>
        </header>
      </BlurFade>

      <section id="blog-posts" aria-label="Blog posts">
        <div>
          {posts.map((post, index) => (
            <BlurFade
              key={post.slug}
              delay={BLUR_FADE_DELAY * (2 + index * 0.5)}
              className={index < posts.length - 1 ? 'border-b' : undefined}
            >
              <HoverBeam preset="line" borderRadius={0}>
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="group relative grid grid-cols-[auto_minmax(0,1fr)_auto] gap-3 py-6 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/70 sm:gap-5 sm:py-8"
                >
                  <span className="pt-0.5 font-mono text-[10px] tabular-nums text-primary/70 transition-colors group-hover:text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <article className="min-w-0">
                    <div className="mb-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      <span className="text-primary/90">{post.category}</span>
                      <span aria-hidden="true" className="size-1 rounded-full bg-primary/70" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                        })}
                      </time>
                      <span aria-hidden="true" className="size-1 rounded-full bg-primary/70" />
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="size-3" aria-hidden="true" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="max-w-xl text-base font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 max-w-xl text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                      {post.description}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-3 hidden flex-wrap gap-x-3 gap-y-1 sm:flex">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground"
                          >
                            <span className="mr-0.5 text-primary/80">#</span>
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="font-mono text-[9px] text-muted-foreground/60">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </article>

                  <span className="grid size-8 shrink-0 place-items-center rounded-full border text-muted-foreground transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </HoverBeam>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
