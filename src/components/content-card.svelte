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
  <a
    href={sanitizeSlug(link)}
    class="group relative flex flex-col font-semibold text-gray-12 outline-none focus-within:after:absolute focus-within:after:-left-2 focus-within:after:-top-2 focus-within:after:h-[calc(100%+16px)] focus-within:after:w-[calc(100%+16px)] focus-within:after:rounded-[18px] focus-within:after:border focus-within:after:border-brand-7"
  >
    {#if image}
      {#if customer}
        {@const { src, alt } = getImageAttributes(customer.logo)}
        <div class="absolute left-3 top-4 rounded-xl bg-gray-12/20 p-2 backdrop-blur-[50px]">
          <img {src} {alt} class="h-3.5 w-full" />
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
