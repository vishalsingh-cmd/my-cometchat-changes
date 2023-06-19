import { env } from '$env/dynamic/private';
import { PREVIEW_COOKIE_KEY } from '$lib/constants.js';
import { getFooter } from '$lib/data/footer.js';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';
import type { TopNavigationStoryblok } from '$types/bloks.js';
import type { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies, fetch }) => {
  const version: 'draft' | 'published' = cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';
  const storyblok = getStoryblok({ fetch });

  try {
    const [topnav, footer] = await Promise.all([
      storyblok.get('cdn/stories/configuration/top-navigation', {
        version,
        excluding_fields: 'body',
        resolve_relations: [
          'topnav-technologies-panel.technologies_links',
          'topnav-solutions-panel.industries',
          'topnav-resources-panel.customer_stories',
          'topnav-resources-panel.blog_posts',
          'blog-post.customer'
        ]
      }),
      getFooter(storyblok, { version })
    ]);

    return {
      topnav: topnav.data.story as ISbStoryData<TopNavigationStoryblok>,
      footer
    };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');

    throw new Error('Failed to load layout data', { cause: err });
  }
};

export const prerender = env.PRERENDER === 'true';
