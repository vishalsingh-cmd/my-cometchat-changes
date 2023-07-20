import { storyblok } from '../scripts/datasources';

import type { Handle } from '@sveltejs/kit';

type Redirect = {
  old: string;
  new: string;
};

function redirect(location: string, body?: string) {
  return new Response(body, {
    status: 303,
    headers: { location }
  });
}

const fetchRedirects = async (datasource: string) => {
  const translationsRes = await storyblok.get('cdn/datasource_entries', {
    datasource: datasource,
    per_page: 1000,
    cv: Date.now()
  });

  const entries = translationsRes.data.datasource_entries.map(
    (entry: { name: string; value: string }) => ({
      old: entry.name,
      new: entry.value
    })
  );

  return entries;
};

export const handle: Handle = async ({ event, resolve }) => {
  const temporaryRedirects = await fetchRedirects('temporary-redirects');

  const redirectedPath = temporaryRedirects.find((redirect: Redirect) => {
    return redirect.old === '/' + event.params.path;
  });

  if (redirectedPath) {
    return redirect(redirectedPath.new);
  }

  return resolve(event);
};
