<script lang="ts">
  import { getImageAttributes, sanitizeSlug } from '$lib/storyblok';

  import type { AssetStoryblok, CustomerStoryblok } from '$types/bloks';

  import Badge from './badge.svelte';

  export let image: AssetStoryblok | undefined = undefined;
  export let title: string | undefined = undefined;
  export let tags: string[] | undefined = undefined;
  export let link: string | undefined = undefined;
  export let customer: CustomerStoryblok | undefined = undefined;
  export let author: string | undefined = undefined;
  export let date: string | undefined = undefined;
</script>

{#if link}
  <a href={sanitizeSlug(link)} class="group relative flex flex-col font-semibold text-gray-12">
    {#if image}
      {#if customer}
        {@const { src, alt } = getImageAttributes(customer.logo)}
        <div class="absolute left-3 top-4 rounded-xl bg-gray-5 p-2">
          <img {src} {alt} class="h-4 w-full" />
        </div>
      {/if}
      {@const { src, alt, width, height } = getImageAttributes(image)}
      <img
        class="mb-4 aspect-video max-h-[202px] rounded-2xl object-cover md:mb-5 md:max-h-[280px]"
        {src}
        {alt}
        {width}
        {height}
      />
    {/if}
    {#if title}
      <h3
        class="smooth mb-[10px] text-xl leading-tighter transition-all group-hover:text-brand-9 md:mb-3"
      >
        {title}
      </h3>
    {/if}
    {#if author && date}
      <div
        class="flex items-center gap-[10px] text-lg font-semibold leading-tight text-gray-12 opacity-54"
      >
        <span>{author}</span>
        <span class="h-1 w-1 rounded-full bg-gray-12" />
        <span>{date}</span>
      </div>
    {/if}
    {#if tags}
      <div class="mt-4 flex flex-row flex-wrap gap-2">
        {#each tags as tag}
          <Badge label={tag} size="small" />
        {/each}
      </div>
    {/if}
  </a>
{/if}
