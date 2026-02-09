<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import { getNewHeaderContext } from '../_context/newHader.context';
  import NavPanel from '../_innerComps/NavPanel.svelte';
  import { WINDOW_BREEAKPOINTS } from '$src/_consts/breakpoints.const';

  export let navItems: Array<NavItemProps | NavLinkProps>;
  export const className = '';

  const { viewportElem, actions, activePanelIndex } = getNewHeaderContext();

  // track client width
  let isDesktop = false;
  if (browser) {
    isDesktop = window.innerWidth >= WINDOW_BREEAKPOINTS.xl;
    onMount(() => {
      const handleResize = () => {
        isDesktop = window.innerWidth >= WINDOW_BREEAKPOINTS.xl;
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
  }

  const navViewport = tv({
    base: [
      'absolute inset-0 [perspective:2000px]',
      'pt-[60px] bg-[#0A0914] w-full h-full',
      'flex flex-row',
      'overflow-x-clip overflow-y-auto',
      'transition-[width,height,opacity] duration-300 ease-out',
      'opacity-0 data-[state="active"]:opacity-100',
      'translate-x-full data-[state="active"]:translate-x-0',

      'xl:inset-[unset] xl:top-full',

      'xl:h-[unset] xl:overflow-hidden xl:w-auto xl:bg-[#0A0914] xl:pt-0',
      'xl:overflow-[unset]',
      '',

      'xl:shadow-new-header-viewport xl:border-[#FAFAFF] xl:rounded-2xl',
      'xl:border-opacity-10 xl:data-[state="active"]:border',
      'xl:pointer-events-none xl:data-[state="active"]:pointer-events-auto'
    ],
    variants: {
      index: {
        0: [
          'xl:border-opacity-20',
          'xl:bg-[linear-gradient(0deg,#0A0914,#0A0914),linear-gradient(0deg,rgba(250,250,255,0.04),rgba(250,250,255,0.04))]'
        ],
        1: [
          'xl:border-opacity-20', // Increasing border opacity for Developer tab
          // Apply gradient background to the viewport itself for Index 1
          'xl:bg-[linear-gradient(0deg,#0A0914,#0A0914),linear-gradient(0deg,rgba(250,250,255,0.04),rgba(250,250,255,0.04))]'
        ],
        2: [
          'xl:border-opacity-20',
          'xl:bg-[linear-gradient(0deg,#0A0914,#0A0914),linear-gradient(0deg,rgba(250,250,255,0.04),rgba(250,250,255,0.04))]'
        ],

        3: [],
        4: [],
        5: []
      }
    }
  });

  const navWrapper = tv({
    base: ['relative w-full h-full transition-transform duration-300'],
    variants: {
      index: {
        0: 'xl:-translate-x-[0%]',
        1: 'xl:-translate-x-[0%]',
        2: 'xl:-translate-x-[0%]',
        3: 'xl:translate-x-[25%]',
        4: 'xl:translate-x-[40%]',
        5: 'xl:translate-x-[50%]'
      }
    }
  });

  const handleMouseEnter = () => {
    if (isDesktop) actions.cancelHidePanel();
  };

  const handleMouseLeave = () => {
    if (isDesktop) actions.scheduleHidePanel();
  };

  const handleOnClick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      actions.deactivateNav();
    }
  };

  // derived safe index for tv variant
  $: activeIndex = ($activePanelIndex ?? 0) as 0 | 1 | 2 | 3 | 4 | 5;
</script>

{#if isDesktop}
  <div class={navWrapper({ index: activeIndex })}>
    <div
      class={navViewport({ class: className, index: activeIndex })}
      bind:this={$viewportElem}
      role="presentation"
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      on:click={handleOnClick}
      on:keydown={(e) => e.key === 'Enter' && handleOnClick(e)}
    >
      {#each navItems as navItem, index}
        {#if 'panel' in navItem && navItem.panel}
          <NavPanel {index} sections={navItem.panel} title={navItem.title} />
        {/if}
      {/each}
    </div>
  </div>
{:else}
  <div
    class={navViewport({ class: className })}
    bind:this={$viewportElem}
    role="presentation"
    on:click={handleOnClick}
    on:keydown={(e) => e.key === 'Enter' && handleOnClick(e)}
  >
    {#each navItems as navItem, index}
      {#if 'panel' in navItem && navItem.panel}
        <NavPanel {index} sections={navItem.panel} title={navItem.title} />
      {/if}
    {/each}
  </div>
{/if}
