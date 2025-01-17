import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { getStoryblok } from '$lib/storyblok.js';
import { getStoryVersion } from '$lib/utils';
import { getNavigation } from '$api/header/getNavigation';

const isMarketplace = (path: string) => {
  const isMarketplace = path.split('/').find((slug) => slug === 'marketplace');
  return isMarketplace;
};

export const load: LayoutServerLoad = async ({ params, cookies, fetch }) => {
  const version = getStoryVersion(cookies);
  const storyblok = getStoryblok({ fetch });
  const { path } = params;

  if (isMarketplace(path || '')) {
    return {
      templatesHeaderData: [{}]
    };
  } else {
    const navigation = await getNavigation({ storyblok, version });
    return navigation;
  }
};

export const prerender = env.PRERENDER === 'true';
