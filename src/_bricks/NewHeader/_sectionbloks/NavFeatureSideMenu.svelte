<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import NavFeatureSideMenuCnt from '../_innerComps/NavFeatureSideMenuCnt.svelte';
  import NavFeatureSideMenuTrigger from '../_innerComps/NavFeatureSideMenuTrigger.svelte';

  import NavSection from '../_innerComps/NavSection.svelte';
  import type { NavFeatureSideMenuProps } from '../newHeader.types';

  export let className = '';
  export let sidebarClassName = '';
  export let contentsClassName = '';
  export let block: NavFeatureSideMenuProps;

  const navFeatureSideMenu = tv({
    slots: {
      base: ['grid grid-cols-[auto_1fr]'],
      sidebar: ['flex flex-col bg-[#14131D] pl-2'],
      contents: ['flex flex-col']
    }
  });

  const { base, sidebar, contents } = navFeatureSideMenu();
</script>

<NavSection className={base({ class: className })}>
  <div class={sidebar({ class: sidebarClassName })}>
    {#each block.items as item, index}
      <NavFeatureSideMenuTrigger {index}>
        {item.title}
      </NavFeatureSideMenuTrigger>
    {/each}
  </div>
  <div class={contents({ class: contentsClassName })}>
    {#each block.items as item, index}
      <NavFeatureSideMenuCnt block={item} {index} />
    {/each}
  </div>
</NavSection>
