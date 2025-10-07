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
  class={cn(
    'container mx-auto flex w-full flex-row gap-4 overflow-auto break-all bg-[#0A0914] px-container md:gap-6',
    className
  )}
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
