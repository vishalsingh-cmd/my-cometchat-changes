<script lang="ts">
  import { cn } from '$lib/utils';
  import Icon from './icon/icon.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';

  export let activeHeading = '';
  export let menuOpen = false;

  let activeIndex = -1;
</script>

<div
  class={cn(
    'flex w-full flex-row items-center justify-between gap-3 rounded-xl border border-gray-6 bg-white p-4 text-start text-brand-12',
    {
      'translate-y-0': $scrollDirection === 'up',
      '-translate-y-16': $scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
    }
  )}
>
  <button on:click class="flex w-full cursor-pointer flex-col text-start font-medium"
    >{activeHeading}
  </button>

  <Icon icon="chevron-up" class={cn(menuOpen ? 'transform' : 'rotate-180 transform ease-in-out')} />
</div>
