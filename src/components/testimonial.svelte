<script lang="ts">
  import type { TestimonialStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Media from './media.svelte';
  import Icon from './icon/icon.svelte';
  import Button from './buttons/button.svelte';
  import ClickableBadge from '$components/clickable-badge.svelte';

  export let flipHorizontal: boolean;

  export let block: TestimonialStoryblok;
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
      <Media
        imageTransformOptions={{ size: [200, 0] }}
        media={block.avatar}
        class={cn('h-8 w-8 rounded-full md:h-12 md:w-12', flipHorizontal && 'self-end')}
      />
    {/if}

    <div
      data-theme="dark"
      class="flex w-full max-w-sm flex-col rounded-2xl border border-gray-2/[0.04] bg-gray-1/2 p-4 backdrop-blur-[10px]"
      style="transform: translate3d(0, 0, 0);"
    >
      <p data-theme="light" class="text-lg/snug font-medium tracking-wide text-gray-12">
        &quot;{block.quote}&quot;
      </p>

      <div
        data-theme="light"
        class={cn(
          'mt-3 flex items-end justify-between gap-4 text-md/tight text-gray-12',
          block.g2_review && 'flex-col items-start gap-3 md:flex-row md:items-end md:gap-0'
        )}
      >
        <div>
          <p class="font-semibold tracking-wide">{block.name}</p>
          <p data-theme="light" class="mt-0.5 font-semibold tracking-wide opacity-74">
            {block.position}
          </p>
        </div>

        {#if block.link && !block.g2_review}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.link)}
          {#if href}
            <Button
              aria-label="Link to {block.name} testimonial"
              variant="secondary"
              size="sm"
              as="a"
              {rel}
              {target}
              {href}
            >
              <Icon icon="arrow-narrow-right" size="xs" class="opacity-80" />
            </Button>
          {/if}
        {/if}

        {#if block.g2_review}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.link)}
          <ClickableBadge {href} {target} {rel} review={block.g2_review} />
        {/if}
      </div>
    </div>
  </div>
{/if}
