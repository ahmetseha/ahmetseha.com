import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';

const BLUR_FADE_DELAY = 0.04;

export default function HobbiesPage() {
  return (
    <main className="flex flex-col space-y-10 max-w-2xl mx-auto px-6 pt-[240px] pb-24 min-h-screen">
      <section id="hobbies-hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text="Code • Design • 3D"
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl text-muted-foreground"
              delay={BLUR_FADE_DELAY * 2}
              text="Yaratıcılık, teknoloji ve sanatın kesiştiği noktada hobilerimin hikayesi"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
