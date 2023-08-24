<script lang="ts">
  import type { ISbStoryData } from '@storyblok/js';

  import type { CustomerStoryStoryblok, CustomerStoryblok, IndustryStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import Metrics from '$components/blocks/metrics.svelte';
  import Title from '$components/title.svelte';
  import Media from '$components/media.svelte';

  import Background from './assets/background.png';

  export let block: CustomerStoryStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

  const customer = block.content.customer as unknown as CustomerStoryblok;

  const industryToShow = customer.content.industry as string;

  const industry = industries.find((industry) => industry.uuid === industryToShow)?.name ?? '';

  const author = block.content.author;
</script>

<section
  class={cn(
    'h-[743px] overflow-hidden bg-gray-1 pt-[100px] text-gray-12 md:pb-20 md:pt-[148px]',
    block.content.imported_from_old_site && 'h-auto'
  )}
  data-theme="dark"
>
  {#if block.content.imported_from_old_site}
    <div class="container mx-auto flex flex-col gap-12 px-container">
      <div class="flex flex-col gap-3 md:flex-row md:gap-16">
        <h1 class="flex-1 text-3xl font-semibold leading-tighter">{block.name}</h1>
        <div class="flex flex-1 flex-col gap-4 text-xl leading-snug tracking-wide">
          <p class="font-medium opacity-74">{block.content.quote}</p>
          <div class="flex items-center gap-3">
            {#if author}
              {@const { name } = author.content}
              <p>
                {name}
              </p>
            {/if}
          </div>
        </div>
      </div>
      {#if block.content.cover}
        <div
          class="border-px h-full max-h-[580px] min-h-[284px] overflow-hidden rounded-3xl border border-gray-12/[0.04]"
        >
          <Media media={block.content.cover} class="h-full max-h-[580px] w-full object-cover" />
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="container relative isolate mx-auto grid h-full grid-cols-1 gap-8 px-container md:grid-cols-2"
    >
      <div class="flex flex-col justify-between">
        <Title
          label={{ content: industry, color: 'brand' }}
          class="pl-0 pr-0 pt-0 lg:p-0"
          title={block.name}
        />
        <div
          class="flex max-w-[528px] flex-col gap-6 text-xl font-medium leading-snug tracking-wide"
        >
          <p class="opacity-74">&quot;{block.content.quote}&quot;</p>
          <div class="flex items-center gap-4">
            {#if author}
              {@const { avatar, name, role, company } = author.content}
              <Media
                media={avatar}
                imageTransformOptions={{ size: [96, 96] }}
                class="h-12 w-12 rounded-full"
              />
              <div class="text-lg font-medium">
                <p aria-label={string('a11y.author')}>
                  {name}
                </p>
                <p aria-label={string('a11y.role')}>
                  {#if role}
                    {role},
                  {/if}
                  {company}
                </p>
              </div>
            {/if}
          </div>
        </div>
      </div>
      {#if block.content.cover}
        <div
          class="border-px h-full max-h-[580px] min-h-[284px] overflow-hidden rounded-3xl border border-gray-12/[0.04]"
        >
          <Media media={block.content.cover} class="h-full max-h-[580px] w-full object-cover" />
        </div>
      {/if}
      <img
        src={Background}
        alt=""
        draggable="false"
        class="pointer-events-none absolute right-1/2 top-0 -z-10 min-h-[584px] min-w-[852px] translate-x-1/2 select-none opacity-8 mix-blend-hard-light md:-top-1/3"
      />
    </div>
  {/if}
</section>
{#if !block.content.imported_from_old_site}
  {#if block.content.metrics && block.content.metrics.length > 0}
    <Metrics block={block.content.metrics[0]} />
  {/if}
{/if}
