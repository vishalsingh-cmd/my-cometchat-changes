<script lang="ts">
  import { cn } from '$lib/utils';
  import { fade } from 'svelte/transition';

  export let id: number;
  export let isActive: boolean;
</script>

<button
  on:click
  id="{id}-tabhead"
  type="button"
  role="tab"
  class={cn(
    'relative inline-block h-[71px] min-w-fit cursor-pointer overflow-hidden break-keep text-xl/tighter font-semibold text-gray-12/54 transition-colors hover:text-gray-12/100 md:h-[71px]',
    isActive &&
      'text-gray-12/100 after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-brand-8'
  )}
>
  <slot />
  {#if isActive}
    <div
      in:fade
      class="absolute -bottom-5 left-0 h-14 w-3/4 translate-x-0 animate-slide-back-and-foward-smothly bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_var(--tw-gradient-stops))] from-[rgba(104,82,214,1)] to-[rgba(104,82,214,0.00)] opacity-[12%]"
    />
  {/if}
</button>

<div id="line" class="absolute top-[70px] w-full border-b border-gray-9/[.08]" />
