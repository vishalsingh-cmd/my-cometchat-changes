import type { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';

import { PREVIEW_COOKIE_KEY } from '$lib/constants.js';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';

import type {
  CustomerStoryStoryblok,
  IndustryStoryblok,
  PageStoryblok,
  TechnologyStoryblok
} from '$types/bloks.js';

export const load = async ({ cookies, fetch, params }) => {
  const version: 'draft' | 'published' = cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';
  const storyblok = getStoryblok({ fetch });

  const relations = [
    'blog-post.author',
    'tutorial.author',
    'customer-story.customer',
    'customer-story.related_items',
    'customer-story.author',
    'customer-stories-section.testimonials',
    'featured-story-section.featured_story',
    'social-proofs.customers',
    'solutions-section.industries',
    'synced-block.synced_block',
    'technologies-section.technologies'
  ];

  try {
    const [page, industries] = await Promise.all([
      storyblok.get(`cdn/stories/pages/${params.path}`, {
        version,
        resolve_relations: relations
      }),

      storyblok.get('cdn/stories', {
        content_type: 'industry',
        version
      })
    ]);

    return {
      page: page.data.story as ISbStoryData<
        PageStoryblok | CustomerStoryStoryblok | TechnologyStoryblok
      >,
      industries: industries.data.stories as ISbStoryData<IndustryStoryblok>[]
    };
  } catch (err) {
    console.error(err);
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');
    throw err;
  }
};
