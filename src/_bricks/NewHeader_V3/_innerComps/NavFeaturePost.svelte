<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeaturePostProps } from '../newHeader.types';

  import { getImageSrc } from '$src/lib/image-helper';

  export let className = '';
  export let block: NavFeaturePostProps;

  const navFeaturePost = tv({
    slots: {
      base: [
        'group/navFeaturePost w-full',
        'relative isolate',
        'flex flex-row items-center gap-4',
        'rounded-[12px]',
        'transition-colors duration-300 ease-out',
        'cursor-pointer',
        'before:absolute',
        'before:-inset-2',
        'before:rounded-[12px]',
        'before:bg-transparent',
        'before:transition-colors',
        'before:duration-300',
        'hover:before:bg-[#FAFAFF0F]',
        'before:-z-10'
      ],
      imageWrap: [
        'flex-none w-[115.2px] h-[72px]',
        'rounded-[7.2px] overflow-hidden',
        'border-[0.9px] border-[#FAFAFF1F]',
        'bg-[#0A0914]'
      ],
      image: ['w-full h-full object-cover'],
      info: ['flex flex-col gap-1 flex-1 min-w-0'],
      title: [
        'font-sans text-[14px] font-semibold text-[#FAFAFF] text-opacity-90',
        'leading-[1.25] tracking-normal',
        'truncate'
      ],
      description: [
        'font-sans text-[12px] font-medium text-[#FAFAFF] text-opacity-50',
        'leading-[1.2] tracking-[0.005em]',
        'truncate'
      ]
    }
  });

  const { base, imageWrap, image, info, title, description } = navFeaturePost();
  const { href, target } = getAnchorFromCmsLink(block.link);

  $: imageUrl = getImageSrc(block, 'image');
</script>

<a href={href || ''} {target} class={base({ class: className })}>
  {#if imageUrl}
    <div class={imageWrap()}>
      <img src={imageUrl} alt={block.title} class={image()} />
    </div>
  {/if}
  <div class={info()}>
    <h4 class={title()}>
      {block.title}
    </h4>
    <p class={description()}>
      {block.description}
    </p>
  </div>
</a>
