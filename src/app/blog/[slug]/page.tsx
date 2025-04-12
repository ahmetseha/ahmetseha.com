import { notFound } from "next/navigation"
import { type BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/utils"
import { getPostBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="space-y-4 mb-8">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Blog'a Dön
        </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
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
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
