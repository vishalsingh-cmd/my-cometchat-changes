<script lang="ts">
  import type { ISbStoryData } from '@storyblok/js';

  import type { CustomerStoryStoryblok, CustomerStoryblok, IndustryStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';
  import { getResolvedAsset } from '$lib/image-helper';

  import Metrics from '$components/blocks/metrics.svelte';
  import Title from '$components/title.svelte';
  import Media from '$components/media.svelte';

  export let block: CustomerStoryStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

  const customer = block.content.customer as unknown as CustomerStoryblok;

  const industryToShow = customer.content.industry as string;

  const industry = industries.find((industry) => industry.uuid === industryToShow)?.name ?? '';

  const author = block.content.author;

  // Resolve images for external URL support
  $: resolvedCover = getResolvedAsset(block.content, 'cover');
  $: resolvedAuthorAvatar = author?.content
    ? getResolvedAsset(author.content, 'avatar')
    : undefined;
</script>

<section
  class={cn('relative bg-gray-1 text-gray-12', block.content.imported_from_old_site && 'h-auto')}
  data-theme="dark"
>
  {#if block.content.imported_from_old_site}
    <div
      class="container mx-auto flex flex-col gap-12 px-container pb-10 pt-[100px] md:pb-20 md:pt-[148px]"
    >
      <div class="flex flex-col gap-3 md:flex-row md:gap-16">
        <h1 class="flex-1 text-3xl font-semibold leading-tighter">{block.name}</h1>
        <div
          class="flex flex-1 flex-col justify-between gap-4 text-xl leading-snug tracking-wide opacity-74"
        >
          <p class="font-medium">{block.content.quote}</p>
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
      {#if resolvedCover}
        <div
          class="border-px h-full max-h-[580px] min-h-[284px] overflow-hidden rounded-3xl border border-gray-12/[0.04]"
        >
          <Media
            imageTransformOptions={{ size: [1600, 0] }}
            media={resolvedCover}
            class="h-full max-h-[580px] w-full object-cover"
          />
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="container relative mx-auto grid h-full grid-cols-1 gap-8 overflow-hidden px-container pb-10 pt-[100px] md:pb-20 md:pt-[148px] lg:grid-cols-2"
    >
      <!-- Background Blur -->
      <div
        class={cn(
          'h-[250px] w-[250px]',
          'absolute origin-center transform rounded-1/2',
          '-translate-x-1/2 translate-y-1/2',
          'bottom-1/2 left-1/2',
          'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-8/80 from-0% to-[rgba(20,30,202,0.00)]/0 to-100%',
          'opacity-60',
          'blur-[150px]'
        )}
      />

      <div class="flex flex-col justify-between gap-8">
        <Title
          titleHeadingType="h1"
          label={{ content: industry, color: 'brand' }}
          class="pl-0 pr-0 pt-0 lg:p-0"
          title={block.name}
        />
        <div
          class="flex max-w-[528px] flex-col gap-6 text-xl font-medium leading-snug tracking-wide"
        >
          <p class="opacity-74">{block.content.quote}</p>
          <div class="flex items-center gap-4">
            {#if author}
              {@const { name, role, company } = author.content}
              {#if resolvedAuthorAvatar}
                <Media
                  media={resolvedAuthorAvatar}
                  imageTransformOptions={{ size: [96, 96] }}
                  class="h-12 w-12 rounded-full"
                />
              {/if}
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
      {#if resolvedCover}
        <div
          class="border-px h-full max-h-[580px] min-h-[284px] overflow-hidden rounded-3xl border border-gray-12/[0.04]"
        >
          <Media
            imageTransformOptions={{ size: [1600, 0] }}
            media={resolvedCover}
            class="h-full max-h-[580px] w-full object-cover"
          />
        </div>
      {/if}
    </div>
  {/if}

  <!-- Bottom Gradient -->
  <div
    class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-gray-1/100 to-transparent"
  />
</section>
{#if !block.content.imported_from_old_site}
  {#if block.content.metrics && block.content.metrics.length > 0}
    <Metrics block={block.content.metrics[0]} />
  {/if}
{/if}
