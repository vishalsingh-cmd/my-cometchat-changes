<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import NavFeatureBigCards from '../_sectionbloks/NavFeatureBigCards.svelte';
  import NavFeatureCards from '../_sectionbloks/NavFeatureCards.svelte';
  import NavFeatureIcons from '../_sectionbloks/NavFeatureIcons.svelte';
  import NavFeatures from '../_sectionbloks/NavFeatures.svelte';
  import type { NavFeatureSideMenuItemProps } from '../newHeader.types';
  import NavFeatureSideMenuTrigger from './NavFeatureSideMenuTrigger.svelte';

  export let index: number;
  export let isActive: boolean;
  export let block: NavFeatureSideMenuItemProps;
  export let className = '';
  export let toggleItem: (index: number) => void;

  const blockMap: Record<string, any> = {
    'nav-feature-big-cards': NavFeatureBigCards,
    'nav-feature-cards': NavFeatureCards,
    'nav-feature-icons': NavFeatureIcons,
    'nav-features': NavFeatures
  };

  const navFeatureSideMenuCnt = tv({
    slots: {
      base: ['group/navFeatureSideMenuCnt', 'flex flex-col'],
      cnt: [
        'hidden flex-col gap-8 py-6 bg-[#14131D]',
        'group-data-[state="active"]/navFeatureSideMenuCnt:flex',
        'group-data-[state="active"]/navFeatureSideMenuCnt:animate-navigationMenu-fadeIn',

        'xl:flex-row xl:bg-transparent'
      ]
    }
  });

  const { base, cnt } = navFeatureSideMenuCnt();
</script>

<div
  class={base({ class: className })}
  data-name="navFeatureSideMenuCnt"
  data-state={isActive ? 'active' : 'inactive'}
>
  <NavFeatureSideMenuTrigger className="xl:hidden" {isActive} on:click={() => toggleItem(index)}>
    {block.title}
    <Icon
      icon="chevron-down"
      class={cn([
        '-rotate-90 transition-transform duration-300',
        'group-data-[state="active"]/navFeatureSideMenuCnt:rotate-0'
      ])}
      size="xs"
    />
  </NavFeatureSideMenuTrigger>

  <div class={cnt()}>
    {#each block.content as content}
      {#if blockMap[content.component]}
        <svelte:component
          this={blockMap[content.component]}
          className="xl:[&:nth-of-type(2)]:border-l xl:[&:nth-of-type(2)]:border-l-[#FAFAFF0F] xl:w-max"
          block={content}
          {...$$restProps}
        />
      {/if}
    {/each}
  </div>
  <div
    class={cn(
      [
        'mx-auto h-[1px] w-[calc(100%_-_48px)] bg-[#14131D]',
        'group-last-of-type/navFeatureSideMenuCnt:bg-transparent'
      ],
      ['xl:hidden']
    )}
  />
</div>
