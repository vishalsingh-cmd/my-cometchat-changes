<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  const dispatch = createEventDispatcher();

  let className: undefined | string = undefined;
  export { className as class };
  export let searchValue = '';
</script>

<div
  class={cn(
    'flex flex-col items-center justify-center rounded-[20px] border border-dashed border-gray-12/[0.12] py-[120px]',
    className
  )}
>
  <div
    class="mb-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gray-8/8 text-gray-10"
  >
    <Icon size="sm" icon="stars-02" />
  </div>
  <div
    class="w-full max-w-[352px] text-center text-lg font-normal leading-snug tracking-wide text-gray-12"
  >
    <p class="mb-1 font-medium">No results found</p>
    <p>"{searchValue}" did not match any customer stories.</p>
    <p>Please try again.</p>
  </div>
  <GhostButton class="mt-3 gap-[6px]" on:click={() => dispatch('clearSearchValue')}>
    Clear Search
    <Icon size="sm" icon="x-circle" />
  </GhostButton>
</div>
