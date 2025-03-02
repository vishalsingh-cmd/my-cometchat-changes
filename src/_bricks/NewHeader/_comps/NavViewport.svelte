<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';
  import NavPanel from '../_innerComps/NavPanel.svelte';

  export let navItems: Array<NavItemProps | NavLinkProps>;
  export const className = '';

  const navViewport = tv({
    base: [
      'absolute top-full left-0 [perspective:_2000px]',
      'w-full flex shadow-new-header-viewport overflow-hidden',
      'bg-[#14131D] border border-[#FAFAFF] border-opacity-5 rounded-2xl'
      // 'border-opacity-0 bg-opacity-0'
    ]
  });
</script>

<div class={navViewport({ class: className })}>
  {#each navItems as navItem, index}
    {#if 'panel' in navItem && navItem.panel}
      <NavPanel {index} sections={navItem.panel} />
    {/if}
  {/each}
</div>
