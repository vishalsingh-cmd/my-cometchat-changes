<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import type { CustomerStoryblok, SocialProofsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import { onMount, afterUpdate } from 'svelte/internal';
  import { cn } from '$lib/utils';

  // 32 1204

  let itemsGap = 0;
  let isOverflowing = false;
  let initialContainerWidth = 0;
  let currentContainerWidth = 0;
  let containerRef: HTMLElement | null = null;
  export let block: SocialProofsStoryblok;
  const customers = block.customers as StoryblokStory<CustomerStoryblok>[];

  // 1292 + 56 = 1348
  // 1292 + 32 = 1324
  function handleResize() {
    itemsGap = 0;
    if (!containerRef) return;
    isOverflowing = containerRef.clientWidth < initialContainerWidth;
    itemsGap = window.innerWidth > 768 ? 56 : 32;

    let firstContainerRef = containerRef.querySelector('&>div');
    currentContainerWidth = firstContainerRef ? firstContainerRef.scrollWidth : 0;
  }

  onMount(() => {
    initialContainerWidth = containerRef ? containerRef.scrollWidth : 0;
    handleResize();
  });

  afterUpdate(handleResize);
</script>

<svelte:window on:resize={handleResize} />
{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="container mx-auto flex flex-col items-center justify-center gap-8 overflow-hidden bg-gray-1 px-8 px-container pb-20 pt-16 light:bg-gray-3"
  >
    <h1 class="text-lg tracking-wide text-gray-12 opacity-54">{block.title}</h1>
    {#if customers}
      <div
        class={cn(isOverflowing ? 'animate-slide' : '', 'flex')}
        style="--slide-px: -{currentContainerWidth + itemsGap}px"
        bind:this={containerRef}
      >
        {#each isOverflowing ? { length: 2 } : { length: 1 } as _}
          <div class="flex w-full gap-8 md:gap-14">
            {#each customers as customer}
              {@const { src, alt, width, height } = getImageAttributes(customer.content.logo)}
              <img {src} {alt} {width} {height} class="h-8 w-fit flex-shrink-0 opacity-54" />
            {/each}
          </div>
        {/each}
      </div>
    {/if}
  </section>
{/if}

<style>
  .animate-slide {
    animation: slide 5s linear infinite;
  }

  @keyframes slide {
    100% {
      transform: translateX(var(--slide-px));
    }
  }
</style>
