<script lang="ts">
  import { cn } from '$lib/utils';
  import { fade } from 'svelte/transition';

  export let id: number;
  export let label: string;
  export let isActive: boolean;
</script>

<button
  on:click
  data-theme="light"
  id="{id}-tabhead"
  type="button"
  role="tab"
  class={cn(
    'relative min-w-fit cursor-pointer overflow-hidden break-keep p-5 text-xl/tighter font-semibold text-gray-12 opacity-54 hover:opacity-100 md:py-6',
    isActive ? 'border-b border-b-brand-8 opacity-100' : ''
  )}
>
  {label}
  {#if isActive}
    <div
      in:fade
      class="absolute -bottom-5 left-0 h-14 w-3/4 translate-x-0 animate-slide-back-and-foward-smothly bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_var(--tw-gradient-stops))] from-[rgba(104,82,214,1)] to-[rgba(104,82,214,0.00)] opacity-[12%]"
    />
  {/if}
</button>
