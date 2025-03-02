<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import NavItem from './NavItem.svelte';
  import NavTrigger from './NavTrigger.svelte';
  import NewChip from './NewChip.svelte';
  import NavViewport from './NavViewport.svelte';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';

  export let navItems: Array<NavItemProps | NavLinkProps>;
</script>

<div class={cn(['relative isolate py-4'])}>
  <ul class={cn(['flex items-center gap-10'])}>
    {#each navItems as navItem, index}
      <NavItem>
        <NavTrigger data-index={index}>
          {navItem.title}
          {#if navItem.isNew}
            <NewChip />
          {/if}
        </NavTrigger>
      </NavItem>
    {/each}
  </ul>

  <NavViewport {navItems} />
</div>
