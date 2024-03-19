<script lang="ts">
  import Tabs from '$components/tabs/tabs.svelte';
  import type { PricingTableHeaderEnhancedStoryblok } from '$types/bloks';
  import pricingTiersCurrentPrice from '$lib/stores/pricing-tiers-current-price';
  import PricingTableHeaderColumn from '$components/pricing/enhanced/pricing-table-header-column-enhanced.svelte';
  import PricingTableHeaderCaptionsEnhanced from '$components/pricing/enhanced/pricing-table-header-captions-enhanced.svelte';

  export let activeTab = 0;
  export let header: PricingTableHeaderEnhancedStoryblok[];
</script>

{#if header}
  {@const parsedTabs = header.map(({ title }, i) => ({
    id: i,
    label: title
  }))}
  <!-- Desktop -->
  <div class="hidden w-full grid-cols-6 gap-10 border-b border-gray-12/8 bg-gray-1 lg:grid">
    <PricingTableHeaderCaptionsEnhanced />
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
    <PricingTableHeaderCaptionsEnhanced />
  </div>
{/if}
