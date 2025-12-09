import { Github, Globe } from 'lucide-react';

const projects = [
  {
    image: '/git-score-lab.png',
    title: 'Git Score Lab',
    dates: 'April 2023 - September 2023',
    href: 'https://gitscorelab.netlify.app/',
    description:
      'Git Score Lab is a tool that helps you track your Git contributions and see your progress over time.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Supabase', 'Netlify'],
    links: [
      {
        icon: <Github className="size-3" />,
        type: 'Source',
        href: 'https://github.com/ahmetseha/git-score-lab',
      },
    ],
  },
  {
    image: '/tr-slugify.png',
    title: 'tr-slugify',
    dates: 'June 2023 - Present',
    href: 'https://tr-slugify-site.vercel.app/',
    description:
      'NPM package that correctly converts Turkish special characters and creates slugs for URLs.',
    tags: ['TypeScript', 'npm'],
    links: [
      {
        icon: <Globe className="size-3" />,
        type: 'Website',
        href: 'https://tr-slugify-site.vercel.app/',
      },
      {
        icon: <Github className="size-3" />,
        type: 'Source',
        href: 'https://github.com/ahmetseha/tr-slugify',
      },
    ],
  },
  {
    image: '/story-craft.png',
    title: 'story-craft',
    dates: 'Jan 2024 - Feb 2024',
    href: 'https://story-craft-drab.vercel.app/',
    description:
      'AI-powered Turkish story generator application built with modern web technologies.',
    tags: [
      'React 19',
      'TypeScript',
      'Vite',
      'CSS Modules',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Google Gemini AI',
      'CORS',
    ],
    links: [
      {
        icon: <Globe className="size-3" />,
        type: 'Website',
        href: 'https://story-craft-drab.vercel.app/',
      },
      {
        icon: <Github className="size-3" />,
        type: 'Source',
        href: 'https://github.com/ahmetseha/story-craft',
      },
    ],
  },
  {
    image: '/path-way.jpg',
    title: 'path-way-app',
    dates: 'April 2023 - September 2023',
    href: 'https://github.com/ahmetseha/path-way-app',
    description:
      'PathWay is a travel planning application developed for backpackers and travel enthusiasts that works offline. You can use maps, plan your trips, and manage your routes without an internet connection.',
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Tailwind CSS',
      'React Navigation',
      'React Native Maps',
    ],
    links: [
      {
        icon: <Github className="size-3" />,
        type: 'Source',
        href: 'https://github.com/ahmetseha/path-way-app',
      },
    ],
  },
];

export default projects;
