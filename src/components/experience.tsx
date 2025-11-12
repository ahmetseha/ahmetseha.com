import BlurFade from '@/components/magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;

const experiences = [
  {
    company: 'Alışgidiş',
    position: 'Senior Frontend Developer',
    period: 'February 2025 – October 2025',
    description:
      'Developing comprehensive e-commerce solutions for both web and mobile platforms. Focus on creating scalable, user-friendly applications using cutting-edge technologies to enhance the online shopping experience and drive business growth.',
    highlights: [
      'Developing robust web applications using Next.js & TypeScript for optimal performance',
      'Utilizing shadcn/ui components for modern and intuitive user interfaces',
      'Implementing performance optimizations and responsive design principles across all platforms',
      'Collaborating with design and backend teams to deliver seamless user experiences',
    ],
  },
  {
    company: 'Gordion',
    position: 'Frontend Developer',
    period: 'December 2022 – January 2025',
    location: 'Remote',
    description:
      'Contributed to the development of both B2B and B2C applications in the tourism sector. Focused on delivering seamless and visually appealing user experiences using modern web technologies while ensuring optimal performance and user satisfaction.',
    highlights: [
      'Developed and maintained scalable applications ensuring optimal performance',
      'Leveraged React, Next.js, and jQuery to build dynamic and responsive interfaces',
      'Utilized shadcn and Tailwind CSS for efficient and customizable design implementations',
      'Collaborated with cross-functional teams to deliver high-quality, user-focused solutions',
      'Continuously improved existing systems, incorporating feedback and optimizing workflows',
    ],
  },
];

interface ExperienceProps {
  delay?: number;
}

export default function Experience({ delay = BLUR_FADE_DELAY * 5 }: ExperienceProps) {
  return (
    <main>
      <section>
        {experiences.map((experience, idx) => (
          <article key={idx}>
            <h3 className="font-semibold text-lg mb-1">{experience.company}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {experience.position}
              {experience.location && `, ${experience.location}`} • {experience.period}
            </p>

            <p className="text-sm text-muted-foreground font-sans mb-4">{experience.description}</p>

            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-sans">
              {experience.highlights.map((highlight, highlightIdx) => (
                <li key={highlightIdx}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
