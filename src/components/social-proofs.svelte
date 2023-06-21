<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import type { CustomerStoryblok, SocialProofsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';

  // 32 1204

  let containerRef: HTMLElement | null = null;
  export let block: SocialProofsStoryblok;
  const customers = block.customers as StoryblokStory<CustomerStoryblok>[];
  $: arrayOfCustomersToShow = [...customers];

  let initialScrollWidth = 0;

  // 1292 + 56 = 1348
  // 1292 + 32 = 1324
  function handleResize() {
    if (!containerRef) return;

    const containerWidth = containerRef.clientWidth;
    const containerScrollWidth = containerRef.scrollWidth;

    if (containerWidth < initialScrollWidth) {
      arrayOfCustomersToShow = Array.from({ length: 5 }, () => customers).flat();
      const slidePx = containerScrollWidth - containerWidth + 32;
      containerRef.style.setProperty('--slide-px', `-${slidePx}px`);
      containerRef.classList.add('animate-slide');
    } else {
      arrayOfCustomersToShow = customers;
      containerRef.classList.remove('animate-slide');
    }
  }

  onMount(() => {
    handleResize();

    if (containerRef) {
      initialScrollWidth = containerRef.scrollWidth;
    }
  });
</script>

<svelte:window on:resize={handleResize} />
{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="overflow-hidden bg-gray-1 px-container light:bg-gray-3"
  >
    <div class="container mx-auto flex flex-col items-center justify-center gap-8 pb-20 pt-16">
      <h1 class="text-lg tracking-wide text-gray-12 opacity-54">{block.title}</h1>
      {#if customers}
        <div bind:this={containerRef} class={cn('flex w-full gap-8 md:gap-14')}>
          {#each arrayOfCustomersToShow as customer}
            {@const { src, alt, width, height } = getImageAttributes(customer.content.logo)}
            <img {src} {alt} {width} {height} class="h-8 w-fit flex-shrink-0 opacity-54" />
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
