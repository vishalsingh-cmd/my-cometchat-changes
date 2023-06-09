import { loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import mkcert from 'vite-plugin-mkcert';

const env = loadEnv('development', process.cwd());
const HTTPS_ENABLED = env.VITE_HTTPS_ENABLED === 'true';
const extraPlugins = HTTPS_ENABLED ? [mkcert()] : [];

export default defineConfig({
  plugins: [sveltekit(), ...extraPlugins],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
