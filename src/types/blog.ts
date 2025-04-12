export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  content: string
  readingTime: string
  author: {
    name: string
    avatar: string
  }
}
