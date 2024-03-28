<script lang="ts">
  import PricingPayAsYouGoCard from './pricing/card/voice-and-video/pricing-pay-as-you-go-card.svelte';
  import PricingFreeCard from './pricing/card/voice-and-video/pricing-free-card.svelte';
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementPayAsYouGoStoryblok,
    PricingPlanEnhancementContactUsStoryblok
  } from '$types/bloks';

  import PricingContactUsCard from './pricing/card/voice-and-video/pricing-contact-us-card.svelte';

  export let block:
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementPayAsYouGoStoryblok
    | PricingPlanEnhancementContactUsStoryblok;
</script>

{#if block}
  {#if block.component === 'pricing-plan-enhancement-free'}
    <PricingFreeCard {block} />
  {:else if block.component === 'pricing-plan-enhancement-pay-as-you-go'}
    <PricingPayAsYouGoCard {block} />
  {:else if block.component === 'pricing-plan-enhancement-contact-us'}
    <PricingContactUsCard {block} />
  {/if}
{/if}
