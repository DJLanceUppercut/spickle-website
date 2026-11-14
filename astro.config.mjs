import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.spickle.com.au',
  trailingSlash: 'never',
  build: { format: 'file' },
});
