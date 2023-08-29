import fs from 'fs';
import * as dotenv from 'dotenv';
import { ISbResult, ISbStoryData, apiPlugin, storyblokInit } from '@storyblok/js';

dotenv.config();

const PUBLIC_STORYBLOK_TOKEN = process.env.PUBLIC_STORYBLOK_TOKEN;

if (!PUBLIC_STORYBLOK_TOKEN) {
  throw new Error('Missing required env var: PUBLIC_STORYBLOK_TOKEN');
}

const { storyblokApi } = storyblokInit({
  accessToken: PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    https: true
  }
});

const storyblok = storyblokApi as NonNullable<ReturnType<typeof storyblokInit>['storyblokApi']>;

type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

async function main() {
  const perPage = 100;
  const requests: Promise<ISbResult>[] = [];

  const initial = await storyblok.get('cdn/stories', {
    cv: Date.now(),
    excluding_fields: 'body,page',
    per_page: 1,
    page: 1
  });

  const totalPages = Math.ceil(initial.total / perPage);

  for (let i = 1; i <= totalPages; i++) {
    requests.push(
      storyblok.get('cdn/stories', {
        cv: Date.now(),
        excluding_fields: 'body,page',
        per_page: perPage,
        page: i
      })
    );
  }

  const responses = await Promise.all(requests);

  /**
   * create entries using:
   *   loc: `https://cometchat.com${story.full_slug}`
   *   lastmod: story.published_at
   *
   * and the following values:
   *
   * page
   *   changeFreq: story.content.change_frequency
   *   priority: story.content.priority
   */

  const entries: SitemapEntry[] = responses.reduce<SitemapEntry[]>((acc, response) => {
    return acc.concat(
      response.data.stories
        .filter((story: ISbStoryData) => {
          // filter entries that are not one of the types we want
          story.content.component === 'page';
        })
        .map((story: ISbStoryData) => {
          const entry: SitemapEntry = {
            loc:
              story.slug === 'home'
                ? 'https://cometchat.com'
                : `https://cometchat.com/${story.full_slug.replace(/\/$/, '')}`,
            lastmod: story.published_at || new Date().toISOString(),
            changefreq: 'monthly',
            priority: 0.7
          };

          if (story.content.component === 'page') {
            entry.changefreq = story.content.change_frequency;
            entry.priority = story.content.priority;
          }

          return entry;
        })
    );
  }, []);

  // build a ../static/sitemap.xml file
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${entries
      .map(
        (entry) => `
    <url>
      <loc>${entry.loc}</loc>
      <lastmod>${entry.lastmod}</lastmod>
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority}</priority>
    </url>
  `
      )
      .join('')}
  </urlset>`;
  fs.writeFileSync('static/sitemap.xml', xml);
}

main();
