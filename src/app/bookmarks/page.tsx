import Link from "next/link";
import { ExternalLink } from "lucide-react";

const bookmarks = [
  {
    title: "Next.js Documentation",
    description: "Next.js resmi dokümantasyonu",
    url: "https://nextjs.org/docs",
    category: "Dokümantasyon",
  },
  {
    title: "Tailwind CSS",
    description: "Tailwind CSS resmi web sitesi",
    url: "https://tailwindcss.com",
    category: "CSS",
  },
  {
    title: "React Documentation",
    description: "React resmi dokümantasyonu",
    url: "https://react.dev",
    category: "Dokümantasyon",
  },
  {
    title: "TypeScript Documentation",
    description: "TypeScript resmi dokümantasyonu",
    url: "https://www.typescriptlang.org/docs",
    category: "Dokümantasyon",
  },
  {
    title: "shadcn/ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS",
    url: "https://ui.shadcn.com",
    category: "UI",
  },
  {
    title: "MDX Documentation",
    description: "MDX resmi dokümantasyonu",
    url: "https://mdxjs.com",
    category: "Dokümantasyon",
  },
];

const categories = Array.from(
  new Set(bookmarks.map((bookmark) => bookmark.category))
);

export default function BookmarksPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Yer İmleri</h1>
        <p className="text-lg text-muted-foreground">
          Faydalı bulduğum web siteleri ve kaynaklar.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-bold">{category}</h2>
            <div className="grid gap-4">
              {bookmarks
                .filter((bookmark) => bookmark.category === category)
                .map((bookmark) => (
                  <div
                    key={bookmark.url}
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {bookmark.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {bookmark.description}
                        </p>
                      </div>
                      <Link
                        href={bookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
