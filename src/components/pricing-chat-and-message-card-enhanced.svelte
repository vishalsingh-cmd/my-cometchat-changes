<script lang="ts">
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementGrowStoryblok,
    PricingPlanEnhancementScaleStoryblok
  } from '$types/bloks';
  import PricingFreeCard from './pricing/card/pricing-free-card.svelte';
  import PricingGrowCard from './pricing/card/pricing-grow-card.svelte';
  import PricingScaleCard from './pricing/card/pricing-scale-card.svelte';

  export const getPricingPlanName = (
    story:
      | PricingPlanEnhancementFreeStoryblok
      | PricingPlanEnhancementGrowStoryblok
      | PricingPlanEnhancementScaleStoryblok
  ) => {
    return story.name;
  };

  export let block:
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementGrowStoryblok
    | PricingPlanEnhancementScaleStoryblok;
</script>

{#if block}
  {#if block.component === 'pricing-plan-enhancement-free'}
    <PricingFreeCard {block} />
  {:else if block.component === 'pricing-plan-enhancement-grow'}
    <PricingGrowCard {block} />
  {:else if block.component === 'pricing-plan-enhancement-scale'}
    <PricingScaleCard {block} />
  {/if}
{/if}
