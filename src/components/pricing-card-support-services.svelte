<script lang="ts">
  import PricingFreeCard from './pricing/card/chat-and-message/pricing-free-card.svelte';
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementContactUsStoryblok,
    PricingPlanEnhancementGrowStoryblok
  } from '$types/bloks';

  import PricingGrowCard from './pricing/card/pricing-grow-card.svelte';

  export let block:
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementGrowStoryblok
    | PricingPlanEnhancementContactUsStoryblok;
</script>

{#if block}
  {#if block.component === 'pricing-plan-enhancement-free'}
    <PricingFreeCard {block} />
  {:else if block.component === 'pricing-plan-enhancement-grow'}
    <PricingGrowCard {block} />
  {/if}
{/if}
