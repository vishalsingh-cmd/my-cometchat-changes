<script lang="ts">
  // import PricingPayAsYouGoCard from './pricing/card/voice-and-video/pricing-pay-as-you-go-card.svelte';
  import PricingPayAsYouGoCardV2 from './pricing/card/voice-and-video/pricing-pay-as-you-go-card-v2.svelte';
  // import PricingFreeCard from './pricing/card/voice-and-video/pricing-free-card.svelte';
  import PricingFreeCardV2 from './pricing/card/voice-and-video/pricing-free-card-v2.svelte';
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementPayAsYouGoStoryblok,
    PricingPlanEnhancementContactUsStoryblok
  } from '$types/bloks';

  // import PricingContactUsCard from './pricing/card/voice-and-video/pricing-contact-us-card.svelte';
  import PricingContactUsCardV2 from './pricing/card/voice-and-video/pricing-contact-us-card-v2.svelte';

  export let block:
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementPayAsYouGoStoryblok
    | PricingPlanEnhancementContactUsStoryblok;
</script>

{#if block}
  {#if block.component === 'pricing-plan-enhancement-free'}
    <!-- <PricingFreeCard {block} /> -->
    <PricingFreeCardV2 {block} />
  {:else if block.component === 'pricing-plan-enhancement-pay-as-you-go'}
    <!-- <PricingPayAsYouGoCard {block} /> -->
    <PricingPayAsYouGoCardV2 {block} />
  {:else if block.component === 'pricing-plan-enhancement-contact-us'}
    <!-- <PricingContactUsCard {block} /> -->
    <PricingContactUsCardV2 {block} />
  {/if}
{/if}
