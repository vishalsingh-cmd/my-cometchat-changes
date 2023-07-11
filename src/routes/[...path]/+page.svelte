<script lang="ts">
  import { page } from '$app/stores';
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  import { getImageAttributes, startStoryblokBridge } from '$lib/storyblok.js';
  import { string } from '$lib/strings/index.js';

  export let data;

  startStoryblokBridge(data.page.id, (newStory) => {
    data.page = newStory;
  });

  let title = data.page?.content?.seo_title || string('default_seo_title');
  let description = data.page?.content?.seo_description || string('default_seo_description');
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
  {#if data.page?.content?.seo_og_image?.filename}
    {@const { src } = getImageAttributes(data.page.content.seo_og_image, {
      size: [1200, 630]
    })}
    <meta property="og:image" content={src} />
    <meta property="twitter:image" content={src} />
  {:else}
    <meta property="og:image" content="/default-og-image.png" />
    <meta property="twitter:image" content="/default-og-image.png" />
  {/if}
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:type" content="website" />
</svelte:head>

{#key data.page.id}
  <DynamicBlock block={data.page.content} />
{/key}
