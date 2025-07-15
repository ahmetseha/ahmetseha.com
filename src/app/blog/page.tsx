import { BlogCard } from '@/components/blog/blog-card';
import { BlogLayout } from '@/components/blog/blog-layout';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';

import { getAllPosts } from '@/lib/mdx';

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <BlogLayout>
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="space-y-2">
            <BlurFadeText
              text="Blog"
              className="text-4xl font-bold"
              delay={BLUR_FADE_DELAY}
              yOffset={8}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="text-lg text-muted-foreground">
                Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar.
              </p>
            </BlurFade>
          </div>
        </BlurFade>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * (3 + index * 0.5)}>
              <BlogCard post={post} />
            </BlurFade>
          ))}
        </div>
      </div>
    </BlogLayout>
  );
}
