<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  import scrollDirection from '$lib/stores/scroll-direction';

  let isSticky = false;
  let topOffset: number;
  let containerRef: HTMLDivElement;
  export let alwaysHaveBorder = false;

  let className: undefined | string = undefined;
  export { className as class };

  function updateStickyState() {
    if (containerRef) {
      topOffset = containerRef.getBoundingClientRect().top;
      isSticky = topOffset <= 0;
    }
    requestAnimationFrame(updateStickyState);
  }

  onMount(() => {
    updateStickyState();
  });
</script>

<!-- Sticky Element -->
<div bind:this={containerRef} class={cn('sticky left-0 top-0 z-10 md:static', className)}>
  <!-- Element that is going to translate -->
  <div
    class={cn(
      'transition-transform duration-300 ease-motion md:translate-y-0',
      isSticky && $scrollDirection === 'up' ? 'translate-y-16' : 'translate-y-0',
      isSticky && !alwaysHaveBorder && 'border-b border-gray-12/8 md:border-b-0',
      isSticky ? 'bg-gray-1 md:bg-transparent' : 'bg-transparent',
      alwaysHaveBorder && 'border-b border-gray-12/8 md:border-b-0'
    )}
  >
    <slot />
  </div>
</div>
