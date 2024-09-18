<script lang="ts">
  // import PricingRangeSlider from '$components/pricing-range-slider.svelte';
  import Button from '$components/buttons/button.svelte';
  import Divider from '$components/divider.svelte';
  import Icon from '$components/icon/icon.svelte';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  // import ToggleButton from '$components/toggle-button.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { PricingHeroQ3Y24CardV1Storyblok } from '$types/bloks';
  // import { isStringContainOnlyNumbers } from '$lib/strings/utils';

  // let isAnnual = true;
  // let currentGrowPrice = '';
  // let currentRangeValue = ''; // initialize this with your default range value
  // let currentRangeIndex = 0;
  export let block: PricingHeroQ3Y24CardV1Storyblok;
  export let price = '$124';
  // console.log('PricingHeroQ3Y24CardV1Storyblok', block);

  // function updatePricingFromBlock(rangeValue: string) {
  //   for (let i = 0; i < (block.plans ?? []).length; i++) {
  //     if (rangeValue === (block.plans ?? [])[i]?.mau) {
  //       currentGrowPrice = isAnnual ? block.plans[i].yearly : block.plans[i].monthly;
  //       break;
  //     }
  //   }
  // }

  // get toggle event
  // function handleToggle(event: CustomEvent<boolean>) {
  //   isAnnual = event.detail;
  //   updatePricingFromBlock(currentRangeValue);
  // }

  // // get range event
  // function handleRange(event: CustomEvent<string>) {
  //   currentRangeValue = event.detail;
  //   currentRangeIndex = block.plans.findIndex((plan) => plan.mau === currentRangeValue);
  //   updatePricingFromBlock(currentRangeValue);
  // }

  // update the price when the block is loaded using the default range index
  // onMount(() => {
  //   if (block?.plans?.length > 0) {
  //     currentGrowPrice = isAnnual
  //       ? block.plans[currentRangeIndex].yearly
  //       : block.plans[currentRangeIndex].monthly;
  //   }
  // });

  // $: isAnnual
  //   ? (currentGrowPrice = block.plans[currentRangeIndex].yearly)
  //   : (currentGrowPrice = block.plans[currentRangeIndex].monthly);
</script>

{#if block}
  {@const { name, description, highlights, cta, advantages, custom_price } = block}
  <div
    class={cn(
      'p-5 md:p-6',
      'w-full',
      'flex w-full flex-col justify-between',
      'rounded-3xl border border-brand-12/2',
      'bg-brand-12/[0.03] backdrop-blur-[30px]'
    )}
  >
    <div class={cn('flex flex-col')}>
      <div class={cn('flex flex-col text-gray-12')}>
        <div class="flow-row flex w-full items-center justify-between">
          <p class={cn('text-xl/tighter font-semibold')}>
            {name}
          </p>
        </div>
        {#if description}
          {#if typeof description != 'string' && description.content}
            {#each description.content as content}
              <p
                class={cn(paragraph, 'mt-3 h-14 text-sm/snug font-medium tracking-wide opacity-64')}
              >
                {@html resolver.render(content)}
              </p>
            {/each}
            <!-- {:else}
            <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p> -->
          {/if}
        {/if}
        <div class={cn('mb-8 mt-14 flex flex-col gap-2 text-2xl/tighter font-semibold')}>
          <p class="text-2xl/snug font-semibold tracking-wide">
            {#if custom_price}
              {custom_price}
            {:else if price}
              {price}
            {/if}
            <span class="-ml-1.5 text-md/snug font-medium opacity-64">/month</span>
          </p>
          <p class="text-md/snug font-medium opacity-64">
            {custom_price ? 'Free Forever' : 'Billed annually'}
          </p>
        </div>

        {#if cta[0].link}
          {@const { href, target, rel } = getAnchorFromCmsLink(cta[0].link)}
          <Button
            as="a"
            variant={cta[0].variant}
            {href}
            {target}
            {rel}
            class="w-full self-start md:w-fit">{cta[0].label}</Button
          >
        {/if}
        <!-- <PricingRangeSlider maus={block.plans} on:value={handleRange} /> -->
      </div>

      {#if highlights?.length > 0}
        <div class="mt-10 flex flex-col gap-2">
          {#each highlights as highlight, index}
            <div class="flex items-start gap-2">
              {#if index !== 0}
                <Icon icon="star-04" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-brand-9" />
              {/if}
              {#if typeof highlight.value != 'string' && highlight?.value?.content}
                {#each highlight.value.content as content}
                  <!-- <p class="text-lg/tight font-semibold">Highlights</p> -->
                  <p
                    class={cn(
                      paragraph,
                      index == 0 && 'mb-1 text-lg/tight font-semibold',
                      index !== 0 && 'text-md/snug font-medium tracking-wide opacity-80 '
                    )}
                  >
                    {@html resolver.render(content)}
                  </p>
                {/each}
              {/if}
            </div>
          {/each}
        </div>
      {/if}
      {#if advantages?.length > 0}
        <Divider class="my-4" />
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-2">
            {#each advantages as advantage}
              <div class="flex items-start gap-2">
                <Icon icon="check" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-orange-9" />
                {#if typeof advantage.value != 'string' && advantage?.value?.content}
                  {#each advantage.value.content as content}
                    <p class={cn(paragraph, 'text-md/snug font-medium tracking-wide opacity-80')}>
                      {@html resolver.render(content)}
                    </p>
                  {/each}
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
