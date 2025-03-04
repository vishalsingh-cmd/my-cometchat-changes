<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavFeatureIconsProps } from '../newHeader.types';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';
  import NavFeatureIcon from '../_innerComps/NavFeatureIcon.svelte';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';

  export let className = '';
  export let iconsClassName = '';
  export let block: NavFeatureIconsProps;

  const navFeatureIcons = tv({
    slots: {
      base: ['flex flex-col gap-6', 'px-6'],
      icons: [
        'grid grid-cols-[repeat(auto-fill,_minmax(32px,1fr))] gap-8',
        'lg:gap-12',
        'xl:grid-cols-[repeat(4,32px)]'
      ]
    }
  });

  const { base, icons } = navFeatureIcons();
</script>

<NavSection className={base({ class: className })}>
  <NavTitle>{block.title}</NavTitle>

  <div class={icons({ class: iconsClassName })}>
    {#each block.icons as icon}
      <NavFeatureIcon block={icon} />
    {/each}
  </div>

  {@const { href } = getAnchorFromCmsLink(block.ctas[0].link)}
  <GhostButton as="a" href={href || '#'} target="_blank" variant="highlighted" class="w-max">
    {block.ctas[0].label}
  </GhostButton>
</NavSection>
