<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getNewHeaderContext } from '../_context/newHader.context';
  import NavFeatureBigCards from '../_sectionbloks/NavFeatureBigCards.svelte';
  import NavFeatureCards from '../_sectionbloks/NavFeatureCards.svelte';
  import NavFeatureIcons from '../_sectionbloks/NavFeatureIcons.svelte';
  import NavFeatures from '../_sectionbloks/NavFeatures.svelte';
  import NavFeatureSideMenu from '../_sectionbloks/NavFeatureSideMenu.svelte';
  import type { NavPanelProps } from '../newHeader.types';
  import NavPanelBackBtn from './NavPanelBackBtn.svelte';

  const { panelElems } = getNewHeaderContext();

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
    base: [
      'flex flex-col gap-8',
      'flex-none w-max max-w-full overflow-x-clip',
      'hidden data-[state="active"]:flex',

      'xl:py-6'
    ]
  });
</script>

<div
  class={navPanel({ class: className })}
  bind:this={$panelElems[`panel-${index}`]}
  data-name="nav-panel"
  data-index={index}
  data-state={'inactive'}
>
  <NavPanelBackBtn />
  {#each sections as section}
    {#if blockMap[section.component]}
      <svelte:component this={blockMap[section.component]} block={section} {...$$restProps} />
    {/if}
  {/each}
  <div class="h-8 w-full flex-shrink-0 xl:hidden" />
</div>
