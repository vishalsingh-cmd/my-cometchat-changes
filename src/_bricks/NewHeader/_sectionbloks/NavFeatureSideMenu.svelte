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
      base: ['grid grid-cols-1fr', 'xl:grid-cols-[auto_1fr]'],
      sidebar: ['flex flex-col bg-[#14131D]', 'hidden xl:flex xl:w-max'],
      contents: ['flex flex-col min-w-0', 'xl:bg-[#0F0E19]']
    }
  });

  const { base, sidebar, contents } = navFeatureSideMenu();

  let activeIndex = 0;
  const toggleItem = (index: number) => {
    activeIndex = index;
  };
</script>

<NavSection className={base({ class: className })} isSidemenu={true}>
  <div class={sidebar({ class: sidebarClassName })}>
    {#each block.items as item, index}
      <NavFeatureSideMenuTrigger
        isActive={activeIndex === index}
        on:click={() => toggleItem(index)}
      >
        {item.title}
      </NavFeatureSideMenuTrigger>
    {/each}
  </div>
  <div class={contents({ class: contentsClassName })}>
    {#each block.items as item, index}
      <NavFeatureSideMenuCnt block={item} {index} isActive={activeIndex === index} {toggleItem} />
    {/each}
  </div>
</NavSection>
