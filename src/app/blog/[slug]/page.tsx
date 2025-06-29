import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import Markdown from "markdown-to-jsx";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

export default async function BlogPostPage({ params }: any) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="flex flex-col gap-4">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Bloga Dön
        </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="text-sm px-2 py-1 bg-muted rounded-full text-muted-foreground hover:text-primary transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <BlurFade delay={0.5} duration={0.5}>
          <Markdown>{post.content}</Markdown>
        </BlurFade>
      </div>
    </article>
  );
}
