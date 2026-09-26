import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('Trazmedia'),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  keywords: z.array(z.string()).default([]),
  cover: z.string().optional(),
  readingTime: z.number().default(5),
  draft: z.boolean().default(false),
});

export const collections = {
  blogId: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog/id' }), schema: blogSchema }),
  blogEn: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog/en' }), schema: blogSchema }),
};
