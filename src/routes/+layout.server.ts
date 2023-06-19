import { env } from '$env/dynamic/private';
import { PREVIEW_COOKIE_KEY } from '$lib/constants.js';
import { getFooter } from '$lib/data/footer.js';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';
import type { BlogPostStoryblok, CustomerStoryblok, TopNavigationStoryblok } from '$types/bloks.js';
import type { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies, fetch }) => {
  const version: 'draft' | 'published' = cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';
  const storyblok = getStoryblok({ fetch });

  try {
    const blogPostsConfig = {
      version,
      content_type: 'blog-post',
      page: 1,
      per_page: 2,
      excluding_fields: 'body'
    } as const;

    const [topnav, blogPosts, customerStories, footer] = await Promise.all([
      storyblok.get('cdn/stories/configuration/top-navigation', {
        version,
        resolve_relations: [
          'topnav-technologies-panel.technologies_links',
          'topnav-solutions-panel.industries'
        ]
      }),
      storyblok.get('cdn/stories', {
        ...blogPostsConfig,
        filter_query: {
          customer: {
            is: 'empty'
          }
        }
      }),
      storyblok.get('cdn/stories', {
        ...blogPostsConfig,
        resolve_relations: ['blog-post.customer'],
        filter_query: {
          customer: {
            is: 'not_empty'
          }
        }
      }),
      getFooter(storyblok, { version })
    ]);

    return {
      topnav: topnav.data.story as ISbStoryData<TopNavigationStoryblok>,
      blogPosts: blogPosts.data.stories as ISbStoryData<BlogPostStoryblok>[],
      customerStories: customerStories.data.stories as ISbStoryData<
        BlogPostStoryblok & {
          customer: ISbStoryData<CustomerStoryblok>;
        }
      >[],
      footer
    };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');

    throw new Error('Failed to load layout data', { cause: err });
  }
};

export const prerender = env.PRERENDER === 'true';
