<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  // import NewChip from '../_comps/NewChip.svelte';
  import type { NavFeatureProps } from '../newHeader.types';

  export let className = '';
  export let iconWrapClassName = '';
  export let iconClassName = '';
  export let infoClassName = '';
  export let titleClassName = '';
  export let descriptionClassName = '';

  export let block: NavFeatureProps;

  const navFeature = tv({
    slots: {
      base: [
        'group/navFeature relative isolate min-w-[400px]',
        'font-sans font-semibold',
        'grid grid-cols-[auto_1fr] gap-4'
      ],
      iconWrap: [
        'h-10 w-10 border border-[#FAFAFF] border-opacity-5 rounded-md ',
        'flex items-center justify-center',
        'transition-colors duration-300',
        'group-hover/navFeature:border-[#6852D6]',
        'group-hover/navFeature:bg-[linear-gradient(180deg,_rgba(104,_82,_214,_0.03)_0%,_rgba(104,_82,_214,_0.15)_100%)]'
      ],
      iconTV: [
        'text-[#646465] group-hover/navFeature:text-[#6852D6]',
        'transition-colors duration-300',

        '[&_path]:fill-[url(#paint0_linear_1324_49788)]',
        '[&_path]:opacity-40',
        'group-hover/navFeature:[&_path]:fill-[#6852D6]',
        'group-hover/navFeature:[&_path]:opacity-100'
      ],
      info: ['flex flex-col gap-1.5'],
      title: [
        'font-sans text-[16px] font-semibold text-gray-12 opacity-75 leading-tighter',
        'transition-colors duration-300',
        'group-hover/navFeature:text-[#6852D6]'
      ],
      description: [
        'text-[14px] font-sans font-medium leading-[17px] tracking-[0.07px] text-gray-12 opacity-50'
      ]
    }
  });

  const { base, iconWrap, iconTV, info, title, description } = navFeature();
  const { href, target } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || ''} {target} class={base({ class: className })} {...$$restProps}>
  <div class={iconWrap({ class: iconWrapClassName })}>
    <Icon icon={block.icon} class={iconTV({ class: iconClassName })} />
  </div>
  <div class={info({ class: infoClassName })}>
    <h4 class={title({ class: titleClassName })}>
      {block.title}
      <!-- {#if block.isNew}
        <NewChip />
      {/if} -->
    </h4>
    <p class={description({ class: descriptionClassName })}>
      {block.description}
    </p>
  </div>
</a>
