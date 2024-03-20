<script lang="ts">
  import AccordionGroup from '$components/accordion-group.svelte';
  import Accordion from '$components/accordion.svelte';
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  import PricingTableDataGroup from './pricing-table-data-group-enhanced.svelte';

  export let activeTab = 0;
  export let data: PricingTableGroupEnhancedStoryblok[];
  // $: selectedTabName = (['grow', 'scale'] as const)[activeTab];
</script>

{#if data}
  <!-- Descktop -->
  <div class="flex grid-cols-6 flex-col lg:grid">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group, i}
        <PricingTableDataGroup {group} />
      {/each}
    </AccordionGroup>
  </div>

  <!-- Mobile -->
  <div class="flex grid-cols-6 flex-col lg:hidden">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group, i}
        <Accordion title={group.title} expanded={i === activeTab}>
          <PricingTableDataGroup {group} />
        </Accordion>
      {/each}
    </AccordionGroup>
  </div>
{/if}
