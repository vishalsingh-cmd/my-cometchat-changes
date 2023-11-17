import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { isStatusError } from '$lib/error.js';
import { error } from '@sveltejs/kit';
import { getStoryVersion } from '$lib/utils';

export const load: LayoutServerLoad = async ({ cookies }) => {
  const version = getStoryVersion(cookies);

  try {
    return {
      version
    };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');

    throw new Error('Failed to load layout data', { cause: err });
  }
};

export const prerender = env.PRERENDER === 'true';
