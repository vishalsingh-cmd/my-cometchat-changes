<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import NavPanel from '../_innerComps/NavPanel.svelte';
  import { getNewHeaderContext } from '../_context/newHader.context';
  import { get } from 'svelte/store';

  export let navItems: Array<NavItemProps | NavLinkProps>;
  export const className = '';

  const { viewportElem, actions, activeIndex } = getNewHeaderContext();

  const navViewport = tv({
    base: [
      'absolute top-full left-0 [perspective:_2000px]',
      'w-full flex shadow-new-header-viewport overflow-hidden',
      'bg-[#14131D] border border-[#FAFAFF] border-opacity-5 rounded-2xl',
      'h-[var(--viewport-height,0px)] w-max origin-[top_center]',
      'scale-95 opacity-0',
      'data-[state="active"]:scale-100 data-[state="active"]:opacity-100',
      'transition-[width,height,opacity,transform] duration-300'
    ]
  });

  const handleMouseEnter = () => {
    actions.cancelHidePanel();
  };

  const handleMouseLeave = () => {
    const currentIndex = get(activeIndex);
    if (currentIndex !== null) {
      actions.scheduleHidePanel(currentIndex);
    }
  };
</script>

<div
  class={navViewport({ class: className })}
  bind:this={$viewportElem}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  {#each navItems as navItem, index}
    {#if 'panel' in navItem && navItem.panel}
      <NavPanel {index} sections={navItem.panel} />
    {/if}
  {/each}
</div>
