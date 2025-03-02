<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import NavItem from './NavItem.svelte';
  import NavTrigger from './NavTrigger.svelte';
  import NewChip from './NewChip.svelte';
  import NavViewport from './NavViewport.svelte';
  import NavLink from './NavLink.svelte';

  export let navItems: Array<NavItemProps | NavLinkProps>;
</script>

<div class={cn(['relative isolate', 'flex w-full flex-[0.9] flex-col items-center'])}>
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
