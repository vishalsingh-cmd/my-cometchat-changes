<script lang="ts">
  import Icon from '$src/components/icon/icon.svelte';
  import { tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeatureIconProps } from '../newHeader.types';

  export let className = '';
  export let block: NavFeatureIconProps;

  const navFeatureIcon = tv({
    base: ['group/navFeatureIcon']
  });

  const { href } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || '#'} target="_blank" class={navFeatureIcon({ class: className })}>
  <Icon size="lg" icon={block.icon} />
</a>
