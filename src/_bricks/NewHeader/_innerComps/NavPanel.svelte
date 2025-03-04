<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
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
      'group/navPanel',
      'flex flex-col gap-8',
      'flex-none w-full max-w-full overflow-x-clip',
      'hidden data-[state="active"]:flex',

      'data-[issidemenu="yes"]:gap-4'
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
  <div
    class={cn(
      ['hidden w-full flex-shrink-0'],
      ['xl:block xl:h-[1px]', 'xl:group-data-[issidemenu="yes"]/navPanel:hidden']
    )}
  />
  <NavPanelBackBtn />
  {#each sections as section}
    {#if blockMap[section.component]}
      <svelte:component this={blockMap[section.component]} block={section} {...$$restProps} />
    {/if}
  {/each}
  <div
    class={cn(
      ['h-8 w-full flex-shrink-0'],
      ['xl:h-[1px]', 'xl:group-data-[issidemenu="yes"]/navPanel:hidden']
    )}
  />
</div>
