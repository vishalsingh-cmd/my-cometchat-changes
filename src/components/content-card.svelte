<script lang="ts">
  import { sanitizeSlug } from '$lib/storyblok';
  import { string } from '$lib/strings';

  import type { AssetStoryblok, CustomerStoryblok } from '$types/bloks';

  import Badge from './badge.svelte';
  import Media from './media.svelte';

  export let image: AssetStoryblok | undefined = undefined;
  export let title: string | undefined = undefined;
  export let tags: string[] | undefined = undefined;
  export let link: string | undefined = undefined;
  export let customer: CustomerStoryblok | undefined = undefined;
  export let author: string | undefined = undefined;
  export let date: string | undefined = undefined;
  export let isLoading = false;
  export let badgeSize: 'small' | 'medium' = 'medium';
</script>

{#if link}
  <a
    href={sanitizeSlug(link)}
    class="group relative flex flex-col font-semibold text-gray-12 outline-none focus-visible:after:absolute focus-visible:after:-left-2 focus-visible:after:-top-2 focus-visible:after:h-[calc(100%+16px)] focus-visible:after:w-[calc(100%+16px)] focus-visible:after:rounded-[18px] focus-visible:after:border focus-visible:after:border-brand-7"
  >
    {#if customer}
      <div class="absolute left-3 top-4 rounded-xl bg-gray-12/20 p-2 backdrop-blur-[50px]">
        <Media
          imageTransformOptions={{ size: [0, 200] }}
          media={customer.logo}
          class="h-3.5 w-full"
        />
      </div>
    {/if}
    {#if image && image.filename}
      <Media
        imageTransformOptions={{ size: [0, 800] }}
        media={image}
        class="mb-4 h-[202px] w-full rounded-2xl object-cover md:mb-5 md:h-[240px]"
      />
    {:else}
      <img
        alt=""
        src="./_static/assets/placeholder-image.jpg"
        class="mb-4 h-[202px] w-full rounded-2xl object-cover md:mb-5 md:h-[240px]"
      />
    {/if}
    {#if title}
      <h3
        class="smooth mb-2.5 text-xl leading-tighter opacity-[0.84] transition-all group-hover:opacity-100 md:mb-3"
      >
        {title}
      </h3>
    {/if}
    {#if author && date}
      <div
        class="flex flex-wrap items-center gap-2.5 text-lg font-semibold leading-tight text-gray-12 opacity-54 group-hover:opacity-64"
      >
        <span aria-label={string('a11y.author')}>{author}</span>
        <span class="h-1 w-1 rounded-full bg-gray-12" />
        <span aria-label={string('a11y.published')}>{date}</span>
      </div>
    {/if}
    {#if tags}
      <div class="mt-4 flex flex-row flex-wrap gap-2">
        {#each tags as tag}
          <Badge label={tag} size={badgeSize} />
        {/each}
      </div>
    {/if}
  </a>
{/if}

{#if isLoading}
  <div class="relative">
    <div class="absolute left-3 top-4 h-[30px] w-[92px] rounded-xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div
      class="mb-4 aspect-video h-[202px] w-full rounded-2xl border border-[hsl(246,21%,9%)]/[0.04] bg-[hsl(246,21%,9%)]/[0.03] object-cover md:mb-5 md:h-[238px]"
    />
    <div class="mb-1.5 h-[18px] w-[190px] rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div class="mb-3 h-[18px] w-full rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div class="mb-3 h-3 w-[100px] rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div class="h-[30px] w-[51px] rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
  </div>
{/if}
