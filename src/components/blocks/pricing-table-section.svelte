<script lang="ts">
  import type {
    PricingTableCategoryEnhancedStoryblok,
    PricingTableRevampStoryblok,
    PricingTableSectionStoryblok
  } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import PricingTableEnhanced from './pricing-table-enhanced.svelte';
  import { activateTable, activePricingTab } from '$lib/stores/pricing-stores';
  import PricingTableRevamp from './pricing-table-revamp.svelte';
  import { onMount } from 'svelte';

  export let block: PricingTableSectionStoryblok;

  function activateTableIfrevamp() {
    if (block && block.pricing_table && isPricingTableRevampStoryblok(block.pricing_table[0])) {
      $activateTable = true;
    }
  }

  function isPricingTableEnhancedStoryblok(
    block: PricingTableCategoryEnhancedStoryblok | PricingTableRevampStoryblok
  ): block is PricingTableCategoryEnhancedStoryblok {
    return block && block.component === 'pricing-table-category-enhanced';
  }

  function isPricingTableRevampStoryblok(
    block: PricingTableCategoryEnhancedStoryblok | PricingTableRevampStoryblok
  ): block is PricingTableRevampStoryblok {
    return block && block.component === 'pricing-table-revamp';
  }

  export { isPricingTableEnhancedStoryblok, isPricingTableRevampStoryblok };
  onMount(() => {
    activateTableIfrevamp();
  });
</script>

{#if block}
  {@const { pricing_table } = block}
  {#if pricing_table}
    {#if isPricingTableEnhancedStoryblok(pricing_table[$activePricingTab])}
      <div use:storyblokEditable={block}>
        <PricingTableEnhanced block={pricing_table?.[$activePricingTab]?.category?.[0]} />
      </div>
    {:else if isPricingTableRevampStoryblok(pricing_table[$activePricingTab])}
      <PricingTableRevamp block={pricing_table?.[$activePricingTab]} />
    {/if}
  {/if}
{/if}
