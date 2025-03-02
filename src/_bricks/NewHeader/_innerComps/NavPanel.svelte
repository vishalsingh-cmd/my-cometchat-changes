<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import NavFeatureBigCards from '../_sectionbloks/NavFeatureBigCards.svelte';
  import NavFeatureCards from '../_sectionbloks/NavFeatureCards.svelte';
  import NavFeatureIcons from '../_sectionbloks/NavFeatureIcons.svelte';
  import NavFeatures from '../_sectionbloks/NavFeatures.svelte';
  import NavFeatureSideMenu from '../_sectionbloks/NavFeatureSideMenu.svelte';
  import type { NavPanelProps } from '../newHeader.types';

  const blockMap: Record<string, any> = {
    'nav-feature-big-cards': NavFeatureBigCards,
    'nav-feature-cards': NavFeatureCards,
    'nav-feature-icons': NavFeatureIcons,
    'nav-features': NavFeatures,
    'nav-feature-side-menu': NavFeatureSideMenu
  };

  export let index: number;
  export let sections: NavPanelProps[];
  export let className = '';

  const navPanel = tv({
    base: ['relative w-full h-full', 'flex flex-col py-6 gap-6']
  });
</script>

<div class={navPanel({ class: className })} data-name="nav-panel" data-index={index}>
  {#each sections as section}
    {#if blockMap[section.component]}
      <svelte:component this={blockMap[section.component]} block={section} {...$$restProps} />
    {/if}
  {/each}
</div>
