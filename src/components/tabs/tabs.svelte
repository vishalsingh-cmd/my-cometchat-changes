<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import TabItem from './tab-item.svelte';

  const dispatch = createEventDispatcher();

  let className: undefined | string = undefined;

  export { className as class };
  export let options: {
    id: number;
    label: string;
  }[];
  export let activeTab = 0;
</script>

<div
  class={cn('flex w-full flex-row overflow-x-scroll break-all px-container', className)}
  role="tablist"
>
  {#each options as tab}
    <TabItem
      id={tab.id}
      on:click={() =>
        dispatch('optionSelect', {
          i: tab.id
        })}
      isActive={activeTab === tab.id}
      label={tab.label}
    />
  {/each}
</div>
