<script lang="ts">
  import Tabs from '$components/tabs/tabs.svelte';
  import type { PricingTableHeaderColumnStoryblok } from '$types/bloks';

  import pricingTiersCurrentPrice from '$lib/stores/pricing-tiers-current-price';

  import PricingTableHeaderColumn from '$components/pricing/table//pricing-table-header-column.svelte';
  import PricingTableHeaderCaptions from '$components/pricing/table/pricing-table-header-captions.svelte';

  export let activeTab = 0;
  export let header: PricingTableHeaderColumnStoryblok[];
</script>

{#if header}
  {@const parsedTabs = header.map(({ title }, i) => ({
    id: i,
    label: title
  }))}
  <!-- Desktop -->
  <div class="hidden w-full grid-cols-4 gap-10 border-b border-gray-12/8 bg-gray-1 lg:grid">
    <PricingTableHeaderCaptions />
    {#if header.length > 0}
      {#each header as column, i}
        <PricingTableHeaderColumn price={$pricingTiersCurrentPrice[i + 1]} {column} />
      {/each}
    {/if}
  </div>

  <!-- Mobile -->
  <div class="flex flex-col bg-gray-1 lg:hidden">
    <Tabs
      {activeTab}
      options={parsedTabs}
      class="mx-0 pl-0 pr-0"
      on:optionSelect={(e) => (activeTab = e.detail.i)}
    />
    <PricingTableHeaderCaptions />
  </div>
{/if}
