import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BlurFade from '@/components/ui/blur-fade';

import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm text-muted-foreground font-sans">
          <strong>Frontend Developer</strong> specializing in modern web technologies. Creating{' '}
          <strong>accessible, responsive</strong> applications that deliver exceptional user
          experiences.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
      </header>

      <section className="space-y-6">
        <article>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            Building <strong>dynamic web applications</strong> using <strong>React</strong>,{' '}
            <strong>Next.js</strong>, and <strong>Vue.js</strong>. Focus on{' '}
            <strong>TypeScript</strong> and modern design patterns for scalable, maintainable
            solutions.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
            <li>
              <strong>Accessibility-first</strong> development approach
            </li>
            <li>
              <strong>Responsive design</strong> for all devices
            </li>
            <li>
              <strong>Performance optimization</strong> and best practices
            </li>
            <li>
              <strong>User experience</strong> focused development
            </li>
          </ul>
        </article>

        <article>
          <p className="text-sm text-muted-foreground font-sans mb-4">
            Strong foundation in <strong>design principles</strong> and{' '}
            <strong>UX practices</strong>. Effective collaboration with designers to create seamless
            solutions.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
            <li>
              <strong>Design system</strong> implementation
            </li>
            <li>
              <strong>Cross-functional</strong> team collaboration
            </li>
            <li>
              <strong>Problem-solving</strong> and user-centered design
            </li>
            <li>
              <strong>Polished, impactful</strong> product delivery
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
