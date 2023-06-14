<script lang="ts">
  import type { TestimonialStoryblok } from '$types/bloks';

  import { getImageAttributes } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';
  import { cn } from '$lib/utils';

  export let block: TestimonialStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    data-theme="light"
    class={cn(
      'relative z-10 flex flex-col-reverse gap-2  md:flex-row lg:static',
      block.avatar_position == 'right' && 'md:flex-row-reverse',
      $$restProps.class
    )}
  >
    <img
      src={getImageAttributes(block.avatar).src}
      alt={getImageAttributes(block.avatar).alt}
      class={cn(
        'h-8 w-8 rounded-full sm:h-12 sm:w-12 md:self-end',
        block.avatar_position == 'right' && 'self-end'
      )}
    />

    <div
      class="flex max-w-sm flex-col rounded-2xl border border-gray-10/40 bg-gray-7/20 p-4 backdrop-blur-sm"
    >
      <p class="w-full text-lg/snug font-medium tracking-wide text-gray-12">
        {block.quote}
      </p>

      <div class="mt-3 flex items-center justify-between">
        <div>
          <p class="text-md/snug font-semibold-light tracking-wide text-gray-12">{block.name}</p>
          <p class="mt-0.5 text-md/tight font-semibold-light tracking-wide text-gray-12 opacity-74">
            {block.position}
          </p>
        </div>

        <Button variant="secondary"
          ><Icon icon="arrow-narrow-right" size="sm" class="h-[16px] w-[16px]" /></Button
        >
      </div>
    </div>
  </div>
{/if}
