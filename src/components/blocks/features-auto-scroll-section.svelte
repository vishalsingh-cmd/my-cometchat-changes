<script lang="ts">
  import type { FeaturesAutoScrollSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';
  import Media from '$components/media.svelte';
  import AnimatedAccordionGroup from './animated-accordion-group.svelte';
  import TitleSection from './title-section.svelte';

  export let block: FeaturesAutoScrollSectionStoryblok;

  let activeIndex = 0;
  function handleItemSwitch(e: CustomEvent<number>) {
    activeIndex = e.detail;
  }
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme}
    class="bg-gray-1 pb-6 text-gray-12"
  >
    <div class="container mx-auto">
      <TitleSection block={block.title[0]} />
    </div>
    <div
      class={cn(
        'container relative mx-auto flex flex-col items-start gap-8 px-container lg:gap-20',
        block.media_side === 'left' && 'lg:flex-row-reverse lg:gap-[128px]',
        block.media_side === 'right' && 'lg:flex-row lg:gap-[36px]'
      )}
    >
      <div class="flex-1">
        <AnimatedAccordionGroup
          theme={block.theme}
          block={block.items}
          on:switch={handleItemSwitch}
        />
      </div>
      <div
        class={cn(
          'hidden aspect-square h-full w-full flex-1 overflow-hidden lg:block lg:max-h-[640px]',
          block.media_side === 'center' && 'lg:relative lg:aspect-auto lg:w-[1440px]'
        )}
      >
        {#key activeIndex}
          <Media
            imageTransformOptions={{ size: [1200, 0] }}
            media={block.items[activeIndex].media}
            class="object-cover"
          />
        {/key}
      </div>
    </div>
  </section>
{/if}
