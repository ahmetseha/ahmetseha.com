import BlurFade from '@/components/magicui/blur-fade';

import { DATA } from '@/data/resume';

import About from './about/page';

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pb-16 sm:pb-24 space-y-8 sm:space-y-12">
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <About />
          </div>
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mail
            </a>
            <a
              href={DATA.contact.social.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href={DATA.contact.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href={DATA.contact.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Github
            </a>
            <a
              href={DATA.contact.social.bookmarks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Bookmarks
            </a>
          </div>
        </BlurFade>
      </section>

      {/* <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <BlogPage />
        </BlurFade>
      </section> */}
    </main>
  );
}
