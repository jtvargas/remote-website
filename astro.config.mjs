import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jtvargas.github.io',
  base: '/remote-website',
  output: 'static',
  trailingSlash: 'always',
});
