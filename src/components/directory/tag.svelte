<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cn } from '$lib/utils';

  export let tag: { name: string; value: string };
  export let panelType:
    | 'category'
    | 'tutorial_type'
    | 'industry'
    | 'industries'
    | 'integration_tool'
    | 'product'
    | 'platform'
    | 'features'
    | 'language'
    | 'framework';
  export let isTagSelected: boolean;

  const dispatch = createEventDispatcher();
</script>

<button
  type="button"
  class={cn(
    'flex items-center gap-2',
    'rounded-[10px]',
    ' px-2.5 py-1.5',
    'text-md font-semibold leading-tight tracking-wide',
    'whitespace-nowrap',
    'transition-smooth',
    'hover:bg-brand-10/[0.12] hover:text-brand-10',
    'outline-4 outline-brand-9/0',
    'focus-visible:bg-brand-10/[0.12] focus-visible:text-brand-10 focus-visible:outline-brand-9/30',
    isTagSelected ? 'bg-brand-10/[0.12] text-brand-10' : 'bg-gray-11/[0.06] text-gray-1/75'
  )}
  on:click={() => dispatch('selectTag', { i: tag.value, j: panelType })}
>
  <!-- Checkbox div -->
  <div
    class="flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/2"
  >
    {#if isTagSelected}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="h-full w-full">
        <rect width="20" height="20" rx="5" fill="#6852D6" />
        <path
          d="M4.00012 10.3637L7.75012 14L16.0001 6.00003"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
  </div>

  <!-- Tag label -->
  <span>{tag.value}</span>
</button>
