<script lang="ts">
  import { onMount } from 'svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';

  import Noise from '$components/solutions-section/assets/noise.svg';
  import Orbit1 from '$components/solutions-section/assets/orbit-1.svg';
  import Orbit2 from '$components/solutions-section/assets/orbit-2.svg';

  import { planetPositioning } from '$components/solutions-section/planet-positioning';

  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Stars from '$components/stars.svelte';
  import Title from '$components/title.svelte';
  import Dropdown from '$components/dropdown.svelte';
  import Media from '$components/media.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { IndustryStoryblok, SolutionsSectionStoryblok } from '$types/bloks';
  import { sanitizeSlug } from '$lib/storyblok';
  import { cn, getLabelInfo } from '$lib/utils';

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
      style="transform: translate3d(0, 0, 0);"
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
        {@const labelInfo = getLabelInfo(block.title[0].label, 'brand')}
        <Title
          alignment="center"
          label={labelInfo}
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
      {#if industriesOptionsForDropdown.length > 0}
        <Dropdown
          options={industriesOptionsForDropdown}
          selectedOption={selectedIndustryIndex}
          on:optionSelect={onOptionSelect}
        />
      {/if}

      {#if industries[selectedIndustryIndex]}
        {@const selectedIndustry = industries[selectedIndustryIndex]}
        <p
          class="mb-5 mt-3 max-w-[350px] text-center text-lg font-medium leading-snug tracking-wide"
        >
          {selectedIndustry.content.description}
        </p>
        <GhostButton as="a" variant="highlighted" href={sanitizeSlug(selectedIndustry.full_slug)}>
          Learn more
        </GhostButton>
        <div class="mt-10 flex w-full max-w-[1440px] justify-center">
          <Media media={selectedIndustry.content.cover_image} />
        </div>
      {/if}
      <div
        class="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-gray-1 to-gray-1/0"
      />
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
                  class={cn('group isolate z-10 flex w-[143px] flex-col items-center')}
                >
                  <p
                    class={cn(
                      'mb-3 text-center text-md font-semibold leading-tight tracking-wide',
                      selectedIndustryIndex !== i &&
                        'text-sm leading-tight opacity-54 group-hover:opacity-100'
                    )}
                  >
                    {industry.name}
                  </p>
                  <CometIllustration
                    size={selectedIndustryIndex === i ? 'lg' : 'sm'}
                    illustration={illustrationType(industry.content.illustration)}
                    class={cn(
                      'origin-center transform',
                      selectedIndustryIndex != i
                        ? 'origin-center transition-all duration-150 ease-in group-hover:h-6 group-hover:w-6'
                        : 'animate-grow-comet-smothly'
                    )}
                  />
                </button>
                {#if selectedIndustryIndex === i}
                  <div
                    class={cn(
                      'absolute mt-4 flex w-[348px] flex-col items-start justify-end border-solid border-gray-12/10',
                      result.left > industriesContainerWidth / 2
                        ? 'left-[calc(50%-348px)] border-r pr-6'
                        : 'left-1/2 border-l pl-6',
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
          <div class="mx-auto mt-16 w-full max-w-[1000px]">
            <Media media={industries[selectedIndustryIndex].content.cover_image} />
          </div>
        {/if}
      {/if}
      <div
        class="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-gray-1 to-gray-1/0"
      />
    </div>
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
