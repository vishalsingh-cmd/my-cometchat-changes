import { env } from '$env/dynamic/private';
import { PREVIEW_COOKIE_KEY } from '$lib/constants.js';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';
import type { TopNavigationStoryblok } from '$types/bloks.js';
import type { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies, fetch }) => {
  const version: 'draft' | 'published' = cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';
  const storyblok = getStoryblok({ fetch });

  try {
    const res = await storyblok.get('cdn/stories/configuration/top-navigation', { version });

    return {
      topnav: res.data.story as ISbStoryData<TopNavigationStoryblok>
    };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');

    throw new Error('Failed to load layout data', { cause: err });
  }
};

export const prerender = env.PRERENDER === 'true';
