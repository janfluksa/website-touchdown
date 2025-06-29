// @ts-ignore
import { defineCollection, z } from 'astro:content';

const media = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.date(),
    logo: z.string().optional(),
    papers: z.string().optional(),
  }), 
});

const services = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    order: z.number(),
    side: z.string(),
    image: z.optional(z.string()),
    excerpt: z.string(),
    link: z.string(),
    linkLabel: z.optional(z.string()),
  }),
});

const team = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    order: z.number(),
    role: z.string(),
    image: z.optional(z.string()),
  }),
});

export const collections = { media, services, team };
