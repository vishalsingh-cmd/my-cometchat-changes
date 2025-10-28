<script lang="ts">
  import { sanitizeSlug } from '$lib/storyblok';
  import Icon from './icon/icon.svelte';

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
    class="hover:border-white/4 group relative flex max-h-[416px] max-w-[409px] flex-col overflow-hidden rounded-3xl border border-white/10 p-4 font-semibold text-gray-12 outline-none hover:bg-[#D9D9D9]/10 focus-visible:after:absolute focus-visible:after:-left-2 focus-visible:after:-top-2 focus-visible:after:h-[calc(100%+16px)] focus-visible:after:w-[calc(100%+16px)] focus-visible:after:rounded-[18px] focus-visible:after:border focus-visible:after:border-brand-7"
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
    <div class=" flex h-full flex-col items-start justify-between self-stretch">
      <div class=" flex flex-col">
        {#if title}
          <h3
            class="smooth md:mb-3l mb-2.5 line-clamp-2 text-xl leading-tighter text-[#BEBEC2] transition-all group-hover:text-brand-9 group-hover:opacity-100"
          >
            {title}
          </h3>
        {/if}
        <!-- {#if author && date}
          <div
            class="flex flex-wrap items-center gap-2.5 text-lg font-semibold leading-tight text-[#BEBEC2]"
          >
            <span aria-label={string('a11y.author')}>{author}</span>
            <span class="h-1 w-1 rounded-full bg-[#BEBEC2]" />
            <span aria-label={string('a11y.published')}>{date}</span>
          </div>
        {/if} -->
      </div>
      {#if tags}
        <div class="mt-4 flex flex-row flex-wrap gap-2">
          {#each tags as tag}
            <Badge label={tag} size={badgeSize} />
          {/each}
        </div>
      {/if}
    </div>

    <!-- Arrow -->
    <div
      class="absolute -right-12 -top-12 z-[0] flex flex-shrink-0 items-center gap-[10px] rounded-xl border border-white/10 bg-[#0A0914] p-[10px] backdrop-blur-md transition-all duration-300 group-hover:right-6 group-hover:top-6 group-hover:bg-white/10"
    >
      <Icon icon="arrow-up-right" size="lg" class=" text-brand-9" />
    </div>
  </a>
{/if}

{#if isLoading}
  <div class="relative">
    {#if customer}
      <div class="absolute left-3 top-4 h-[30px] w-[92px] rounded-xl bg-[hsl(246,21%,9%)]/[0.04]" />
    {/if}

    <div
      class="mb-4 aspect-video h-[202px] w-full rounded-2xl border border-[hsl(246,21%,9%)]/[0.04] bg-[hsl(246,21%,9%)]/[0.03] object-cover md:mb-5 md:h-[238px]"
    />
    <div class="mb-1.5 h-[18px] w-[190px] rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div class="mb-3 h-[18px] w-full rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div class="mb-3 h-3 w-[100px] rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
    <div class="h-[30px] w-[51px] rounded-2xl bg-[hsl(246,21%,9%)]/[0.04]" />
  </div>
{/if}
