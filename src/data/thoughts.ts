import { useTranslations } from 'next-intl';

export type ThoughtCategory = 'quote' | 'code' | 'idea' | 'note' | 'book';

export interface ThoughtEntry {
  id: string;
  category: ThoughtCategory;
  label: string;
  title: string;
  description?: string;
  code?: string;
  timestamp: string;
}

export function useThoughts() {
  const t = useTranslations('Thoughts');

  const THOUGHTS: ThoughtEntry[] = [
    {
      id: 'idea-playlists',
      category: 'idea',
      label: 'IDEA',
      title: t('idea-playlists.title'),
      description: t('idea-playlists.description'),
      timestamp: '2025-12-06T14:20:00+03:00',
    },
    {
      id: 'note-learning',
      category: 'note',
      label: 'NOTE',
      title: t('note-learning.title'),
      description: t('note-learning.description'),
      timestamp: '2025-12-02T08:45:00+03:00',
    },
    {
      id: 'book-shoe-dog',
      category: 'book',
      label: 'BOOK',
      title: t('book-shoe-dog.title'),
      description: t('book-shoe-dog.description'),
      timestamp: '2025-11-25T20:00:00+03:00',
    },
  ];

  return THOUGHTS;
}
