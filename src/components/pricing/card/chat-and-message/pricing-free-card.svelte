<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { PricingPlanEnhancementFreeStoryblok } from '$types/bloks';

  export let block: PricingPlanEnhancementFreeStoryblok;
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
        </div>

        <div class={cn('text-2xl/tighter font-semibold')}>{price}</div>
        <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>
      </div>

      {#if highlights?.length > 0}
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
      {/if}
    </div>

    {#if cta[0]?.link}
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
