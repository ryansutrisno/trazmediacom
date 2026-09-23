import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  site: process.env.PUBLIC_SITE_URL || 'https://trazmedia.com',
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: true,
      // Let src/pages/index.astro decide the locale via geo-IP/Accept-Language
      // instead of always 302-ing "/" to the default locale (/id/).
      redirectToDefaultLocale: false,
    },
  },
});
