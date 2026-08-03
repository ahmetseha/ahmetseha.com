import type { ReactNode } from 'react';

import { Github, Globe, Package, Smartphone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export type ProjectCategory = 'apps' | 'web' | 'tools' | 'npm';

export type Project = {
  id: string;
  image: string;
  screenshots?: string[];
  showcaseAccent?: string;
  showcaseSurface?: string;
  title: string;
  dates: string;
  href: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubRepo?: string;
  npmPackage?: string;
  metrics?: {
    githubStars?: number;
    weeklyDownloads?: number;
  };
  links: {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
};

async function getGithubStars(repository: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return undefined;

    const data = (await response.json()) as { stargazers_count?: unknown };
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : undefined;
  } catch {
    return undefined;
  }
}

async function getWeeklyDownloads(packageName: string) {
  try {
    const response = await fetch(
      `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(packageName)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return undefined;

    const data = (await response.json()) as { downloads?: unknown };
    return typeof data.downloads === 'number' ? data.downloads : undefined;
  } catch {
    return undefined;
  }
}

export async function getProjects() {
  const t = await getTranslations('Projects');

  const projects: Project[] = [
    {
      id: 'pikofocus',
      image: '/pikofocus-icon.jpg',
      screenshots: [
        '/pikofocus-screen-1.jpg',
        '/pikofocus-screen-2.jpg',
        '/pikofocus-screen-3.jpg',
      ],
      showcaseAccent: '#ffd84c',
      showcaseSurface: '#fff1c7',
      title: t('pikofocus.title'),
      dates: '2026 - Present',
      href: 'https://apps.apple.com/tr/app/pikofocus/id6787910540',
      description: t('pikofocus.description'),
      category: 'apps',
      tags: ['iPhone', 'iPad', 'Education', 'Kids 4+'],
      links: [
        {
          icon: <Smartphone className="size-3" />,
          type: 'App Store',
          href: 'https://apps.apple.com/tr/app/pikofocus/id6787910540',
        },
      ],
    },
    {
      id: 'sukuntiles',
      image: '/sukuntiles-icon.jpg',
      screenshots: [
        '/sukuntiles-screen-1.jpg',
        '/sukuntiles-screen-2.jpg',
        '/sukuntiles-screen-3.jpg',
      ],
      showcaseAccent: '#d5ac4c',
      showcaseSurface: '#f5eee5',
      title: t('sukuntiles.title'),
      dates: '2026 - Present',
      href: 'https://apps.apple.com/tr/app/sukuntiles-cozy-puzzle/id6789379758',
      description: t('sukuntiles.description'),
      category: 'apps',
      tags: ['iPhone', 'iPad', 'Puzzle', 'Casual'],
      links: [
        {
          icon: <Smartphone className="size-3" />,
          type: 'App Store',
          href: 'https://apps.apple.com/tr/app/sukuntiles-cozy-puzzle/id6789379758',
        },
      ],
    },
    {
      id: 'kaloricam',
      image: '/kaloricam-icon.jpg',
      screenshots: [
        '/kaloricam-screen-1.jpg',
        '/kaloricam-screen-2.jpg',
        '/kaloricam-screen-3.jpg',
      ],
      showcaseAccent: '#58b99f',
      showcaseSurface: '#e9dfcd',
      title: t('kaloricam.title'),
      dates: '2025 - Present',
      href: 'https://apps.apple.com/tr/app/kaloricam-%C3%A7ek-g%C3%B6r/id6755406090',
      description: t('kaloricam.description'),
      category: 'apps',
      tags: ['iPhone', 'Health & Fitness', 'Camera', 'Nutrition'],
      links: [
        {
          icon: <Smartphone className="size-3" />,
          type: 'App Store',
          href: 'https://apps.apple.com/tr/app/kaloricam-%C3%A7ek-g%C3%B6r/id6755406090',
        },
      ],
    },
    {
      id: 'soul-garden',
      image: '/soul-garden-icon.jpg',
      screenshots: [
        '/soul-garden-screen-1.jpg',
        '/soul-garden-screen-2.jpg',
        '/soul-garden-screen-3.jpg',
      ],
      showcaseAccent: '#5ef0bd',
      showcaseSurface: '#163324',
      title: t('soul-garden.title'),
      dates: '2025 - Present',
      href: 'https://apps.apple.com/tr/app/soul-garden-reflex/id6756220920',
      description: t('soul-garden.description'),
      category: 'apps',
      tags: ['iPhone', 'Action', 'Casual', 'Game Center'],
      links: [
        {
          icon: <Smartphone className="size-3" />,
          type: 'App Store',
          href: 'https://apps.apple.com/tr/app/soul-garden-reflex/id6756220920',
        },
      ],
    },
    {
      id: 'preflint',
      image: '/preflint.png',
      title: t('preflint.title'),
      dates: '2026 - Present',
      href: 'https://seha.studio/preflint',
      description: t('preflint.description'),
      category: 'web',
      tags: ['Nuxt', 'Vue', 'TypeScript', 'Local-first', 'App Store'],
      links: [
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/preflint',
        },
      ],
    },
    {
      id: 'clariole',
      image: '/clariole.png',
      title: t('clariole.title'),
      dates: '2025 - Present',
      href: 'https://seha.studio/cloriole/',
      description: t('clariole.description'),
      category: 'web',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      links: [
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/cloriole/',
        },
      ],
    },
    {
      id: 'seha-studio',
      image: '/seha-studio-v2.png',
      title: t('seha-studio.title'),
      dates: '2025 - Present',
      href: 'https://seha.studio/',
      description: t('seha-studio.description'),
      category: 'web',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      links: [
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/',
        },
      ],
    },
    {
      id: 'registry-doctor',
      image: '/registry-doctor.svg',
      title: t('registry-doctor.title'),
      dates: '2026 - Present',
      href: 'https://seha.studio/registrydoctor/',
      description: t('registry-doctor.description'),
      category: 'tools',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
      npmPackage: 'registry-doctor',
      links: [
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/registrydoctor/',
        },
        {
          icon: <Package className="size-3" />,
          type: 'NPM',
          href: 'https://www.npmjs.com/package/registry-doctor',
        },
      ],
    },
    {
      id: 'prompt-trace',
      image: '/prompt-trace-v2.png',
      title: t('prompt-trace.title'),
      dates: 'October 2025 - Present',
      href: 'https://seha.studio/promptrace/',
      description: t('prompt-trace.description'),
      category: 'tools',
      tags: ['TypeScript', 'Node.js', 'CLI', 'SQLite', 'Local-first', 'AI'],
      npmPackage: 'prompttrace',
      links: [
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/promptrace/',
        },
        {
          icon: <Github className="size-3" />,
          type: 'Source',
          href: 'https://github.com/ahmetseha/prompt-trace',
        },
        {
          icon: <Package className="size-3" />,
          type: 'NPM',
          href: 'https://www.npmjs.com/package/prompttrace',
        },
      ],
    },
    {
      id: 'git-score-lab',
      image: '/git-score-lab.png',
      title: t('git-score-lab.title'),
      dates: 'April 2023 - September 2023',
      href: 'https://seha.studio/gitscorelab/',
      description: t('git-score-lab.description'),
      category: 'web',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Supabase', 'Netlify'],
      githubRepo: 'ahmetseha/git-score-lab',
      links: [
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/gitscorelab/',
        },
        {
          icon: <Github className="size-3" />,
          type: 'Source',
          href: 'https://github.com/ahmetseha/git-score-lab',
        },
      ],
    },
    {
      id: 'ascii-reveal',
      image: '/ascii-reveal-demo.gif',
      title: t('ascii-reveal.title'),
      dates: '2026 - Present',
      href: 'https://github.com/ahmetseha/ascii-reveal',
      description: t('ascii-reveal.description'),
      category: 'npm',
      tags: ['TypeScript', 'npm', 'React', 'Vue', 'Accessible'],
      npmPackage: '@ascii-reveal/react',
      links: [
        {
          icon: <Package className="size-3" />,
          type: 'NPM',
          href: 'https://www.npmjs.com/package/@ascii-reveal/react',
        },
        {
          icon: <Github className="size-3" />,
          type: 'Source',
          href: 'https://github.com/ahmetseha/ascii-reveal',
        },
      ],
    },
    {
      id: 'tr-slugify',
      image: '/tr-slugify.png',
      title: t('tr-slugify.title'),
      dates: 'June 2023 - Present',
      href: 'https://seha.studio/trslugify/',
      description: t('tr-slugify.description'),
      category: 'npm',
      tags: ['TypeScript', 'npm'],
      npmPackage: 'tr-slugify',
      links: [
        {
          icon: <Package className="size-3" />,
          type: 'NPM',
          href: 'https://www.npmjs.com/package/tr-slugify',
        },
        {
          icon: <Globe className="size-3" />,
          type: 'Website',
          href: 'https://seha.studio/trslugify/',
        },
        {
          icon: <Github className="size-3" />,
          type: 'Source',
          href: 'https://github.com/ahmetseha/tr-slugify',
        },
      ],
    },
  ];

  return Promise.all(
    projects.map(async (project) => {
      const [githubStars, weeklyDownloads] = await Promise.all([
        project.githubRepo && !project.npmPackage
          ? getGithubStars(project.githubRepo)
          : Promise.resolve(undefined),
        project.npmPackage ? getWeeklyDownloads(project.npmPackage) : Promise.resolve(undefined),
      ]);

      if (githubStars === undefined && weeklyDownloads === undefined) return project;

      return {
        ...project,
        metrics: {
          githubStars,
          weeklyDownloads,
        },
      };
    })
  );
}
