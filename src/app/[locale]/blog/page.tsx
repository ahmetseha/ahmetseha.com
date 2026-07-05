import { setRequestLocale } from 'next-intl/server';

import BlurFade from '@/components/magicui/blur-fade';

import { getAllPosts } from '@/lib/mdx';

import { Link } from '@/i18n/navigation';

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);

  const posts = await getAllPosts();

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="blog-posts">
        <div className="space-y-4">
          {posts.map((post, index) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * (2 + index * 0.5)}>
              <div className="flex items-start space-x-4 group">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-semibold text-lg group-hover:text-foreground transition-colors hover:underline text-foreground"
                    >
                      {post.title}
                    </Link>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-base text-foreground font-sans leading-relaxed mt-2">
                    {post.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <span className="font-mono text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center space-x-1">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2 py-1 rounded-full font-mono text-xs bg-muted text-muted-foreground text-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-sm text-muted-foreground">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
