import Link from 'next/link';

import Container from '@/components/shared/container';
import Section from '@/components/shared/section';

export default function BookmarksPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pt-[240px] pb-24 space-y-12">
      <section id="bookmarks-intro">
        <h2 className="text-2xl font-bold tracking-tight font-sans mb-6">Yer İmleri</h2>
        <p className="text-sm text-muted-foreground">
            Yer imlerimi{' '}
            <Link
              href="https://raindrop.io/ahmetsehacar"
              target="_blank"
              className="text-blue-600 underline font-medium underline-offset-4 hover:text-blue-700 transition-colors"
            >
              raindrop.io
            </Link>
            &apos;da kategorilere göre düzenliyorum. CSS kaynakları, UI tasarım örnekleri, npm
            paketleri, film/dizi önerileri, okunacak blog yazıları, YouTube kanalları ve takip
            ettiğim Twitter hesaplarını burada saklıyorum.
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
