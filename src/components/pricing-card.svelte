<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { ButtonLinkStoryblok, PricingPlanStoryblok, TextStoryblok } from '$types/bloks';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';

  export let name: string;
  export let price: number;
  export let discount: number | undefined = undefined;
  export let highlights: TextStoryblok[];
  export let cta: ButtonLinkStoryblok;

  function getDiscount(initialValue: number, discountPercentage: number) {
    if (initialValue < 1) return 0;
    return (initialValue - (initialValue * discountPercentage) / 100).toFixed(0);
  }

  export let block: PricingPlanStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class="w-full rounded-3xl border border-brand-12/2 bg-brand-12/[0.03] p-5 backdrop-blur-[30px] md:p-6 xl:max-w-[304px]"
  >
    <div class="flex flex-col gap-1 text-gray-12 md:gap-3">
      <p class="text-xl/tighter font-semibold opacity-74">{name}</p>
      <span class="text-2xl/tighter font-semibold">
        {#if price == 0}
          Free
        {:else}
          &#36;{discount ? getDiscount(price, discount) : price}
        {/if}
      </span>
    </div>

    <div class="mt-5 flex flex-col gap-3 md:mt-16">
      <p class="text-lg/tight font-semibold">Highlights</p>
      <div class="flex flex-col gap-2">
        {#each highlights as highlight}
          <div class="flex items-center gap-2">
            <Icon icon="star-04" class="h-3.5 w-3.5 text-brand-9" />
            <p class="text-lg/snug font-medium tracking-wide">{highlight.value}</p>
          </div>
        {/each}
      </div>
    </div>
    {#if cta.link}
      {@const { href, target, rel } = getAnchorFromCmsLink(cta.link)}
      <Button
        as="a"
        variant={cta.variant}
        {href}
        {target}
        {rel}
        class="mt-5 w-full self-start md:mt-6 md:w-fit">{cta.label}</Button
      >
    {/if}
  </div>
{/if}
