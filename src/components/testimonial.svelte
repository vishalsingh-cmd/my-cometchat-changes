<script lang="ts">
  import type { TestimonialStoryblok } from '$types/bloks';

  import { getAnchorFromCmsLink, getImageAttributes } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';
  import { cn } from '$lib/utils';

  export let block: TestimonialStoryblok;
  export let flipHorizontal: boolean;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'relative z-10 flex flex-col-reverse gap-2 md:flex-row md:items-end lg:static',
      flipHorizontal && 'md:flex-row-reverse',
      $$restProps.class
    )}
  >
    {#if block.avatar}
      {@const { src, alt, width, height } = getImageAttributes(block.avatar, {
        size: [48, 48]
      })}
      <img
        {src}
        {alt}
        {width}
        {height}
        class={cn('h-8 w-8 rounded-full md:h-12 md:w-12', flipHorizontal && 'self-end')}
      />
    {/if}

    <div
      class="bg-gray-12/2 flex max-w-sm flex-col rounded-2xl border border-gray-12/5 p-4 text-gray-12 backdrop-blur-sm"
    >
      <p class="text-lg/snug font-medium tracking-wide">
        &quot;{block.quote}&quot;
      </p>

      <div class="mt-3 flex items-center justify-between text-md/tight">
        <div>
          <p class=" font-semibold tracking-wide">{block.name}</p>
          <p class="text-[rgba(20, 19, 29, 1)] mt-0.5 font-semibold tracking-wide opacity-74">
            {block.position}
          </p>
        </div>

        {#if block.link}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.link)}
          <Button variant="secondary" size="sm" as="a" {rel} {target} {href}>
            <Icon icon="arrow-narrow-right" size="xs" />
          </Button>
        {/if}
      </div>
    </div>
  </div>
{/if}
