<script lang="ts">
  import PricingRangeSlider from '$components/pricing-range-slider.svelte';
  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import ToggleButton from '$components/toggle-button.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { PricingPlanEnhancementGrowStoryblok } from '$types/bloks';
  import { isStringContainOnlyNumbers } from '$lib/strings/utils';
  import { onMount } from 'svelte';

  let isAnnual = false;
  let currentGrowPrice = '';
  let currentRangeValue = ''; // initialize this with your default range value
  let currentRangeIndex = 0;
  export let block: PricingPlanEnhancementGrowStoryblok;

  function updatePricingFromBlock(rangeValue: string) {
    for (let i = 0; i < block.plans.length; i++) {
      if (rangeValue === block.plans[i].mau) {
        currentGrowPrice = isAnnual ? block.plans[i].yearly : block.plans[i].monthly;
        break;
      }
    }
  }

  // get toggle event
  function handleToggle(event: CustomEvent<boolean>) {
    isAnnual = event.detail;
    updatePricingFromBlock(currentRangeValue);
  }

  // get range event
  function handleRange(event: CustomEvent<string>) {
    currentRangeValue = event.detail;
    updatePricingFromBlock(currentRangeValue);
  }

  // update the price when the block is loaded using the default range index
  onMount(() => {
    if (block?.plans?.length > 0) {
      currentGrowPrice = block?.plans[currentRangeIndex].monthly;
    }
  });

  $: isAnnual
    ? (currentGrowPrice = block.plans[currentRangeIndex].yearly)
    : (currentGrowPrice = block.plans[currentRangeIndex].monthly);
</script>

{#if block}
  {@const { name, description, highlights, cta } = block}
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

          <ToggleButton on:toggle={handleToggle} />
        </div>

        <div class={cn('text-2xl/tighter font-semibold')}>
          <div class="flex flex-row gap-2">
            {#if isStringContainOnlyNumbers(currentGrowPrice)}
              <p class="tracking-wid text-2xl/snug font-semibold">
                ${currentGrowPrice}
                <span class="text-sm opacity-64">/month</span>
              </p>
            {:else}
              <span class="text-brand-9">{currentGrowPrice} </span>
            {/if}
          </div>
        </div>

        <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>

        <PricingRangeSlider maus={block.plans} on:value={handleRange} />
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
