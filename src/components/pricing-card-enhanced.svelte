<script lang="ts">
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementGrowStoryblok,
    PricingPlanEnhancementScaleStoryblok
  } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import Icon from './icon/icon.svelte';
  import Button from './buttons/button.svelte';
  import PricingRangeSlider from './PricingRangeSlider.svelte';
  import ToggleButton from './toggle-button.svelte';

  let currentGrowPrice = '149';
  // get current pricing plan it can be PrcingPlanEnhancementFreeStoryblok or PricingPlanEnhancementGrowStoryblok or PricingPlanEnhancementScaleStoryblok
  export const getPricingPlanName = (
    story:
      | PricingPlanEnhancementFreeStoryblok
      | PricingPlanEnhancementGrowStoryblok
      | PricingPlanEnhancementScaleStoryblok
  ) => {
    return story.name;
  };

  let isAnnual = false;
  export let price: string;
  export let priceLabel: string | null = null;
  export let block:
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementGrowStoryblok
    | PricingPlanEnhancementScaleStoryblok;

  let currentRangeValue = '500'; // initialize this with your default range value

  function updatePricing(rangeValue: string) {
    if (isAnnual) {
      if (rangeValue === '500') {
        currentGrowPrice = '139'; // update this to your annual price for 500
      } else if (rangeValue === '5000') {
        currentGrowPrice = '324'; // update this to your annual price for 5000
      } else if (rangeValue === '10000') {
        currentGrowPrice = '412'; // update this to your annual price for 10000
      } else if (rangeValue === '50000') {
        currentGrowPrice = 'Contact Us';
      } else if (rangeValue === '100000') {
        currentGrowPrice = 'Contact Us';
      }
    } else {
      if (rangeValue === '500') {
        currentGrowPrice = '149';
      } else if (rangeValue === '5000') {
        currentGrowPrice = '349';
      } else if (rangeValue === '10000') {
        currentGrowPrice = '449';
      } else if (rangeValue === '50000') {
        currentGrowPrice = 'Contact Us';
      } else if (rangeValue === '100000') {
        currentGrowPrice = 'Contact Us';
      }
    }
  }

  // get toggle event
  function handleToggle(event: CustomEvent<boolean>) {
    isAnnual = event.detail;
    updatePricing(currentRangeValue);
  }

  // get range event
  function handleRange(event: CustomEvent<string>) {
    currentRangeValue = event.detail;
    updatePricing(currentRangeValue);
  }
</script>

{#if block}
  {@const { name, price, description, highlights, cta } = block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'p-5 md:p-6',
      'w-full',
      'flex w-full flex-col justify-between',
      'rounded-3xl border border-brand-12/2',
      'bg-brand-12/[0.03] backdrop-blur-[30px]'
    )}
  >
    <div class={cn('flex flex-col gap-6')}>
      <div class={cn('flex flex-col gap-1 text-gray-12 md:gap-3')}>
        <div class="flow-row flex w-full items-center justify-between">
          <p class={cn('text-xl/tighter font-semibold opacity-74')}>
            {name}
          </p>

          {#if block.name === 'Grow'}
            <ToggleButton on:toggle={handleToggle} />
          {/if}
        </div>

        <div class={cn('text-2xl/tighter font-semibold')}>
          {#if price === 'Free'}
            Free
          {:else if price === 'Contact Us'}
            <span class="text-brand-9"> Contact Us </span>
          {:else}
            <div class="flex flex-row gap-2">
              {#if currentGrowPrice !== 'Contact Us'}
                ${currentGrowPrice}
                <p class="items-baseline text-lg/tight font-semibold opacity-54">/month</p>
              {:else}
                <span class="text-brand-9"> {currentGrowPrice} </span>
              {/if}
            </div>
          {/if}
        </div>

        <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>

        {#if block.name === 'Grow'}
          <PricingRangeSlider maus={block.mau} on:value={handleRange} />
        {/if}
      </div>

      <div class="flex flex-col gap-3">
        <p class="text-lg/tight font-semibold">Highlights</p>
        <div class="flex flex-col gap-2">
          {#each highlights as highlight}
            <div class="flex items-start gap-2">
              <Icon icon="star-04" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-brand-9" />
              <p class="text-lg/snug font-medium tracking-wide opacity-64">{highlight.value}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    {#if cta[0].link}
      {@const { href, target, rel } = getAnchorFromCmsLink(cta[0].link)}
      <Button
        as="a"
        variant={cta[0].variant}
        {href}
        {target}
        {rel}
        class="mt-5 w-full self-start md:mt-6 md:w-fit">{cta[0].label}</Button
      >
    {/if}
  </div>
{/if}

<!-- {#if block}
  <div use:storyblokEditable={block}>
    {#if currentPricingPlan === 'Free'}
      <h1>Free</h1>
    {:else if currentPricingPlan === 'Grow'}
      <h1>Grow</h1>
    {:else if currentPricingPlan === 'Scale'}
      <h1>Scale</h1>
    {:else}
      <h1>Unknown</h1>
    {/if}
  </div>
{/if} -->
