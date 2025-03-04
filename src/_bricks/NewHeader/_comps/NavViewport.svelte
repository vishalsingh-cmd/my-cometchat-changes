<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import { getNewHeaderContext } from '../_context/newHader.context';
  import NavPanel from '../_innerComps/NavPanel.svelte';
  import { WINDOW_BREEAKPOINTS } from '$src/_consts/breakpoints.const';

  export let navItems: Array<NavItemProps | NavLinkProps>;
  export const className = '';

  const { viewportElem, actions } = getNewHeaderContext();

  const navViewport = tv({
    base: [
      'absolute inset-0 [perspective:2000px]',
      'pt-[60px] bg-[#0A0914] w-full h-full',
      'flex flex-row',
      'overflow-x-clip overflow-y-auto',
      'transition-[width,height,opacity,transform] duration-300',

      'opacity-0 data-[state="active"]:opacity-100',
      'translate-x-full data-[state="active"]:translate-x-0',

      'xl:pt-0 xl:shadow-new-header-viewport xl:overflow-hidden xl:bg-[#14131D]',
      'xl:inset-[unset] xl:top-full xl:left-0 xl:translate-x-0 xl:origin-[top_center]',
      'xl:border xl:border-[#FAFAFF] xl:border-opacity-5 xl:rounded-2xl',

      'xl:h-max xl:w-auto xl:scale-95 xl:opacity-0 xl:pointer-events-none',
      'xl:data-[state="active"]:scale-100 xl:data-[state="active"]:opacity-100 xl:data-[state="active"]:xl:pointer-events-auto',
      'xl:transition-[width,height,opacity,transform] xl:duration-300'

      // 'xl:opacity-100 xl:pointer-events-auto'
    ]
  });

  const handleMouseEnter = () => {
    if (window.innerWidth >= WINDOW_BREEAKPOINTS.xl) {
      actions.cancelHidePanel();
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= WINDOW_BREEAKPOINTS.xl) {
      actions.scheduleHidePanel();
    }
  };
</script>

<div
  class={navViewport({ class: className })}
  bind:this={$viewportElem}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  data-state="inactive"
>
  {#each navItems as navItem, index}
    {#if 'panel' in navItem && navItem.panel}
      <NavPanel {index} sections={navItem.panel} />
    {/if}
  {/each}
</div>
