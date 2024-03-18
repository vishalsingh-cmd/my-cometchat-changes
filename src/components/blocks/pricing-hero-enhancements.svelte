<script lang="ts">
  import type {
    PricingHeroEnhancementsStoryblok,
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementGrowStoryblok,
    PricingPlanEnhancementScaleStoryblok
  } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { typeIcon } from '$lib/storyblok';
  import Badge from '$components/badge.svelte';
  import Switch from '$components/switch.svelte';
  import Sticky from '$components/sticky.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Background from '$components/pricing/hero/background.svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  const getTypedPricingPlan = (
    story:
      | string
      | StoryblokStory<PricingPlanEnhancementFreeStoryblok>
      | StoryblokStory<PricingPlanEnhancementGrowStoryblok>
      | StoryblokStory<PricingPlanEnhancementScaleStoryblok>
  ) =>
    story as
      | StoryblokStory<PricingPlanEnhancementFreeStoryblok>
      | StoryblokStory<PricingPlanEnhancementGrowStoryblok>
      | StoryblokStory<PricingPlanEnhancementScaleStoryblok>;

  let isYearly = false;
  export let block: PricingHeroEnhancementsStoryblok;

  const typedPricingPlans = block.pricing_plans
    .map((pricingPlan) => getTypedPricingPlan(pricingPlan))
    .map((pricingPlan) => pricingPlan.content);
</script>

{#if block}
  <div>{JSON.stringify(block.plans[0])}</div>

  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="relative pt-[100px] md:pt-[148px]"
  >
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
      <Background />
    </div>
    <div>
      <div class="container z-10 mx-auto">
        <div
          class="container mx-auto mb-8 flex flex-col items-start justify-center gap-8 px-container md:items-center"
        >
          <div class="z-20 flex max-w-[528px] flex-col items-start gap-3 md:items-center md:gap-5">
            <h1 class="text-4xl">{block.title}</h1>
            <p class="text-xl font-medium tracking-wide opacity-74 md:text-center">
              {block.description}
            </p>
          </div>

          {#if block.info_items && block.info_items.length > 0}
            <div class="flex flex-wrap gap-8 gap-y-3">
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
      </div>
    </div>

    <div>
      <Sticky class="md:static">
        <div
          class="container z-10 mx-auto flex flex-col items-start gap-4 px-container pb-4 pt-4 md:items-center md:gap-8 md:pb-8"
        >
          <Switch bind:checked={isYearly}>
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
          <!-- 
          <PricingTierTabs
            class="flex items-start md:items-center md:justify-center"
            activeTab={activePricingTier}
            options={block.pricing_plans[0]}
            on:pricingTierSelected={(e) => (activePricingTier = e.detail.i)}
          /> -->
        </div>
      </Sticky>

      <div
        class="container mx-auto mb-12 mt-4 grid w-full grid-cols-1 gap-5 px-container sm:grid-cols-2 md:mt-8 md:gap-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div>{JSON.stringify(typedPricingPlans)}</div>
      </div>
    </div>
  </section>
{/if}
