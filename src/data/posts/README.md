# Blog Posts Folder

This folder contains blog content written in MDX. Each MDX file represents one blog post.

## File Structure

Each blog post should follow this structure:

```md
---
title: 'Post Title'
description: 'Short post description'
date: 'YYYY-MM-DD'
tags: ['tag1', 'tag2', 'tag3']
---

Post content goes here...
```

## Writing Guidelines

1. **Natural Voice**: Write with a clear, human tone. Avoid stiff or overly formal phrasing.

2. **Heading Hierarchy**: Use headings in a correct hierarchy (`h1 > h2 > h3...`).

3. **Code Examples**: Format code examples clearly:

```js
// JavaScript code
const hello = 'Hello world';
console.log(hello);
```

4. **Accessibility**: Add alt text for images and follow accessibility principles.

5. **Tags**: Add relevant tags so posts can be categorized.

## MDX Features

MDX lets you add JSX to Markdown, so posts can use React components:

```jsx
import { Button } from 'components/ui/button';

# Interactive Content

<Button>Click me</Button>
```

## Adding a Post

1. Add a new `.mdx` file to this folder.
2. Create the content using the structure above.
3. Test the post and make any needed fixes.
4. Commit the changes.

## Existing Posts

- `my-portfolio-project.mdx`: Notes about the portfolio project
- `web-accessibility-guide.mdx`: Web accessibility guide
- `advanced-web-accessibility.mdx`: Advanced web accessibility techniques

---

This README is a guide for creating and maintaining blog posts consistently.
