  import Icon from '$src/components/icon/icon.svelte';
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeatureIconProps } from '../newHeader.types';

  export let className = '';
  export let block: NavFeatureIconProps;

  const navFeatureIcon = tv({
    base: [
      'group/navFeatureIcon',
      'flex items-center justify-center',
      'h-[44px] w-[44px] rounded-[8px]',
      'border border-[#FAFAFF1F]',
      'bg-gradient-to-b from-[rgba(250,250,255,0)] to-[rgba(250,250,255,0.06)]',
      'transition-colors duration-300'
    ]
  });

  const { href, target } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || '#'} {target} class={navFeatureIcon({ class: className })}>
  <Icon
    class={cn([
      '[&_path]:fill-[url(#nav-feature-icon-resources-purple-gradient)]',
      '[&_path]:opacity-100'
    ])}
    width="24"
    height="24"
    icon={block.icon}
  />
</a>
