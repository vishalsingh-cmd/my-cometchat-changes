<script lang="ts">
  import type { ISbStoryData } from '@storyblok/js';

  import type { CustomerStoryblok, IndustryStoryblok } from '$types/bloks';

  import { getImageAttributes } from '$lib/storyblok';

  import Metrics from '$components/blocks/metrics.svelte';
  import Title from '$components/title.svelte';

  export let block: CustomerStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

  const industry =
    industries.find((industry) => industry.uuid === block.content.customer.content.industry)
      ?.name ?? '';
</script>

<section class="h-[743px] px-container pt-[100px] md:pb-20 md:pt-[148px]" data-theme="dark">
  <div class="grid h-full grid-cols-1 gap-8 md:grid-cols-2">
    <div class="flex flex-col justify-between">
      <Title
        label={{ content: industry, color: 'brand' }}
        class="pl-0 pr-0 pt-0 lg:p-0"
        title={block.name}
      />
      <div class="flex max-w-[528px] flex-col gap-6 text-xl font-medium leading-snug tracking-wide">
        <p class="opacity-74">{block.content.quote}</p>
        <div class="flex items-center gap-3">
          {#if block.content.author_avatar}
            {@const { src, alt, width, height } = getImageAttributes(block.content.author_avatar)}
            <img {src} {alt} {width} {height} class="h-6 w-6" />
          {/if}
          <p>
            {block.content.author_name}, {block.content.author_role}, {block.content.author_company}
          </p>
        </div>
      </div>
    </div>
    {#if block.content.cover}
      {@const { src, alt, width, height } = getImageAttributes(block.content.cover)}
      <img
        {src}
        {alt}
        {width}
        {height}
        class="border-px h-full rounded-3xl border border-gray-12/[0.04] object-cover object-center"
      />
    {/if}
  </div>
</section>
<Metrics block={block.content.metrics[0]} />
