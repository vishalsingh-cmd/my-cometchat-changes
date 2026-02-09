<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { getImageSrc } from '$lib/image-helper';
  import type { SecureReachkStoryblok } from '$src/types/bloks';
  import SecureDecCircle from './SecureDecCircle.svelte';
  export let className = '';

  export let block: SecureReachkStoryblok;
</script>

<div
  class={cn(
    [
      'group/reach',
      'flex-[50] p-4',
      'relative',
      'border-b border-l border-[#FAFAFF1A]',
      'last-of-type:border-r'
    ],
    ['sm:border-b-0'],
    ['lg:first-of-type:border-b lg:last-of-type:border-r-0'],
    ['xl:p-10'],
    [className]
  )}
>
  <img src={getImageSrc(block, 'icon')} alt={block?.icon?.alt ?? ''} class="h-10 w-10" />

  <h4 class={cn(['mt-4 text-[16px] font-medium text-[#FAFAFF]'])}>
    {block?.title}
  </h4>
  <p class={cn(['mt-2 text-[32px] font-semibold text-[#FAFAFF]'], ['xl:text-[54px]'])}>
    {block?.description}
  </p>

  <SecureDecCircle
    position="topLeft"
    className="group-first-of-type/reach:hidden group-first-of-type/reach:lg:block"
  />
  <SecureDecCircle
    position="bottomLeft"
    className="group-first-of-type/reach:hidden group-first-of-type/reach:sm:block"
  />
  <SecureDecCircle position="bottomRight" className="hidden group-last-of-type/reach:sm:block" />
</div>
