import { storyblok } from '$lib/storyblok';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  try {
    const stories = await storyblok.getAll('cdn/stories', {
      version: 'published'
    });

    const prefixUrl = 'https://www.cometchat.com';

    // ✅ Include only published pages under "pages/" and exclude folders
    const pageStories = stories.filter(
      (story) => !story.is_folder && story.full_slug.startsWith('pages/')
    );

    const sitemap_entries = pageStories
      .map((story) => {
        const cleanPath = story.full_slug.replace(/^pages\//, '');
        const loc = `${prefixUrl}/${cleanPath}`;
        const lastmod = story.published_at || new Date().toISOString();
        return `
<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
</url>`;
      })
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap_entries}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  } catch (err) {
    console.error('Error generating sitemap:', err);
    throw error(500, 'Failed to generate sitemap');
  }
};
