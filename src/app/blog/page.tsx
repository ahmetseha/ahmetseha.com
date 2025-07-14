import { BlogCard } from '@/components/blog/blog-card';
import { BlogLayout } from '@/components/blog/blog-layout';

import { getAllPosts } from '@/lib/mdx';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <BlogLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar.
          </p>
        </div>
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </BlogLayout>
  );
}
