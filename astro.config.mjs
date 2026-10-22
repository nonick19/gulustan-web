import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build
export default defineConfig({
  site: 'https://gulustan.net',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})