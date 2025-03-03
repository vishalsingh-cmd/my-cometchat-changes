<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeatureBigCardProps } from '../newHeader.types';

  export let className = '';
  export let imgClassName = '';
  export let infoClassName = '';
  export let titleClassName = '';
  export let block: NavFeatureBigCardProps;

  const navFeatureBigCard = tv({
    slots: {
      base: [
        'grid grid-rows-[auto_1fr]',
        'group/navFeatureBigCard min-w-[210px] w-full',
        'border border-[#FAFAFF] border-opacity-5 rounded-md',
        'hover:border-[#6852D666]',
        'transition-colors duration-300'
      ],
      image: ['w-full h-full max-h-[120px] object-cover object-bottom'],
      info: ['px-4 py-4 flex flex-col'],
      title: [
        'font-sans text-[14px] font-semibold text-[#FAFAFF] text-opacity-60',
        'group-hover/navFeatureBigCard:text-[#6852D6]',
        'transition-colors duration-300'
      ]
    }
  });
  const { base, image, info, title } = navFeatureBigCard();
  const { href } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || '#'} target="_blank" class={base({ class: className })}>
  <img src={block.image.filename} alt={block.title} class={image({ class: imgClassName })} />
  <div class={info({ class: infoClassName })}>
    <h3 class={title({ class: titleClassName })}>
      {block.title}
    </h3>
  </div>
</a>
