<script lang="ts">
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementGrowStoryblok,
    PricingPlanEnhancementScaleStoryblok
  } from '$types/bloks';
  export let pricingPlan: string;
  export let price: string | number;
  export let priceLabel: string | null = null;
  export let block:
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementGrowStoryblok
    | PricingPlanEnhancementScaleStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'p-5 md:p-6',
      'w-full',
      'flex flex-col justify-between',
      'rounded-3xl border border-brand-12/2',
      'bg-brand-12/[0.03] backdrop-blur-[30px]'
    )}
  >
    {#if pricingPlan === 'pricing-plan-enhancement-free'}
      <h1 class="bg-red-9">free plan</h1>
      <p>{block.name}</p>
      <p>{block.price}</p>
    {:else if pricingPlan === 'pricing-plan-enhancement-grow'}
      <h1 class="bg-red-9">grow plan</h1>
    {:else if pricingPlan === 'pricing-plan-enhancement-scale'}
      <h1 class="bg-red-9">scale plan</h1>
    {/if}
  </div>
{/if}

<!-- 
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
              {#if typeof price === 'number'}
                {#if Number(price) == 0}
                  Free
                {:else}
                  &#36;{Number(price).toLocaleString()}
                {/if}
              {:else}
                {price}
              {/if}
            </span>
            {#if isPricingBeta}
              <p class="text-lg/tight font-semibold opacity-54">
                {string('pricing.beta_price_caption')}
              </p>
            {:else if typeof price === 'number' && priceLabel && price != 0}
              <p class="text-lg/tight font-semibold opacity-54">{priceLabel}</p>
            {/if}
          </div>
        </div>
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
{/if} -->
