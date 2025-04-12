import { notFound } from "next/navigation"
import { type BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/utils"
import { getPostBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"

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
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </header>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
