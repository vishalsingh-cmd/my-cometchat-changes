<script lang="ts">
  import { onMount } from 'svelte';

  import { cn } from '$lib/utils';
  import { page } from '$app/stores';
  import scrollDirection from '$lib/stores/scroll-direction';

  let isSticky = false;
  let topOffset: number;
  let containerRef: HTMLDivElement;
  export let translateOnDesktop = false;

  let className = '';
  export { className as class };

  function updateStickyState() {
    if (containerRef) {
      const topStyle = window.getComputedStyle(containerRef).top;
      topOffset = containerRef.getBoundingClientRect().top;
      isSticky = topOffset <= parseInt(topStyle, 10);
    }
    requestAnimationFrame(updateStickyState);
  }

  onMount(() => {
    if (!className?.includes('top-')) {
      className += ' top-0';
    }
    if (!className?.includes('z-')) {
      className += ' z-20';
    }
    updateStickyState();
  });
</script>

<!-- Sticky Element -->
<div
  data-sticky={isSticky ? '' : null}
  bind:this={containerRef}
  class={cn('sticky left-0', className)}
>
  <!-- Element that is going to translate -->
  <div
    class={cn(
      'translate-y-0 transition-transform duration-300 ease-motion',
      isSticky && $scrollDirection === 'up' && !$page.route.id?.startsWith('/lp/')
        ? 'translate-y-[60px]'
        : 'translate-y-0',
      !translateOnDesktop && 'md:translate-y-0 md:bg-transparent',
      isSticky ? 'bg-gray-1' : 'bg-transparent'
    )}
  >
    <slot />
  </div>
</div>
