<script lang="ts">
  import { cn } from '$lib/utils';
  import { fade } from 'svelte/transition';

  export let id: number;
  export let isActive: boolean;
</script>

<li
  class={cn(
    'relative isolate w-fit overflow-hidden',
    isActive ? 'border-b-[1px] border-b-brand-8' : ''
  )}
  role="presentation"
>
  <button
    on:click
    data-theme="light"
    class={cn(
      'z-10 w-full cursor-pointer p-5 text-xl/tighter font-semibold text-gray-12 opacity-54 hover:opacity-100 md:px-5 md:py-6',
      isActive ? 'opacity-100' : ''
    )}
    id="{id}-tabhead"
    type="button"
    role="tab"
  >
    <slot />
  </button>

  {#if isActive}
    <div class="w-full">
      <div
        in:fade
        class="animate absolute -bottom-5 z-0 h-14 w-3/4"
        style={cn(
          'background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(104, 82, 214) 0%, rgba(104, 82, 214, 0.00) 100%);'
        )}
      />
    </div>
  {/if}
</li>

<style>
  .animate {
    animation: 4s ease-in-out 0s infinite alternate both running slideBackAndFoward;
    transform: translateX(0);
    opacity: 12%;
  }

  @keyframes slideBackAndFoward {
    0% {
      transform: translateX(0);
      opacity: 12%;
    }

    25% {
      opacity: 20%;
    }

    50% {
      opacity: 12%;
    }

    75% {
      opacity: 18%;
    }

    100% {
      transform: translateX(34%);
      opacity: 22%;
    }
  }
</style>
