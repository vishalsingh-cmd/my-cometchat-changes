<script lang="ts">
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { PricingPlanEnhancementPayAsYouGoStoryblok } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import Button from '$components/buttons/button.svelte';

  export let block: PricingPlanEnhancementPayAsYouGoStoryblok;
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
        <div class={cn('text-2xl/tighter font-semibold')}>
          <span class="text-brand-9"> {name} </span>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>

        <h3 class="mt-3 text-lg/tight font-semibold">Highlights</h3>

        <div class="flex flex-col gap-2">
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
