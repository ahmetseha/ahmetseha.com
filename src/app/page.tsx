import { AtSign, ExternalLink, Github, Youtube } from 'lucide-react';

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
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={DATA.contact.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              <Youtube className="size-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Youtube</span>
              <ExternalLink className="ml-auto size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={DATA.contact.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              <Github className="size-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Github</span>
              <ExternalLink className="ml-auto size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={DATA.contact.social.readcv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 group"
            >
              <AtSign className="size-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Read.cv</span>
              <ExternalLink className="ml-auto size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
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
