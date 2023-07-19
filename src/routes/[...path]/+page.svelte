<script lang="ts">
  import { page } from '$app/stores';
  import DynamicPage from '$components/blocks/dynamic-page.svelte';
  import Pagination from '$components/pagination/pagination.svelte';
  import { getImageAttributes, startStoryblokBridge } from '$lib/storyblok.js';
  import { string } from '$lib/strings/index.js';
  import { current_component } from 'svelte/internal';

  export let data;

  startStoryblokBridge(data.page.id, (newStory) => {
    data.page = newStory;
  });

  let title = data.page?.content?.seo_title || string('default_seo_title');
  let description = data.page?.content?.seo_description || string('default_seo_description');

  $: dataObject = {
    page: data.page,
    industries: data.industries
  };

  $: currentPage = 1;
  function changePage(number: number) {
    currentPage = number;
  }
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
  <Pagination totalCountOfRegisters={100} onPageChange={changePage} {currentPage} />
  <!-- <DynamicPage page={dataObject} /> -->
{/key}
