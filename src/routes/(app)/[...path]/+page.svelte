<script lang="ts">
  import { industries } from '$lib/stores/industries';

  import { page } from '$app/stores';

  import { string } from '$lib/strings/index.js';

  import { getImageAttributes, startStoryblokBridge } from '$lib/storyblok.js';

  import DynamicPage from '$components/blocks/dynamic-page.svelte';

  export let data;

  startStoryblokBridge(data.page.id, (newStory) => {
    data.page = newStory;
  });

  let title =
    data.page?.content?.seo && data.page?.content?.seo[0] && data.page?.content?.seo?.[0].title
      ? data.page?.content?.seo?.[0].title
      : string('default_seo_title');
  let description =
    data.page?.content?.seo &&
    data.page?.content?.seo[0] &&
    data.page?.content?.seo?.[0].description
      ? data.page?.content?.seo?.[0].description
      : string('default_seo_description');

  $industries = data.industries;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <!-- OG Image -->
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  {#if data.page?.content?.seo?.[0] && data.page?.content?.seo?.[0].og_image?.filename}
    {@const { src } = getImageAttributes(data.page?.content?.seo?.[0].og_image, {
      size: [1200, 630]
    })}
    <meta property="og:image" content={src} />
    <meta property="twitter:image" content={src} />
  {:else}
    <meta property="og:image" content="/_static/default-og-image.png" />
    <meta property="twitter:image" content="/_static/default-og-image.png" />
  {/if}
  <meta property="og:url" content={`https://www.cometchat.com` + $page.url.pathname} />
  <meta property="og:type" content="website" />

  <!-- SEO options -->
  {#if data.page?.content?.seo?.[0] && data.page?.content.seo?.[0].canonical_url}
    <link rel="canonical" href={data.page.content.seo[0].canonical_url} />
  {/if}

  {#if data.page?.content?.seo?.[0] && data.page?.content.seo?.[0].structured_data_markup}
    {@html `
    <script type="application/ld+json">
    ${data.page?.content.seo?.[0].structured_data_markup}
    </script>`}
  {/if}

  {#if data.page?.content?.seo?.[0] && data.page?.content.seo?.[0].robots && data.page?.content.seo?.[0].robots.length > 0}
    {#each data.page.content.seo[0].robots as robot}
      <meta name={robot.name} content={robot.content} />
    {/each}
  {/if}

  {#if data.page?.content?.seo?.[0] && data.page?.content.seo?.[0].href_lang && data.page?.content.seo?.[0].href_lang.length > 0}
    {#each data.page.content.seo[0].href_lang as hrefLang}
      {@const { rel, href, hreflang } = hrefLang}
      <link {rel} {href} {hreflang} />
    {/each}
  {/if}
</svelte:head>

{#key data.page.id}
  <DynamicPage page={data.page} />
{/key}
