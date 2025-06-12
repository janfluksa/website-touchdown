import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  // integrations: [react(), markdoc(), keystatic()],
  integrations: [react(), markdoc(), isDev && keystatic() ].filter(Boolean),
});