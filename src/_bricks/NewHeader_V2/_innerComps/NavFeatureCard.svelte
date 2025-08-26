<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  // import Icon from '$src/components/icon/icon.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeatureCardProps } from '../newHeader.types';
  // import NewChip from '../_comps/NewChip.svelte';

  export let className = '';
  export let titleClassName = '';
  export let descriptionClassName = '';
  // export let iconWrapClassName = '';
  // export let iconClassName = '';
  export let block: NavFeatureCardProps;

  const navFeatureCard = tv({
    slots: {
      base: [
        'group/navFeatureCard',
        'relative isolate pb-6 pt-4 px-4',
        'border-b border-gray-5',
        // 'border border-[#FAFAFF] border-opacity-5 rounded-lg',
        // 'bg-[linear-gradient(180deg,_rgba(250,_250,_255,_0.04)_0%,_rgba(250,_250,_255,_0.02)_100%)]',
        'flex flex-col gap-2'
      ],
      title: [
        'font-sans text-[16px] font-semibold leading-[17px] text-[#FAFAFF]',
        'group-hover/navFeatureCard:text-[#6852D6]',
        'transition-colors duration-300'
      ],
      description: ['font-sans text-14 font-medium text-[#FAFAFF] text-opacity-60', 'max-w-[80%]'],
      iconWrap: ['absolute bottom-4 right-4 h-16 w-16'],
      iconTV: [
        'w-16 h-16 text-[#646465]',
        'transition-colors duration-300',
        'group-hover/navFeatureCard:text-[#6852D6]',
        '[&_path]:fill-transparent group-hover/navFeatureCard:[&_path]:fill-[#6852D6]'
      ]
    }
  });

  const { base, title, description } = navFeatureCard();
  const { href, target } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || ''} {target} class={base({ class: className })}>
  <h3 class={title({ class: titleClassName })}>
    {block.title}
    <!-- {#if block.isNew}
      <NewChip />
    {/if} -->
  </h3>
  <p class={description({ class: descriptionClassName })}>
    {block.description}
  </p>
  <!-- <div class={iconWrap({ class: iconWrapClassName })}>
    <Icon icon={block.icon} class={iconTV({ class: iconClassName })} />
  </div> -->
</a>
