<script lang="ts">
  import AccordionGroup from '$components/accordion-group.svelte';
  import AccordionGroupPricing from '$components/accordion-group/accordion-group-pricing-enhanced/accordion-group-pricing.svelte';
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  // import PricingTableDataGroupEnhanced from './pricing-table-data-group-enhanced.svelte';

  export let activeTabIndex = 0;
  export let data: PricingTableGroupEnhancedStoryblok[];
  let openGroups = new Set([0]); // Set to track open group indexes
</script>

{#if data}
  <div class="flex grid-cols-6 flex-col lg:grid">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group, index}
        <!-- <PricingTableDataGroupEnhanced {group} {activeTabIndex} /> -->
        <AccordionGroupPricing {group} {index} {activeTabIndex} open={openGroups.has(index)} />
      {/each}
    </AccordionGroup>
  </div>
{/if}
