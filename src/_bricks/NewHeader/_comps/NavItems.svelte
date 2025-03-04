<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import type { ButtonLinkStoryblok, LinkStoryblok } from '$src/types/bloks';
  import NavItem from './NavItem.svelte';
  import NavTrigger from './NavTrigger.svelte';
  import NewChip from './NewChip.svelte';
  import NavViewport from './NavViewport.svelte';
  import NavLink from './NavLink.svelte';
  import NavCtas from './NavCtas.svelte';
  import { getNewHeaderContext } from '../_context/newHader.context';
  import NavActiveShadow from './NavActiveShadow.svelte';

  const { navElem, isNavExpanded } = getNewHeaderContext();
  export let navItems: Array<NavItemProps | NavLinkProps>;
  export let ctas: Array<LinkStoryblok | ButtonLinkStoryblok>;
</script>

<nav
  class={cn(
    [
      'absolute inset-0 -z-[1]',
      'w-full bg-[#0A0914] px-[inherit] pt-16',
      'h-[calc(100vh-env(safe-area-inset-top)-env(safe-area-inset-bottom))]',
      'flex flex-col',
      'overflow-y-auto overflow-x-clip',
      'transition-[transform,opacity] duration-300',

      '-translate-y-full data-[state="active"]:translate-y-0',
      'scale-95 data-[state="active"]:scale-100',
      'opacity-0 data-[state="active"]:opacity-100'
    ],
    [
      'xl:relative xl:z-[1] xl:h-auto xl:flex-row xl:px-[unset] xl:pt-[unset]',
      'xl:translate-y-0 xl:scale-100 xl:bg-transparent xl:opacity-100 xl:[overflow:_unset]'
    ]
  )}
  data-state={$isNavExpanded ? 'active' : 'inactive'}
  bind:this={$navElem}
>
  <div class={cn(['flex flex-col'], ['xl:relative xl:mx-auto xl:w-max'])}>
    <ul
      class={cn(['flex flex-col'], ['xl:w-full xl:px-5', 'xl:flex-row xl:justify-center xl:gap-6'])}
    >
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
      <NavActiveShadow />
    </ul>

    <NavViewport {navItems} />
  </div>
  <NavCtas {ctas} />
</nav>
