import { loadEnv } from 'vite';
import crypto from 'node:crypto';

if (!crypto.hash) {
  Object.defineProperty(crypto, 'hash', {
    configurable: true,
    writable: true,
    value: (algorithm: string, data: string | Buffer, outputEncoding?: 'hex' | 'base64') => {
      const hash = crypto.createHash(algorithm);
      hash.update(data);
      if (outputEncoding) {
        return hash.digest(outputEncoding);
      }
      return hash.digest();
    }
  });
}

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
