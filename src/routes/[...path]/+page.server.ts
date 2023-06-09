import { PREVIEW_COOKIE_KEY } from '$lib/constants.js';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies, fetch, params }) => {
  const version: 'draft' | 'published' = cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';
  const storyblok = getStoryblok({ fetch });

  try {
    const page = await storyblok.get(`cdn/stories/pages/${params.path}`, {
      version
    });

    return { page: page.data.story };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');
  }
};
