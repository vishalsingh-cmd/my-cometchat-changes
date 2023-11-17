import type { ISbStoryData, SbBlokData } from '@storyblok/js';
import { error } from '@sveltejs/kit';
import { isStatusError } from '$lib/error.js';
import { getStoryblok } from '$lib/storyblok.js';
import { getStoryVersion } from '$lib/utils';
import type {
  CustomerStoryStoryblok,
  IndustryStoryblok,
  PageStoryblok,
  TechnologyStoryblok
} from '$types/bloks.js';

export const load = async ({ cookies, fetch, params }) => {
  const version = getStoryVersion(cookies);
  const storyblok = getStoryblok({ fetch });

  const relations = [
    'blog-post.author',
    'tutorial.author',
    'customer-story.customer',
    'customer-story.author',
    'customer-story.related_items',
    'customer-stories-section.testimonials',
    'featured-story-section.featured_story',
    'social-proofs.customers',
    'solutions-section.industries',
    'synced-block.synced_block',
    'technologies-section.technologies',
    'related-stories-section.items',
    'customer-story.author',
    'solutions-hero.solution_type',
    'media-tabs-section.highlighted_story',
    'media-tab.customer',
    'pricing-hero.pricing_plans',
    'pricing-beta-hero-plans.plans'
  ];

  const getEntriesBasedOnDatasource = async (datasource: string) => {
    const entriesResponse = await storyblok.get('cdn/datasource_entries', {
      cv: Date.now(),
      datasource
    });

    return entriesResponse.data.datasource_entries.map(
      (entry: { name: string; value: string }) => ({
        name: entry.name,
        value: entry.value
      })
    );
  };

  try {
    const [page, industries] = await Promise.all([
      storyblok.get(`cdn/stories/pages/lp/${params.path}`, {
        version,
        resolve_relations: relations
      }),

      storyblok.get('cdn/stories', {
        content_type: 'industry',
        version
      })
    ]);

    let datasourceCategories = [];
    let datasourceIndustries = [];
    let datasourceTutorialTypes = [];
    let datasourceIntegrationTools = [];
    let datasourceProducts = [];
    let datasourcePlatforms = [];
    let datasourceFeatures = [];
    let datasourceLanguages = [];
    let datasourceFrameworks = [];

    const directorySection =
      page.data?.story?.content?.component === 'page' &&
      page.data?.story?.content.body &&
      page.data?.story?.content.body.find(
        (blok: SbBlokData) => blok?.component === 'directory-section'
      );

    if (
      directorySection &&
      ['blog-post', 'customer-story', 'tutorial'].includes(directorySection.content_type)
    ) {
      if (directorySection.content_type === 'blog-post') {
        datasourceCategories = await getEntriesBasedOnDatasource('categories');
      } else if (directorySection.content_type === 'customer-story') {
        datasourceIndustries = await getEntriesBasedOnDatasource('industries');
      } else if (directorySection.content_type === 'tutorial') {
        datasourceTutorialTypes = await getEntriesBasedOnDatasource('tutorial-types');
        datasourceIndustries = await getEntriesBasedOnDatasource('industries');
        datasourceIntegrationTools = await getEntriesBasedOnDatasource('integration-tools');
        datasourceProducts = await getEntriesBasedOnDatasource('product');
        datasourcePlatforms = await getEntriesBasedOnDatasource('platforms');
        datasourceFeatures = await getEntriesBasedOnDatasource('features');
        datasourceLanguages = await getEntriesBasedOnDatasource('languages');
        datasourceFrameworks = await getEntriesBasedOnDatasource('frameworks');
      }
    }

    return {
      page: page.data.story as ISbStoryData<
        PageStoryblok | CustomerStoryStoryblok | TechnologyStoryblok
      >,
      industries: industries.data.stories as ISbStoryData<IndustryStoryblok>[],
      datasourceCategories,
      datasourceIndustries,
      datasourceTutorialTypes,
      datasourceIntegrationTools,
      datasourceProducts,
      datasourcePlatforms,
      datasourceFeatures,
      datasourceLanguages,
      datasourceFrameworks
    };
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');
    console.error('Unhandled error in page.server:', err);
    throw err;
  }
};
