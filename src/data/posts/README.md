# Blog Posts Directory

This directory contains all the blog posts for the website in MDX format.

## How to Create a New Blog Post

1. Create a new `.mdx` file in this directory with a descriptive name that will be used as the slug (e.g., `my-new-blog-post.mdx`).

2. Add the frontmatter at the top of the file with the following structure:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description of your blog post"
date: "YYYY-MM-DD"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
readingTime: "X dk"
author:
  name: "Your Name"
  avatar: "/path/to/avatar.jpg"
---

# Your Blog Post Title

Your blog post content goes here...
```

3. Write your blog post content using Markdown syntax.

## MDX Features

You can use both Markdown and JSX in your blog posts:

- **Markdown**: All standard Markdown syntax is supported.
- **JSX**: You can import and use React components in your blog posts.

## Example

````mdx
---
title: "Using React Components in MDX"
description: "Learn how to use React components in your MDX blog posts"
date: "2024-04-15"
category: "Tutorial"
tags: ["mdx", "react", "tutorial"]
readingTime: "5 dk"
author:
  name: "Your Name"
  avatar: "/avatar.jpg"
---

# Using React Components in MDX

You can use React components in your MDX blog posts:

import { Button } from "@/components/ui/button"

<Button>Click me!</Button>

## Markdown Still Works

You can still use all Markdown features:

- Lists
- **Bold text**
- _Italic text_
- [Links](https://example.com)

## Code Blocks

```jsx
function HelloWorld() {
  return <h1>Hello, World!</h1>
}
```
````
