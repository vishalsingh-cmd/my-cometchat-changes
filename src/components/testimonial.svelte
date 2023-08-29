<script lang="ts">
  import type { TestimonialStoryblok } from '$types/bloks';

  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';
  import Media from './media.svelte';

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
      <Media
        imageTransformOptions={{ size: [200, 0] }}
        media={block.avatar}
        class={cn('h-8 w-8 rounded-full md:h-12 md:w-12', flipHorizontal && 'self-end')}
      />
    {/if}

    <div
      data-theme="dark"
      class="flex w-full max-w-sm flex-col rounded-2xl border border-gray-2/[0.04] bg-gray-1/[0.02] p-4 backdrop-blur-[10px]"
      style="transform: translate3d(0, 0, 0);"
    >
      <p data-theme="light" class="text-lg/snug font-medium tracking-wide text-gray-12">
        &quot;{block.quote}&quot;
      </p>

      <div
        data-theme="light"
        class="mt-3 flex items-center justify-between text-md/tight text-gray-12"
      >
        <div>
          <p class=" font-semibold tracking-wide">{block.name}</p>
          <p data-theme="light" class="mt-0.5 font-semibold tracking-wide opacity-74">
            {block.position}
          </p>
        </div>

        {#if block.link}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.link)}
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
      </div>
    </div>
  </div>
{/if}
