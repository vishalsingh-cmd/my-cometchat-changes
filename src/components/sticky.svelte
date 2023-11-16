<script lang="ts">
  import { onMount } from 'svelte';

  import { cn } from '$lib/utils';
  import scrollDirection from '$lib/stores/scroll-direction';

  let isSticky = false;
  let topOffset: number;
  let containerRef: HTMLDivElement;
  export let translateOnDesktop = false;

  let className: undefined | string = undefined;
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
    updateStickyState();
  });
</script>

<!-- Sticky Element -->
<div
  data-sticky={isSticky ? '' : null}
  bind:this={containerRef}
  class={cn('sticky left-0 top-0 z-20', className)}
>
  <!-- Element that is going to translate -->
  <div
    class={cn(
      'translate-y-0 transition-transform duration-300 ease-motion',
      isSticky && $scrollDirection === 'up' ? 'translate-y-top-nav' : 'translate-y-0',
      !translateOnDesktop && 'md:translate-y-0 md:bg-transparent',
      isSticky ? 'bg-gray-1' : 'bg-transparent'
    )}
  >
    <slot />
  </div>
</div>
