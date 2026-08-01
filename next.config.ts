import type { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/tr', destination: '/', permanent: true },
      { source: '/tr/:path*', destination: '/:path*', permanent: true },
    ];
  },
  async rewrites() {
    const pages = ['about', 'blog', 'bookmarks', 'hobbies', 'projects', 'thoughts', 'work'];

    return [
      { source: '/', destination: '/en' },
      ...pages.map((page) => ({ source: `/${page}`, destination: `/en/${page}` })),
      { source: '/blog/:slug', destination: '/en/blog/:slug' },
    ];
  },
};

export default withNextIntl(nextConfig);
