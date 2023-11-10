<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { PricingHeroStoryblok, PricingPlanStoryblok } from '$types/bloks';

  import { typeIcon } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Badge from '$components/badge.svelte';
  import Switch from '$components/switch.svelte';
  import Sticky from '$components/sticky.svelte';
  import Icon from '$components/icon/icon.svelte';

  import PricingCard from '$components/pricing-card.svelte';
  import PricingTierTabs from '$components/pricing/pricing-tier-tabs.svelte';

  import Background from '$components/pricing/hero/background.svelte';

  const getTypedPricingPlan = (story: string | StoryblokStory<PricingPlanStoryblok>) =>
    story as StoryblokStory<PricingPlanStoryblok>;

  const pricingTiers = [
    { id: 0, label: 'Up to 1k MAUS' },
    { id: 1, label: 'Up to 10k' },
    { id: 2, label: 'Up to 25k' },
    { id: 3, label: 'Up to 50k' },
    { id: 4, label: '50k +' }
  ];

  export let block: PricingHeroStoryblok;
  let activePricingTier = 0;
  let isYearly = false;
</script>

{#if block}
  <section
    data-theme="dark"
    class="overflow-hidden pt-[100px] md:pt-[148px]"
    use:storyblokEditable={block}
  >
    <div class="container relative z-10 mx-auto">
      <Background />
      <div
        class="container mx-auto mb-8 flex flex-col items-start justify-center gap-6 px-container md:items-center md:gap-8"
      >
        <div class="z-20 flex max-w-[528px] flex-col items-start gap-3 md:items-center md:gap-5">
          <h1 class="text-4xl">{block.title}</h1>
          <p class="text-xl font-medium tracking-wide opacity-74 md:text-center">
            {block.description}
          </p>
        </div>

        {#if block.info_items && block.info_items.length > 0}
          <div class="flex flex-wrap gap-5 gap-y-3 md:gap-8">
            {#each block.info_items as { icon, name, description }}
              {@const typedIcon = typeIcon(icon)}
              <div class="flex items-center gap-2">
                <Icon icon={typedIcon} size="xs" class="flex-shrink-0 text-brand-9" />
                <div class="flex items-center gap-1">
                  <p class="text-lg/tigh font-semibold">{name}</p>
                  <p class="text-lg/snug font-medium tracking-wide opacity-74">{description}</p>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <Sticky>
        <div
          class="container z-10 mx-auto flex flex-col items-start gap-4 px-container pb-4 pt-4 md:items-center md:gap-8 md:pb-8"
        >
          <Switch bind:checked={isYearly} class="">
            <div slot="unchecked" class="flex items-center justify-center gap-1.5">
              Pay monthly
              {#if block.monthly_discount && block.monthly_discount > 0}
                <Badge label="- {block.monthly_discount}%" />
              {/if}
            </div>
            <div slot="checked" class="flex items-center justify-center gap-1.5">
              Pay yearly
              {#if block.yearly_discount && block.yearly_discount > 0}
                <Badge label="- {block.yearly_discount}%" />
              {/if}
            </div>
          </Switch>

          <PricingTierTabs
            class="flex items-start md:items-center md:justify-center"
            activeTab={activePricingTier}
            options={pricingTiers}
            on:pricingTierSelected={(e) => (activePricingTier = e.detail.i)}
          />
        </div>
      </Sticky>

      <div
        class="container mx-auto mb-12 mt-4 grid w-full grid-cols-1 gap-5 px-container sm:grid-cols-2 md:mt-8 md:gap-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        {#if block.pricing_plans && block.pricing_plans.length > 0}
          {#each block.pricing_plans as pricingPlan}
            {@const typedPricingPlan = getTypedPricingPlan(pricingPlan)}
            {@const {
              month_one_k_price,
              month_ten_k_price,
              month_twentyfive_k_price,
              month_fifty_k_price,
              month_fifty_k_plus_price,
              year_one_k_price,
              year_ten_k_price,
              year_twentyfive_k_price,
              year_fifty_k_price,
              year_fifty_k_plus_price
            } = typedPricingPlan.content}
            {@const monthAndYearPricings = [
              { monthly: month_one_k_price, yearly: year_one_k_price },
              { monthly: month_ten_k_price, yearly: year_ten_k_price },
              { monthly: month_twentyfive_k_price, yearly: year_twentyfive_k_price },
              { monthly: month_fifty_k_price, yearly: year_fifty_k_price },
              { monthly: month_fifty_k_plus_price, yearly: year_fifty_k_plus_price }
            ]}
            {@const price =
              monthAndYearPricings[activePricingTier][isYearly ? 'yearly' : 'monthly']}

            <PricingCard
              {price}
              block={typedPricingPlan.content}
              discount={isYearly ? block.yearly_discount : block.monthly_discount}
            />
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
