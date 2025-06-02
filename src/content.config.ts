import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';


const services = defineCollection({
loader: glob({ base: './src/collections/services', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    link: z.string().url(),
    linkLabel: z.string(),
    image: z.string(),
	excerpt: z.string(),
	side: z.string(),
  }),
});

export const collections = { services };
