<script lang="ts">
  import { onMount } from 'svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Noise from '$components/solutions-section/assets/noise.svg';
  import Orbit1 from '$components/solutions-section/assets/orbit-1.svg';
  import Orbit2 from '$components/solutions-section/assets/orbit-2.svg';
  import Stars from '$components/homepage/hero/stars.svelte';
  import Title from '$components/title.svelte';

  import { planetPositioning } from '$components/solutions-section/planet-positioning';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { IndustryStoryblok, SolutionsSectionStoryblok } from '$types/bloks';
  import { getImageAttributes, sanitizeSlug } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import Dropdown from '$components/dropdown.svelte';

  export let block: SolutionsSectionStoryblok;

  let industriesContainer: HTMLDivElement;

  const industries = block.industries as StoryblokStory<IndustryStoryblok>[];

  const industriesOptionsForDropdown = industries.map((industry) => {
    return {
      label: industry.name,
      value: industry.slug,
      cometIllustration: industry.content.illustration as IllustrationOptions
    };
  });

  const illustrationType = (illustration: string | number) => {
    return illustration as IllustrationOptions;
  };

  let selectedIndustryIndex = 0;

  const onOptionSelect = (e: CustomEvent) => {
    selectedIndustryIndex = e.detail.i;
  };

  $: industriesContainerWidth = 0;

  const handleResize = () => {
    if (industriesContainer) {
      industriesContainerWidth = industriesContainer.offsetWidth;
    }
  };

  onMount(() => {
    if (industriesContainer) {
      industriesContainerWidth = industriesContainer.offsetWidth;
    }
  });
</script>

<svelte:window on:resize={handleResize} />

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden bg-gray-1 text-gray-12">
    <div
      class="rotate-30 gradients absolute left-[50vw] top-[-150px] h-[1054px] w-[1584px] -translate-x-1/2 transform opacity-40 mix-blend-hard-light blur-[50px]"
    />
    <img class="absolute bottom-0 left-0 right-0 top-0" src={Noise} alt="" />
    <img class="absolute left-[50vw] top-[93px] -translate-x-2/4" src={Orbit1} alt="" />
    <img class="absolute left-[50vw] top-[-10px] -translate-x-2/4" src={Orbit2} alt="" />
    <div class="absolute left-[50vw] w-full max-w-content -translate-x-1/2">
      <Stars
        amount={40}
        backgroundColours={['bg-brand-9', 'bg-gray-8', 'bg-orange-8', 'bg-brand-7']}
      />
    </div>
    <div class="isolate z-20 mx-auto max-w-content">
      {#if block.title[0]}
        <Title
          alignment="center"
          label={{ color: 'brand', content: block.title[0].label }}
          title={block.title[0].title}
          titleClass="max-w-[400px] text-center"
          class="items-center"
        />
      {/if}
    </div>
    <!-- Mobile view -->
    <div
      class="isolate z-20 mx-auto flex max-w-content flex-col items-center px-container lg:hidden"
    >
      <Dropdown
        options={industriesOptionsForDropdown}
        selectedOption={selectedIndustryIndex}
        on:optionSelect={onOptionSelect}
      />

      {#if industries[selectedIndustryIndex]}
        {@const selectedIndustry = industries[selectedIndustryIndex]}
        {@const { src, alt, width, height } = getImageAttributes(
          selectedIndustry.content.cover_image
        )}
        <p
          class="mb-5 mt-3 max-w-[350px] text-center text-lg font-medium leading-snug tracking-wide"
        >
          {selectedIndustry.content.description}
        </p>
        <GhostButton as="a" variant="highlighted" href={sanitizeSlug(selectedIndustry.full_slug)}>
          Learn more
        </GhostButton>
        <div class="mt-10 flex w-full justify-center">
          <img {src} {alt} {width} {height} />
        </div>
      {/if}
    </div>

    <!-- Desktop view -->
    <div class="isolate z-20 mx-auto hidden max-w-content px-container lg:block">
      {#if industries.length > 0}
        <div class="relative flex h-[300px]" bind:this={industriesContainer}>
          {#if industriesContainer}
            {#each industries as industry, i}
              {@const result = planetPositioning(industriesContainerWidth, industries.length, i)}
              <div
                class="absolute inline-flex flex-col"
                style="top: {result.top}px; left: {result.left}px"
              >
                <button
                  on:click={() => (selectedIndustryIndex = i)}
                  class="isolate z-10 flex w-[130px] flex-col items-center"
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
                    class={cn(
                      'absolute mt-4 flex w-[348px] flex-col items-start justify-end border-solid border-gray-6 pl-6',
                      result.left > industriesContainerWidth / 2
                        ? 'left-[calc(50%-348px)] border-r'
                        : 'left-1/2 border-l',
                      i === 8 ? 'bottom-[-260px] h-[250px]' : 'bottom-[-172px] h-[156px]'
                    )}
                  >
                    <p class="mb-3 text-lg font-medium leading-snug tracking-wide opacity-74">
                      {industry.content.description}
                    </p>
                    <GhostButton
                      as="a"
                      variant="highlighted"
                      href={sanitizeSlug(industry.full_slug)}
                    >
                      {block.solution_cta_label}
                    </GhostButton>
                  </div>
                {/if}
              </div>
            {/each}
          {/if}
        </div>
        {#if industries[selectedIndustryIndex]}
          {@const { src, alt, width, height } = getImageAttributes(
            industries[selectedIndustryIndex].content.cover_image,
            { size: [0, 560] }
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

<style>
  .gradients {
    background: radial-gradient(
        38.96% 17.2% at 53.66% 53.67%,
        rgba(202, 131, 253, 0.5) 0%,
        rgba(202, 131, 253, 0) 100%
      ),
      radial-gradient(
        101.78% 31.2% at 39.5% 60.15%,
        rgba(255, 127, 62, 0.3) 0%,
        rgba(255, 113, 41, 0) 71.73%
      ),
      radial-gradient(
        85.45% 76.8% at 81.67% 32.23%,
        rgba(20, 30, 202, 0.3) 0%,
        rgba(20, 30, 202, 0) 79.96%
      ),
      rgba(0, 0, 0, 0.2);
  }
</style>
