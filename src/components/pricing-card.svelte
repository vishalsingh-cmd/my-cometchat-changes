<script lang="ts">
  import type { PricingBetaPlanStoryblok, PricingPlanStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Icon from './icon/icon.svelte';
  import Button from './buttons/button.svelte';

  export const isPricingBetaPlan = (story: PricingBetaPlanStoryblok | PricingPlanStoryblok) => {
    return story.component === 'pricing-beta-plan';
  };

  export let price: number;
  export let block: PricingPlanStoryblok | PricingBetaPlanStoryblok;

  let isPricingBeta = isPricingBetaPlan(block);
</script>

{#if block}
  {@const { name, price_label, highlights, cta } = block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'p-5 md:p-6',
      'w-full',
      !isPricingBeta && 'md:max-w-[304px]',
      'flex flex-col justify-between',
      'rounded-3xl border border-brand-12/2',
      'bg-brand-12/[0.03] backdrop-blur-[30px]'
    )}
  >
    <div class={cn('flex flex-col gap-5 md:gap-16', isPricingBeta && 'gap-8 md:gap-8')}>
      <div
        class={cn('flex flex-col gap-1 text-gray-12 md:gap-3', isPricingBeta && 'gap-5 md:gap-8')}
      >
        <p class={cn('text-xl/tighter font-semibold opacity-74', isPricingBeta && 'opacity-100')}>
          {name}
        </p>
        <div class={cn('flex flex-col gap-1 md:gap-2')}>
          {#if isPricingBeta && price_label}
            <p class="text-lg/tight font-semibold opacity-54">{price_label}</p>
          {/if}
          <div class="flex h-full items-end gap-1">
            <span class={cn('text-2xl/tighter font-semibold', isPricingBeta && 'text-3xl/tighter')}>
              {#if price == 0}
                Free
              {:else}
                &#36;{price}
              {/if}
            </span>
            {#if isPricingBeta}
              <p class="text-lg/tight font-semibold opacity-54">
                {string('pricing.beta_price_caption')}
              </p>
            {/if}
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <p class="text-lg/tight font-semibold">Highlights</p>
        <div class="flex flex-col gap-2">
          {#each highlights as highlight}
            <div class="flex items-center gap-2">
              <Icon icon="star-04" class="h-3.5 w-3.5 text-brand-9" />
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
