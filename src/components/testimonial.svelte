<script lang="ts">
  import type { TestimonialStoryblok } from '$types/bloks';

  import { getImageAttributes } from '$lib/storyblok';
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
      'relative z-10 flex flex-col-reverse gap-2 md:flex-row lg:static',
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
        class={cn('h-8 w-8 rounded-full md:h-12 md:w-12 md:self-end', flipHorizontal && 'self-end')}
      />
    {/if}

    <div
      class="flex max-w-sm flex-col rounded-2xl border border-gray-10/40 bg-gray-7/20 p-4 backdrop-blur-sm"
    >
      <p class="w-full text-lg/snug font-medium tracking-wide text-gray-12">
        {block.quote}
      </p>

      <div class="mt-3 flex items-center justify-between">
        <div>
          <p class="font-semibold-light text-md/snug tracking-wide text-gray-12">{block.name}</p>
          <p class="font-semibold-light mt-0.5 text-md/tight tracking-wide text-gray-12 opacity-74">
            {block.position}
          </p>
        </div>

        <Button variant="secondary"><Icon icon="arrow-narrow-right" size="sm" /></Button>
      </div>
    </div>
  </div>
{/if}
