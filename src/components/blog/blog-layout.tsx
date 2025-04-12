import Link from "next/link"
import { type BlogPost } from "@/types/blog"

interface BlogLayoutProps {
  posts: BlogPost[]
  children: React.ReactNode
}

export function BlogLayout({ posts, children }: BlogLayoutProps) {
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8">
      <main>{children}</main>
      <aside className="space-y-8">
        <div className="p-4 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/blog/category/${category}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4">Etiketler</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-sm px-2 py-1 bg-muted rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
