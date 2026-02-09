<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { CustomerStoryblok, SocialProofsStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  import { getResolvedAsset } from '$lib/image-helper';
  import Media from '$components/media.svelte';

  let containerRef: HTMLElement | null = null;
  export let block: SocialProofsStoryblok;
  const customers = block.customers as StoryblokStory<CustomerStoryblok>[];
  $: customersArray = [...customers];

  // Helper to resolve customer logo with external URL support
  const getResolvedCustomerLogo = (customer: StoryblokStory<CustomerStoryblok>) =>
    getResolvedAsset(customer.content, 'logo');

  let initialScrollWidth = 0;
  let containerWidth = 0;
  let containerScrollWidth = 0;

  function handleResize() {
    if (!containerRef) return;

    containerWidth = containerRef.clientWidth;
    containerScrollWidth = containerRef.scrollWidth;

    if (containerWidth < initialScrollWidth) {
      customersArray = Array.from({ length: 5 }, () => customers).flat();
      const slidePx = containerScrollWidth - containerWidth + 32;
      containerRef.style.setProperty('--slide-px', `-${slidePx}px`);
      containerRef.classList.add('animate-slide');
    } else {
      customersArray = customers;
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
    data-theme="dark"
    use:storyblokEditable={block}
    class="overflow-hidden bg-gray-1 px-container light:bg-gray-3"
  >
    <div class="container mx-auto flex flex-col items-center justify-center gap-8 pb-20 pt-16">
      <p class="text-lg tracking-wide text-gray-12 opacity-54">{block.title}</p>
      <div bind:this={containerRef} class={cn('flex w-full flex-col justify-center gap-8')}>
        {#if customers}
          {@const needsTwoLines = customers.length > 6}
          {@const arrayHalfNumber = customers.length / 2}
          {@const isOverflowing = containerWidth < initialScrollWidth}

          {@const firstHalfArrayOfCustumers = customersArray.slice(0, arrayHalfNumber)}
          {@const secondHalfArrayOfCustumers = customersArray.slice(-arrayHalfNumber)}

          {#each needsTwoLines ? (isOverflowing ? Array(1) : Array(2)) : Array(1) as _, i}
            {@const customersLineArray =
              i === 0 ? firstHalfArrayOfCustumers : secondHalfArrayOfCustumers}
            {@const twoLinesArray = isOverflowing ? customersArray : customersLineArray}
            <div class="flex w-full justify-center gap-8 md:gap-14">
              {#each needsTwoLines ? twoLinesArray : customersArray as customer}
                {@const resolvedLogo = getResolvedCustomerLogo(customer)}
                {#if resolvedLogo}
                  <Media
                    imageTransformOptions={{ size: [0, 150] }}
                    media={resolvedLogo}
                    class="h-6 w-fit flex-shrink-0 opacity-54"
                  />
                {/if}
              {/each}
            </div>
          {/each}
        {/if}
      </div>
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
