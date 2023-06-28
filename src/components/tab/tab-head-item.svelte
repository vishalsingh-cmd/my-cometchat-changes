<script lang="ts">
  import { cn } from '$lib/utils';
  import { fade } from 'svelte/transition';

  export let id: number;
  export let isActive: boolean;
</script>

<li
  class={cn(
    'relative isolate w-fit overflow-hidden transition-all',
    isActive ? 'border-b-[1px] border-b-brand-8' : ''
  )}
  role="presentation"
>
  <button
    on:click
    data-theme="light"
    class={cn(
      'z-10 w-fit cursor-pointer p-5 text-xl/tighter font-semibold text-gray-12 opacity-54 transition-all hover:opacity-100 md:px-5 md:py-6',
      isActive ? 'opacity-100' : ''
    )}
    id="{id}-tabhead"
    type="button"
    role="tab"
  >
    <slot />
  </button>

  {#if isActive}
    <div
      in:fade
      out:fade
      class="animate absolute -bottom-5 z-0 h-14 w-full"
      style={cn(
        'background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(104, 82, 214) 0%, rgba(104, 82, 214, 0.00) 100%);'
      )}
    />
  {/if}
</li>

<style>
  .animate {
    animation: 4s ease-in 0s infinite alternate both running slideBackAndFoward;
    transform: translateX(10%) scale(100%);
    opacity: 25%;
  }

  @keyframes slideBackAndFoward {
    0% {
      transform: translateX(10%) scale(100%);
      opacity: 25%;
    }

    25% {
      opacity: 20%;
    }

    50% {
      opacity: 22%;
    }

    75% {
      opacity: 20%;
    }

    100% {
      transform: translateX(-10%);
      opacity: 25%;
    }
  }
</style>
