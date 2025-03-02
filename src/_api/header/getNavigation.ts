import type { TopNavigationStoryblok } from '$types/bloks.js';
import { getFooter } from '$lib/data/footer';
import { isStatusError } from '$lib/error';
import { Storyblok } from '$lib/storyblok';
import { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';

interface Props {
  storyblok: Storyblok;
  version: 'draft' | 'published';
}
export const getNavigation = async (props: Props) => {
  const { storyblok, version } = props;
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
          'blog-post.customer',
          'customer-story.customer',
          'guide.customer'
        ]
      }),
      getFooter(storyblok, { version })
    ]);

    return {
      version,
      topnav: topnav.data.story as ISbStoryData<TopNavigationStoryblok>,
      footer
    };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');
    throw new Error('Failed to load layout data', { cause: err });
  }
};
