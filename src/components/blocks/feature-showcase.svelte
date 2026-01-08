<script lang="ts">
  import type { FeatureShowcaseStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Icon from '$components/icon/icon.svelte';

  export let block: FeatureShowcaseStoryblok;

  let selectedIndex = 0;

  // Block structure:
  // block.features = [
  //   {
  //     title: "Lorem ipsum dolor...",
  //     description: "Detailed description...",
  //     image: { filename: "..." }
  //   }
  // ]

  function selectFeature(index: number) {
    selectedIndex = index;
  }

  $: selectedFeature = block.features?.[selectedIndex];
</script>

{#if block}
  <Section>
    <Container>
      <div use:storyblokEditable={block} class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
        <!-- Left Side - Feature List -->
        <div class="relative flex flex-col gap-4">
          <div class="relative flex flex-col gap-[32px]">
            <div class="absolute left-0 top-0 z-[1] h-full w-[1px] bg-gray-12/10" />
            {#each block.features ?? [] as feature, index}
              <button
                on:click={() => selectFeature(index)}
                class={`group flex items-start gap-4 border-l ${
                  selectedIndex === index ? 'border-brand-9' : 'border-transparent'
                } px-4 text-left transition-all duration-300`}
              >
                <!-- Icon/Chevron -->
                <div class="mt-1 flex-shrink-0">
                  <Icon
                    icon="double-chevron-right"
                    size="xs"
                    class={`transition-all duration-300 ${
                      selectedIndex === index
                        ? 'text-brand-9'
                        : 'text-gray-11 opacity-40 group-hover:opacity-70'
                    }`}
                  />
                </div>

                <!-- Title -->
                <div class="flex-1">
                  <p
                    class={`leading-relaxed text-[22px]  transition-colors duration-300 md:text-lg ${
                      selectedIndex === index
                        ? 'font-semibold text-brand-9'
                        : 'font-[640px] text-gray-12 opacity-40 group-hover:text-gray-12'
                    }`}
                  >
                    {feature.title}
                  </p>
                </div>
              </button>
            {/each}
          </div>
        </div>

        <!-- Right Side - Content Display -->
        <div class="relative flex flex-col gap-6">
          {#if selectedFeature}
            <!-- Image -->
            {#if selectedFeature.image?.filename}
              <div class="relative max-h-[500px]" key={selectedIndex}>
                <img
                  src={selectedFeature.image.filename}
                  alt={selectedFeature.title}
                  class=" h-full object-cover"
                />
              </div>
            {/if}

            <!-- Description -->
            {#if selectedFeature.description}
              <div
                class="animate-in fade-in slide-in-from-bottom-2 duration-500"
                style="animation-delay: 100ms;"
              >
                <p
                  class="leading-relaxed text-center text-lg font-semibold leading-tight text-gray-12 opacity-74"
                >
                  {selectedFeature.description}
                </p>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    </Container>
  </Section>
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in-from-bottom {
    from {
      transform: translateY(16px);
    }
    to {
      transform: translateY(0);
    }
  }

  .animate-in {
    animation: fade-in 0.5s ease-out, slide-in-from-bottom 0.5s ease-out;
  }
</style>
