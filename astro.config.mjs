import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions'; // ou '@astrojs/netlify/edge'

export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  adapter: netlify({
    // Aqui você pode configurar se quiser algo específico
  }),
});
