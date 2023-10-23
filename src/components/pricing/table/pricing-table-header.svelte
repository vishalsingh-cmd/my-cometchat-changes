<script lang="ts">
  import Tabs from '$components/tabs/tabs.svelte';
  import type { PricingTableHeaderColumnStoryblok } from '$types/bloks';
  import PricingTableHeaderCaptions from './pricing-table-header-captions.svelte';

  import PricingTableHeaderColumn from './pricing-table-header-column.svelte';

  export let activeTab = 0;
  export let header: PricingTableHeaderColumnStoryblok[];
</script>

{#if header}
  {@const parsedTabs = header.map(({ title }, i) => ({
    id: i,
    label: title
  }))}
  <!-- Descktop -->
  <div class="hidden w-full grid-cols-4 gap-10 border-b border-gray-12/[.08] lg:grid">
    <PricingTableHeaderCaptions />
    {#if header.length > 0}
      {#each header as column}
        <PricingTableHeaderColumn {column} />
      {/each}
    {/if}
  </div>

  <!-- Mobile -->
  <div class="flex flex-col lg:hidden">
    <Tabs
      options={parsedTabs}
      {activeTab}
      on:optionSelect={(e) => (activeTab = e.detail.i)}
      class="mx-0 pl-0 pr-0"
    />
    <PricingTableHeaderCaptions />
  </div>
{/if}
