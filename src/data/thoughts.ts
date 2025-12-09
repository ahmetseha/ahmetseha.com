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

export const THOUGHT_CATEGORIES: { value: 'all' | ThoughtCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'code', label: 'Code' },
  { value: 'idea', label: 'Idea' },
  { value: 'quote', label: 'Quote' },
  { value: 'note', label: 'Note' },
  { value: 'book', label: 'Book' },
];

export const THOUGHTS: ThoughtEntry[] = [
  {
    id: 'idea-playlists',
    category: 'idea',
    label: 'IDEA',
    title: 'CSS deneme playgroundu',
    description:
      'Tailwind + motion tabanlı küçük deneylerimi tek sayfada toplayabileceğim mikro bir playground planlıyorum.',
    timestamp: '2025-12-06T14:20:00+03:00',
  },
  {
    id: 'note-learning',
    category: 'note',
    label: 'NOTE',
    title: 'Yazarken öğren',
    description:
      'Kısa notlar ve kod parçaları yayınlamak, öğrendiklerimi kalıcı hale getiriyor. Thoughts sayfası bunu hızlandırmak için burada.',
    timestamp: '2025-12-02T08:45:00+03:00',
  },
  {
    id: 'book-shoe-dog',
    category: 'book',
    label: 'BOOK',
    title: 'Shoe Dog – Phil Knight',
    description:
      'Nike’ın hikâyesi, ürün takıntısını kullanıcı deneyimiyle nasıl bağlayabileceğimi yeniden düşünmemi sağladı.',
    timestamp: '2025-11-25T20:00:00+03:00',
  },
];
