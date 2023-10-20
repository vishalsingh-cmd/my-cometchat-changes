<script lang="ts">
  // import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { PricingHeroStoryblok, PricingPlanStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Icon from '$components/icon/icon.svelte';
  import Switch from '$components/switch.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  import PricingTierTabs from '$components/pricing/pricing-tier-tabs.svelte';
  import Badge from '$components/badge.svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import PricingCard from '$components/pricing-card.svelte';
  // import Button from '$components/buttons/button.svelte';
  // import Background from '$components/pre-footer/background.svelte';

  const typeIcon = (icon: string | number) => {
    return icon as string;
  };

  let selected = 0;

  export let block: PricingHeroStoryblok;

  const getPricingPlan = (story: string | StoryblokStory<PricingPlanStoryblok>) =>
    story as StoryblokStory<PricingPlanStoryblok>;

  const pricingTiers = [
    { id: 0, label: 'Up to 1k MAUS', tier_key: 'one_k_price' },
    { id: 1, label: 'Up to 10k', tier_key: 'ten_k_price' },
    { id: 2, label: 'Up to 25k', tier_key: 'twentyfive_k_price' },
    { id: 3, label: 'Up to 50k', tier_key: 'fifty_k_price' },
    { id: 4, label: '50k +', tier_key: 'fifty_k_plus_price' }
  ];

  $: activePricingTier = 0;
  let isYearly = false;
</script>

{#if block}
  <section data-theme="dark" class="isolate overflow-hidden" use:storyblokEditable={block}>
    <div class="container relative mx-auto bg-gray-1 px-container">
      <div class="flex flex-col items-center justify-center gap-8">
        <div class="mt-[148px] flex max-w-[528px] flex-col items-center gap-3 md:gap-5">
          <h1 class="text-4xl">{block.title}</h1>
          <p class="text-center text-xl font-normal">{block.description}</p>
        </div>

        {#if block.info_items && block.info_items.length > 0}
          <!-- content here -->
          <div class="flex gap-8">
            {#each block.info_items as { icon, name, description }}
              {@const typedIcon = typeIcon(icon)}
              <div class="flex items-center gap-2">
                <Icon icon={typedIcon} size="xs" class="flex-shrink-0 text-brand-9" />
                <div class="flex items-center gap-1">
                  <p>{name}</p>
                  <p>{description}</p>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <div class="flex flex-col items-center justify-center gap-8 pt-20">
        <Switch bind:checked={isYearly}>
          <div slot="unchecked">Pay monthly</div>
          <div slot="checked" class="flex items-center justify-center gap-1.5">
            Pay yearly
            <Badge label="- 10%" />
          </div>
        </Switch>

        <PricingTierTabs
          class="flex items-center justify-center"
          activeTab={activePricingTier}
          options={pricingTiers}
          on:pricingTierSelected={(e) => (activePricingTier = e.detail.i)}
        />
      </div>

      <div class="mt-16 flex w-full justify-between">
        {#if block.pricing_plans && block.pricing_plans.length > 0}
          {#each block.pricing_plans as pricingPlan}
            {@const typedPricingPlan = getPricingPlan(pricingPlan)}
            {@const {
              cta,
              highlights,
              name,
              one_k_price,
              ten_k_price,
              twentyfive_k_price,
              fifty_k_price,
              fifty_k_plus_price
            } = typedPricingPlan.content}
            {@const parsedPrice = pricingTiers[activePricingTier].tier_key}
            <!-- {console.log(parsedPrice)} -->
            {@const currentPrice =
              pricingTiers[activePricingTier].id == 0
                ? one_k_price
                : 0 || pricingTiers[activePricingTier].id == 1
                ? ten_k_price
                : 0 || pricingTiers[activePricingTier].id == 2
                ? twentyfive_k_price
                : 0 || pricingTiers[activePricingTier].id == 3
                ? fifty_k_price
                : 0 || pricingTiers[activePricingTier].id == 4
                ? fifty_k_plus_price
                : 0}

            <PricingCard {name} price={currentPrice} {highlights} cta={cta[0]} />
          {/each}
        {/if}
      </div>

      <!-- <Background /> -->
    </div>
  </section>
{/if}
