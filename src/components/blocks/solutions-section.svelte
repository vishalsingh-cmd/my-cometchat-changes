<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { IndustryStoryblok, SolutionsSectionStoryblok } from '$types/bloks';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import { getImageAttributes, sanitizeSlug } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  export let block: SolutionsSectionStoryblok;

  console.log('block', block);

  const industries = block.industries as StoryblokStory<IndustryStoryblok>[];

  const illustrationType = (illustration: string | number) => {
    return illustration as IllustrationOptions;
  };

  let selectedIndustryIndex = 0;

  const planetPositioning = [
    {
      top: '0px',
      left: '0px'
    },
    {
      top: '100px',
      left: '200px'
    },
    {
      top: '40px',
      left: '400px'
    },
    {
      top: '160px',
      left: '800px'
    }
  ];
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative bg-gray-1 text-gray-12">
    <div class="mx-auto max-w-content">
      {#if block.title[0]}
        <Title
          alignment="center"
          label={{ color: 'brand', content: block.title[0].label }}
          title={block.title[0].title}
          titleClass="max-w-[400px] "
        />
      {/if}
    </div>
    <div class="mx-auto max-w-content px-container">
      {#if industries.length > 0}
        <div class="relative flex h-[300px]">
          {#each industries as industry, i}
            <div
              class="absolute inline-flex flex-col"
              style="top: {planetPositioning[i].top}; left: {planetPositioning[i].left}"
            >
              <button
                on:click={() => (selectedIndustryIndex = i)}
                class="flex w-[130px] flex-col items-center"
              >
                <p
                  class={cn(
                    'mb-3 text-center text-md font-semibold leading-tight tracking-wide',
                    selectedIndustryIndex !== i && 'opacity-54'
                  )}
                >
                  {industry.name}
                </p>
                <CometIllustration
                  size={selectedIndustryIndex === i ? 'lg' : 'sm'}
                  illustration={illustrationType(industry.content.illustration)}
                />
              </button>
              {#if selectedIndustryIndex === i}
                <div
                  class="absolute bottom-[-172px] left-1/2 mt-4 flex h-[156px] w-[348px] flex-col items-start justify-end border-l border-solid border-gray-6 pl-6"
                >
                  <p class="mb-3 text-lg font-medium leading-snug tracking-wide opacity-74">
                    {industry.content.description}
                  </p>
                  <GhostButton as="a" variant="highlighted" href={sanitizeSlug(industry.full_slug)}>
                    Learn more
                  </GhostButton>
                </div>
              {/if}
            </div>
          {/each}
        </div>
        {#if industries[selectedIndustryIndex]}
          {@const { src, alt, width, height } = getImageAttributes(
            industries[selectedIndustryIndex].content.cover_image
          )}
          <div class="mt-16 flex w-full justify-center">
            <img {src} {alt} {width} {height} />
          </div>
        {/if}
      {/if}
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-gray-1 to-gray-1/0"
    />
  </section>
{/if}
