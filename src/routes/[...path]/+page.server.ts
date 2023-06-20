import { PREVIEW_COOKIE_KEY } from '$lib/constants.js';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';
import type { BlogPostStoryblok, PageStoryblok, TechnologyStoryblok } from '$types/bloks.js';
import type { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies, fetch, params }) => {
  const version: 'draft' | 'published' = cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';
  const storyblok = getStoryblok({ fetch });

  const relations = [
    'technologies-section.technologies',
    'customer-stories-section.testimonials',
    'synced-block.synced_block'
  ];

  try {
    const page = await storyblok.get(`cdn/stories/pages/${params.path}`, {
      version,
      resolve_relations: relations
    });

    return {
      page: page.data.story as ISbStoryData<PageStoryblok | BlogPostStoryblok | TechnologyStoryblok>
    };
  } catch (err) {
    console.error(err);
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');
    throw err;
  }
};
