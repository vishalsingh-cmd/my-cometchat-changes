<script lang="ts">
  import TabItem from './tab-item.svelte';

  let activeTabValue = 0;

  const handleClick = (tabValue: number) => () => {
    activeTabValue = tabValue;
  };

  export let options: {
    id: number;
    label: string;
    content: any;
  }[];
</script>

<div class="w-full">
  <div class="flex w-full flex-row break-all" role="tablist">
    {#each options as tab}
      <TabItem
        id={tab.id}
        on:click={handleClick(tab.id)}
        isActive={activeTabValue === tab.id}
        label={tab.label}
      />
    {/each}
  </div>

  <div
    class=""
    id="{activeTabValue}-tabitem"
    role="tabpanel"
    aria-labelledby="{activeTabValue}-tab"
  >
    {options[activeTabValue].content}
  </div>
</div>
