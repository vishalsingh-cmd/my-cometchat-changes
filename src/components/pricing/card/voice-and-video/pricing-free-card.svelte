<script lang="ts">
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type {
    PricingPlanEnhancementFreeStoryblok,
    PricingPlanEnhancementPayAsYouGoStoryblok,
    PricingPlanEnhancementContactUsStoryblok
  } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import Icon from '$components/icon/icon.svelte';
  import Button from '$components/buttons/button.svelte';

  export const getPricingPlanName = (
    story:
      | PricingPlanEnhancementFreeStoryblok
      | PricingPlanEnhancementPayAsYouGoStoryblok
      | PricingPlanEnhancementContactUsStoryblok
  ) => {
    return story.name;
  };

  export let block: PricingPlanEnhancementFreeStoryblok;
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
        <div class={cn('text-2xl/tighter font-semibold')}>Free</div>
      </div>

      <div class="flex flex-col gap-3">
        <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>

        {#if highlights?.length > 0}
          {#if name !== 'Pay-as-you-go'}
            <p class="mt-3 text-lg/tight font-semibold">Highlights</p>
          {/if}

          <div class="flex flex-col gap-2">
            {#if name === 'Pay-as-you-go'}
              {#each highlights as highlight}
                <div class="mt-2 flex flex-col items-start gap-2">
                  <p class="text-lg/snug font-semibold tracking-wide">
                    {highlight.price}
                    <span class="text-sm opacity-64">/user minutes</span>
                  </p>
                  <p class="text-lg/snug font-medium tracking-wide opacity-64">
                    {highlight.services}
                  </p>
                </div>
              {/each}
            {:else}
              {#each highlights as highlight}
                <div class="flex items-start gap-2">
                  <Icon icon="star-04" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-brand-9" />
                  <p class="text-lg/snug font-medium tracking-wide opacity-64">{highlight.value}</p>
                </div>
              {/each}
            {/if}
          </div>
        {/if}
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
