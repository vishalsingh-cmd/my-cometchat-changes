<script lang="ts">
  import type { ISbStoryData } from '@storyblok/js';

  import type { CustomerStoryStoryblok, CustomerStoryblok, IndustryStoryblok } from '$types/bloks';

  import { getImageAttributes } from '$lib/storyblok';

  import Metrics from '$components/blocks/metrics.svelte';
  import Title from '$components/title.svelte';

  export let block: CustomerStoryStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

  const customer = block.content.customer as unknown as CustomerStoryblok;

  const industryToShow = customer.content.industry as string;

  const industry = industries.find((industry) => industry.uuid === industryToShow)?.name ?? '';
</script>

<section class="h-[743px] pt-[100px] md:pb-20 md:pt-[148px]" data-theme="dark">
  <div class="container mx-auto grid h-full grid-cols-1 gap-8 px-container md:grid-cols-2">
    <div class="flex flex-col justify-between">
      <Title
        label={{ content: industry, color: 'brand' }}
        class="pl-0 pr-0 pt-0 lg:p-0"
        title={block.name}
      />
      <div class="flex max-w-[528px] flex-col gap-6 text-xl font-medium leading-snug tracking-wide">
        <p class="opacity-74">{block.content.quote}</p>
        <div class="flex items-center gap-3">
          {#if block.content.author}
            {@const { src, alt, width, height } = getImageAttributes(
              block.content.author.content.avatar
            )}
            <img {src} {alt} {width} {height} class="h-6 w-6" />
          {/if}
          <p>
            {block.content.author.content.name},
            {#if block.content.author.content.role !== ''}
              {block.content.author.content.role},
            {/if}
            {block.content.author.content.company}
          </p>
        </div>
      </div>
    </div>
    {#if block.content.cover}
      {@const { src, alt } = getImageAttributes(block.content.cover)}
      <div
        class="border-px h-full max-h-[580px] overflow-hidden rounded-3xl border border-gray-12/[0.04] object-cover"
      >
        <img {src} {alt} class="h-full w-full object-cover" />
      </div>
    {/if}
  </div>
</section>
{#if block.content.metrics && block.content.metrics.length > 0}
  <Metrics block={block.content.metrics[0]} />
{/if}
