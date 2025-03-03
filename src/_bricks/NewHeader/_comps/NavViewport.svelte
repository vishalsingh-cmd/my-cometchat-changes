<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import { getNewHeaderContext } from '../_context/newHader.context';
  import NavPanel from '../_innerComps/NavPanel.svelte';

  export let navItems: Array<NavItemProps | NavLinkProps>;
  export const className = '';

  const { viewportElem, actions } = getNewHeaderContext();

  const navViewport = tv({
    base: [
      'absolute inset-0 z-[1] [perspective:_2000px]',
      'pt-[60px] bg-[#0A0914]',
      'flex flex-row w-full h-full overflow-x-clip overflow-y-auto',
      'transition-[width,height,opacity,transform] duration-300',
      'translate-x-full opacity-0',
      'data-[state="active"]:translate-x-0 data-[state="active"]:opacity-100',

      'xl:pt-0 xl:shadow-new-header-viewport xl:overflow-hidden',
      'xl:inset-[unset] xl:top-full xl:left-0 xl:translate-x-0 xl:origin-[top_center]',
      'xl:border xl:border-[#FAFAFF] xl:border-opacity-5 xl:rounded-2xl',
      'xl:h-0 xl:scale-95 xl:opacity-0 xl:pointer-events-none',
      'xl:h-max xl:data-[state="active"]:scale-100 xl:data-[state="active"]:opacity-100 xl:data-[state="active"]:xl:pointer-events-auto',
      'xl:transition-[width,height,opacity,transform] xl:duration-300'
    ]
  });

  const handleMouseEnter = () => {
    actions.cancelHidePanel();
  };

  const handleMouseLeave = () => {
    actions.scheduleHidePanel();
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
