<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

  export let tag: string;
  export let isTagSelected: boolean;

  const dispatch = createEventDispatcher();
</script>

<button
  class={cn(
    'flex items-center gap-1.5',
    'rounded-[10px] bg-brand-10/[0.12]',
    'px-2.5 py-1.5',
    'text-md font-semibold leading-tight tracking-wide',
    'whitespace-nowrap',
    isTagSelected ? 'bg-brand-10/[0.12] pr-2 text-brand-10' : 'bg-gray-11/[0.06] text-gray-11'
  )}
  on:click={() => {
    dispatch('selectTag', { i: tag });
  }}
>
  {tag}
  {#if isTagSelected}
    <button
      class="h-[14px] w-[14px]"
      on:click|stopPropagation={() => {
        dispatch('selectTag', { i: tag });
      }}
    >
      <Icon size="xs" icon="x-circle" />
    </button>
  {/if}
</button>
