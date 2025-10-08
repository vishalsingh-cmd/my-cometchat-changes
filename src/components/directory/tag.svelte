<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

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
  class={cn(
    'flex items-center gap-1.5',
    'rounded-[10px]',
    'px-2.5 py-1.5',
    'text-md font-semibold leading-tight tracking-wide',
    'whitespace-nowrap',
    'transition-smooth',
    'hover:bg-brand-10/[0.12] hover:text-brand-10',
    'outline-4 outline-brand-9/0',
    'focus-visible:bg-brand-10/[0.12] focus-visible:text-brand-10 focus-visible:outline-brand-9/30',
    isTagSelected
      ? 'bg-brand-10/[0.12] pr-2 text-brand-10'
      : 'bg-gray-11/[0.06] text-white opacity-74'
  )}
  on:click={() => {
    dispatch('selectTag', { i: tag.value, j: panelType });
  }}
>
  {tag.value}
  {#if isTagSelected}
    <button
      class="h-[14px] w-[14px]"
      on:click|stopPropagation={() => {
        dispatch('selectTag', { i: tag.value, j: panelType });
      }}
    >
      <Icon size="xs" icon="x-circle" />
    </button>
  {/if}
</button>
