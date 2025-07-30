import Link from 'next/link';

import Container from '@/components/shared/container';
import Section from '@/components/shared/section';

export default function BookmarksPage() {
  return (
    <>
      <Container>
        <Section title="Yer İmleri">
          <p className="text-muted-foreground">
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
        </Section>
      </Container>

      <Container className="max-w-6xl md:py-0 mt-6">
        <Section>
          <iframe
            style={{
              border: '0',
              width: '100%',
              height: '664px',
            }}
            allowFullScreen
            src="https://raindrop.io/ahmetsehacar/embed/me/no-header=true&theme=light"
            title="Raindrop.io Bookmarks"
          />
        </Section>
      </Container>
    </>
  );
}
