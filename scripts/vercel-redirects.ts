import fs from 'fs';

import * as dotenv from 'dotenv';
import { apiPlugin, storyblokInit } from '@storyblok/js';

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

export const storyblok = storyblokApi as NonNullable<
  ReturnType<typeof storyblokInit>['storyblokApi']
>;

// get redirects from storyblok for datasource 'temporary-redirects' and create a vercel.json file
const fetchRedirects = async (datasource) => {
  const translationsRes = await storyblok.get('cdn/datasource_entries', {
    datasource: datasource,
    per_page: 1000,
    cv: Date.now()
  });
  const entries = translationsRes.data.datasource_entries.map((entry) => ({
    source: entry.name,
    destination: entry.value
  }));
  return entries;
};
const redirects = await fetchRedirects('temporary-redirects');

const vercelRedirects = redirects.map((redirect) => {
  return {
    source: redirect.source,
    destination: redirect.destination,
    permanent: false
  };
});

async function main() {
  // get current vercel.json and its data and append the redirects
  const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  vercelJson.redirects = vercelRedirects;
  fs.writeFileSync('vercel.json', JSON.stringify(vercelJson, null, 2));
}

main();
