<script lang="ts">
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { PricingPlanEnhancementContactUsStoryblok } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import Icon from '$components/icon/icon.svelte';
  import Button from '$components/buttons/button.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';

  export let block: PricingPlanEnhancementContactUsStoryblok;
</script>

{#if block}
  {@const { name, description, highlights, cta } = block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'p-5 md:p-6',
      'w-full',
      'flex w-full flex-col justify-between',
      'rounded-3xl border border-gray-12/[0.1]',
      ' backdrop-blur-[30px]'
    )}
    style="background: linear-gradient(0deg, rgba(250, 250, 255, 0.04) 0%, rgba(250, 250, 255, 0.04) 100%), #0A0914;"
  >
    <div class={cn('flex flex-col gap-[64px]')}>
      <div class={cn('flex flex-col gap-1 text-gray-12 md:gap-3')}>
        <div class={cn('text-2xl/tighter font-semibold')}>
          <span class="text-brand-9"> {name} </span>
        </div>
        <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>
      </div>

      <div class="flex flex-col gap-[24px]">
        <div class="flex-start flex flex-col gap-3">
          {#if highlights?.length > 0}
            <h3 class=" text-lg/tight font-semibold">Highlights</h3>

            <div class="flex flex-col gap-2">
              {#each highlights as highlight}
                <div class="flex items-start gap-2">
                  <Icon icon="star-04" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-brand-9" />
                  {#if highlight.value}
                    {#if typeof highlight.value != 'string' && highlight.value.content}
                      {#each highlight.value.content as content}
                        <p
                          class={cn(paragraph, 'text-lg/snug font-medium tracking-wide opacity-64')}
                        >
                          {@html resolver.render(content)}
                        </p>
                      {/each}
                    {:else}
                      <p class="text-lg/snug font-medium tracking-wide opacity-64">
                        {highlight.value}
                      </p>
                    {/if}
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
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
    </div>
  </div>
{/if}
