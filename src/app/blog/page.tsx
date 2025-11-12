import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';

import { getAllPosts } from '@/lib/mdx';

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="blog-intro">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className="text-sm text-muted-foreground">Technical, idea and opinion articles.</p>
        </BlurFade>
      </section>

      <section id="blog-posts">
        <div className="space-y-4">
          {posts.map((post, index) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * (2 + index * 0.5)}>
              <div className="flex items-start space-x-4 group">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <a
                      href={`/blog/${post.slug}`}
                      className="font-semibold text-base group-hover:text-foreground transition-colors hover:underline"
                    >
                      {post.title}
                    </a>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
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
                        className="lucide lucide-arrow-right"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('tr-TR', {
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
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground text-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-muted-foreground">
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
