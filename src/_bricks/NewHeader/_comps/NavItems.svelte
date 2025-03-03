<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import NavItem from './NavItem.svelte';
  import NavTrigger from './NavTrigger.svelte';
  import NewChip from './NewChip.svelte';
  import NavViewport from './NavViewport.svelte';
  import NavLink from './NavLink.svelte';
  import NavCtas from './NavCtas.svelte';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { navElem, isNavExpanded } = getNewHeaderContext();
  export let navItems: Array<NavItemProps | NavLinkProps>;
</script>

<nav
  class={cn(
    [
      'flex flex-col px-5 pt-16',
      'absolute inset-0 -z-[1] bg-[#0A0914]',
      'h-screen w-full overflow-y-auto overflow-x-clip',
      'transition-[transform,opacity] duration-300',
      '-translate-y-full data-[state="active"]:translate-y-0',
      'scale-95 data-[state="active"]:scale-100',
      'opacity-0 data-[state="active"]:opacity-100'
    ],
    ['lg:items-center lg:justify-between']
  )}
  data-state={$isNavExpanded ? 'active' : 'inactive'}
  bind:this={$navElem}
>
  <div class={cn(['flex flex-col'])}>
    <ul class={cn(['flex items-center gap-10'])}>
      {#each navItems as navItem, index}
        <NavItem>
          {#if navItem.component === 'nav-item'}
            <NavTrigger {index}>
              {navItem.title}
              {#if navItem.isNew}
                <NewChip />
              {/if}
            </NavTrigger>
          {:else if navItem.component === 'nav-link'}
            {@const { href } = getAnchorFromCmsLink(navItem.link)}
            <NavLink link={href || ''}>
              {navItem.title}
              {#if navItem.isNew}
                <NewChip />
              {/if}
            </NavLink>
          {/if}
        </NavItem>
      {/each}
    </ul>

    <NavViewport {navItems} />
  </div>
  <NavCtas />
</nav>
