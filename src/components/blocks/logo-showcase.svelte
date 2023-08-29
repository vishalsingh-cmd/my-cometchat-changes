<script lang="ts">
  import { onMount } from 'svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { LogoShowcaseStoryblok } from '$types/bloks';

  import Icon from '$components/icon/icon.svelte';

  export let block: LogoShowcaseStoryblok;

  let containerRef: HTMLElement | null = null;

  const logos = block.logos as string[];
  $: arrayOfLogosToShow = [...logos];

  let initialScrollWidth = 0;

  function handleResize() {
    if (!containerRef) return;

    const containerWidth = containerRef.clientWidth;
    const containerScrollWidth = containerRef.scrollWidth;

    if (containerWidth < initialScrollWidth) {
      arrayOfLogosToShow = Array.from({ length: 5 }, () => logos).flat();
      const slidePx = containerScrollWidth - containerWidth + 32;
      containerRef.style.setProperty('--slide-px', `-${slidePx}px`);
      containerRef.classList.add('animate-slide');
    } else {
      arrayOfLogosToShow = logos;
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
      {#if logos}
        <div
          bind:this={containerRef}
          class={cn('flex w-full items-center justify-center gap-8 md:gap-14')}
        >
          {#each arrayOfLogosToShow as logo}
            <Icon icon={logo} size="free" class="h-full flex-shrink-0 opacity-54" />
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
