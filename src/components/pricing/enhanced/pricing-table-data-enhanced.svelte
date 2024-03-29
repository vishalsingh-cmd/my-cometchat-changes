<script lang="ts">
  import AccordionGroup from '$components/accordion-group.svelte';
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  import PricingTableDataGroupEnhanced from './pricing-table-data-group-enhanced.svelte';

  export let activeTabIndex = 0;
  export let data: PricingTableGroupEnhancedStoryblok[];
</script>

{#if data}
  <div class="flex grid-cols-6 flex-col lg:grid">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group}
        <PricingTableDataGroupEnhanced {group} {activeTabIndex} />
      {/each}
    </AccordionGroup>
  </div>
{/if}
