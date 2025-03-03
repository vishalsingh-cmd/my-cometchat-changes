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
      base: ['grid grid-cols-1fr'],
      sidebar: ['flex flex-col bg-[#14131D]', 'hidden'],
      contents: ['flex flex-col']
    }
  });

  const { base, sidebar, contents } = navFeatureSideMenu();

  let activeIndex: number | null = 0;
  const toggleItem = (index: number) => {
    activeIndex = activeIndex === index ? null : index;
  };
</script>

<NavSection className={base({ class: className })}>
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
