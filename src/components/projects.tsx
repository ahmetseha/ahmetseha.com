import { Github, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useProjects() {
  const t = useTranslations('Projects');

  return [
    {
      id: 'git-score-lab',
      image: '/git-score-lab.png',
      title: t('git-score-lab.title'),
      dates: 'April 2023 - September 2023',
      href: 'https://gitscorelab.netlify.app/',
      description: t('git-score-lab.description'),
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
      id: 'tr-slugify',
      image: '/tr-slugify.png',
      title: t('tr-slugify.title'),
      dates: 'June 2023 - Present',
      href: 'https://tr-slugify-site.vercel.app/',
      description: t('tr-slugify.description'),
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
      id: 'story-craft',
      image: '/story-craft.png',
      title: t('story-craft.title'),
      dates: 'Jan 2024 - Feb 2024',
      href: 'https://story-craft-drab.vercel.app/',
      description: t('story-craft.description'),
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
      id: 'path-way-app',
      image: '/path-way.jpg',
      title: t('path-way-app.title'),
      dates: 'April 2023 - September 2023',
      href: 'https://github.com/ahmetseha/path-way-app',
      description: t('path-way-app.description'),
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
}
