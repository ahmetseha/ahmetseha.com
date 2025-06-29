import Link from "next/link";
import { type BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col space-y-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h2>
      </Link>
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
      <p className="text-muted-foreground">{post.description}</p>
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
    </article>
  );
}
