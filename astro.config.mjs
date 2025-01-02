import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Gera site estático (páginas em HTML sem SSR)
  output: 'static',
  integrations: [tailwind()],
  // Remova o adapter completamente
});
