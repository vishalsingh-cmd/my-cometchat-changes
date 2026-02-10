import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { getStoryblok } from '$lib/storyblok.js';
import { getStoryVersion } from '$lib/utils';
import { getTemplatesFooter } from '$src/_api/header/getTemplatesFooter';
import { isTemplatesPage } from '$src/_helpers/withSlugs';
import { getNewHeaderV3 } from '$src/_api/header/getNewHeaderV3';
import { getFooter } from '$src/lib/data/footer';
import { getGlobalLogos } from '$src/_api/shared/getGlobalLogos';

export const load: LayoutServerLoad = async ({ params, cookies, fetch }) => {
  const version = getStoryVersion(cookies);
  const storyblok = getStoryblok({ fetch });
  const { path } = params;

  if (isTemplatesPage(path || '')) {
    const templatesFooter = await getTemplatesFooter(storyblok, { version });

    return {
      templatesHeaderData: [{}],
      templatesFooterData: templatesFooter
    };
  } else {
    const [newHeader, footer, globalLogos] = await Promise.all([
      getNewHeaderV3({ storyblok, version }),
      getFooter(storyblok, { version }),
      getGlobalLogos(storyblok, { version })
    ]);

    return {
      version,
      newHeader,
      footer,
      globalLogos
    };
  }
};

export const prerender = env.PRERENDER === 'true';
