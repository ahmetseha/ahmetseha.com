import Link from 'next/link';

export default function BookmarksPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="bookmarks-intro">
        <h2 className="text-2xl font-bold tracking-tight font-sans mb-6">Bookmarks</h2>
        <p className="text-base text-foreground font-sans leading-relaxed">
          I organize my bookmarks on{' '}
          <Link
            href="https://raindrop.io/ahmetsehacar"
            target="_blank"
            className="text-blue-600 underline font-medium underline-offset-4 hover:text-blue-700 transition-colors"
          >
            raindrop.io
          </Link>
          . I use it for CSS resources, UI references, npm packages, films and shows, blog posts,
          YouTube channels, and accounts I want to keep track of.
        </p>
      </section>

      <section id="bookmarks-embed">
        <iframe
          style={{
            border: '0',
            width: '100%',
            height: '664px',
          }}
          className="rounded-lg"
          allowFullScreen
          src="https://raindrop.io/ahmetsehacar/embed/me/no-header=true&theme=light"
          title="Raindrop.io Bookmarks"
        />
      </section>
    </main>
  );
}
