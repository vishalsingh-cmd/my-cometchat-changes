<script lang="ts">
  import type { PricingTableSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import PricingTableEnhanced from './pricing-table-enhanced.svelte';
  import { activePricingTab } from '$lib/stores/pricing-stores';

  export let block: PricingTableSectionStoryblok;
</script>

{#if block}
  {@const { pricing_table } = block}

  <div use:storyblokEditable={block}>
    <PricingTableEnhanced block={pricing_table?.[$activePricingTab]?.category?.[0]} />
  </div>
{/if}
