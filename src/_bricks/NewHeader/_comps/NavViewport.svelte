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

      'xl:inset-[unset] xl:top-full xl:left-1/2 xl:-translate-x-1/2 xl:data-[state="active"]:-translate-x-1/2',
      'xl:h-[unset] xl:overflow-hidden xl:w-full xl:min-w-[900px] xl:bg-[#14131D] xl:pt-0',
      'xl:overflow-[unset]',
      'xl:data-[state="active"]:-translate-x-1/2',

      'xl:shadow-new-header-viewport xl:border-[#FAFAFF] xl:rounded-2xl',
      'xl:border-none xl:data-[state="active"]:border'
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

  const handleOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      actions.hidePanel();
    }
  };
</script>

<div
  class={navViewport({ class: className })}
  bind:this={$viewportElem}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:click={handleOnClick}
  data-state="inactive"
>
  {#each navItems as navItem, index}
    {#if 'panel' in navItem && navItem.panel}
      <NavPanel {index} sections={navItem.panel} />
    {/if}
  {/each}
</div>
