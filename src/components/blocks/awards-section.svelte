<script lang="ts">
  import { onMount } from 'svelte';

  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { AwardsSectionStoryblok, MultiassetStoryblok } from '$types/bloks';

  import Media from '$components/media.svelte';

  export let block: AwardsSectionStoryblok;

  const awards = block.awards as MultiassetStoryblok;
  $: arrayOfAwardsToShow = [...awards];

  let containerRef: HTMLElement | null = null;
  let initialScrollWidth = 0;

  function handleResize() {
    if (!containerRef) return;

    const containerWidth = containerRef.clientWidth;
    const containerScrollWidth = containerRef.scrollWidth;

    if (containerWidth < initialScrollWidth) {
      arrayOfAwardsToShow = Array.from({ length: 5 }, () => awards).flat();

      const slidePx = containerScrollWidth - containerWidth + 32;

      containerRef.style.setProperty('--slide-px', `-${slidePx}px`);
      containerRef.classList.add('animate-slide');
    } else {
      arrayOfAwardsToShow = awards;
      containerRef.classList.remove('animate-slide');
    }
  }

  onMount(() => {
    if (containerRef) {
      initialScrollWidth = containerRef.scrollWidth;
    }

    handleResize();
  });
</script>

<svelte:window on:resize={handleResize} />
{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme}
    class="overflow-hidden bg-gray-1 px-container"
  >
    <div class="container mx-auto flex flex-col gap-6 pb-12 pt-10 md:gap-8 md:py-20">
      <p class="text-center text-lg font-semibold leading-tight text-gray-12 opacity-74">
        {block.title}
      </p>
      {#if awards}
        <div
          bind:this={containerRef}
          class={cn('flex items-center justify-center gap-10 md:gap-20')}
        >
          {#each arrayOfAwardsToShow as award}
            <Media media={award} class="h-16 w-fit flex-shrink-0 md:h-20" />
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}

<style>
  .animate-slide {
    animation: slide 40s linear infinite;
  }

  @keyframes slide {
    100% {
      transform: translateX(var(--slide-px));
    }
  }
</style>
