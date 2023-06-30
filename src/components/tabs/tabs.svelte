<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import TabItem from './tab-item.svelte';

  const dispatch = createEventDispatcher();

  export let options: {
    id: number;
    label: string;
  }[];
  export let activeTab = 0;
</script>

<div class="flex w-full flex-row overflow-x-scroll break-all px-container" role="tablist">
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
