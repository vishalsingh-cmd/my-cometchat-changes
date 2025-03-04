<script lang="ts">
  import Icon from '$src/components/icon/icon.svelte';
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeatureIconProps } from '../newHeader.types';

  export let className = '';
  export let block: NavFeatureIconProps;

  const navFeatureIcon = tv({
    base: ['group/navFeatureIcon', 'flex items-center justify-center']
  });

  const { href, target } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || '#'} {target} class={navFeatureIcon({ class: className })}>
  <Icon
    class={cn([
      '[&_path]:fill-[url(#paint0_linear_1324_49788)]',
      'group-hover/navFeatureIcon:[&_path]:fill-[#6852D6]'
    ])}
    size="lg"
    icon={block.icon}
  />
</a>
