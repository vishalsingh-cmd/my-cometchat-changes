<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import type { CustomerStoryblok, SocialProofsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import { onMount } from 'svelte/internal';
  import { cn } from '$lib/utils';
  onMount(() => {
    handleResize();
  });

  export let block: SocialProofsStoryblok;
  const customers = block.customers as StoryblokStory<CustomerStoryblok>[];

  const range = (start: number, end: number): number[] => {
    const arr: number[] = [];
    for (let i = start; i < end; i++) {
      arr.push(i);
    }
    return arr;
  };

  $: gap = getGap(customers.length) ?? 0;

  const getGap = (numImages: number) => {
    return Math.max(20 + 25 * (7 - numImages), 100);
  };

  let containerRef: HTMLElement | null = null;
  let initialContainerWidth: number;
  let isOverflowing: boolean;

  function handleResize() {
    if (containerRef) {
      console.log(containerRef.clientWidth, initialContainerWidth);
      if (containerRef.clientWidth < initialContainerWidth) {
        isOverflowing = true;
      }
      if (containerRef.clientWidth > initialContainerWidth) {
        isOverflowing = false;
      }
    }
    containerRef ? console.log('Rezized', containerRef.clientWidth, initialContainerWidth) : '';
  }

  onMount(() => {
    initialContainerWidth = containerRef ? containerRef.clientWidth : 0;
    handleResize();
    console.log('initial ' + initialContainerWidth);
  });
</script>

<svelte:window on:resize={handleResize} />
{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-gray-1 pb-20 pt-16 light:bg-gray-3"
  >
    <h1 class="text-lg tracking-wide text-gray-12 opacity-54">{block.title}</h1>
    {#if customers}
      <div
        class={cn(isOverflowing ? 'animate-slide' : '', 'flex gap-14 px-8')}
        style="--slide-px: -{(customers?.length ?? 0) * (100 + gap)}px;"
        bind:this={containerRef}
      >
        {#each isOverflowing ? range(0, 10) : [0] as _}
          {#each customers as customer}
            {@const { src, alt, width, height } = getImageAttributes(customer.content.logo)}
            <img {src} {alt} {width} {height} class="h-8 w-fit opacity-54" />
          {/each}
        {/each}
      </div>
    {/if}
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
