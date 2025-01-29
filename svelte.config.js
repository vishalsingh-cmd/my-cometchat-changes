import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    paths: {
      relative: false
    },
    prerender: {
      entries: ['/'],
      handleHttpError: 'warn' //TODO: Put this as 'error' as soon as the website is published
    },
    alias: {
      $src: './src',
      $components: './src/components',
      $lib: './src/lib',
      $types: './src/types',
      $api: './src/api',
      $bricks: './src/bricks'
    }
  }
};

export default config;
