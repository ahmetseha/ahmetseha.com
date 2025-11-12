import Experience from '@/components/experience';
import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

export default function WorkPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 pt-[220px] pb-24 space-y-12">
      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Experience delay={BLUR_FADE_DELAY * 2} />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
