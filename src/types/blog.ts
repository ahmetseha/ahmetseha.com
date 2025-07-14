import { JSXElementConstructor, ReactElement } from 'react';

export interface MDXContent {
  title?: string;
  date?: string;
  description?: string;
  [key: string]: any;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: ReactElement<unknown, string | JSXElementConstructor<any>>;
  readingTime: string;
  author: string;
  image?: string | null;
}
