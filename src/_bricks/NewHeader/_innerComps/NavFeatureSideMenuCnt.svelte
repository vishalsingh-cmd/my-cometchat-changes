<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import NavFeatureBigCards from '../_sectionbloks/NavFeatureBigCards.svelte';
  import NavFeatureCards from '../_sectionbloks/NavFeatureCards.svelte';
  import NavFeatureIcons from '../_sectionbloks/NavFeatureIcons.svelte';
  import NavFeatures from '../_sectionbloks/NavFeatures.svelte';
  import type { NavFeatureSideMenuItemProps } from '../newHeader.types';

  export let index: number;
  export let block: NavFeatureSideMenuItemProps;
  export let className = '';

  const blockMap: Record<string, any> = {
    'nav-feature-big-cards': NavFeatureBigCards,
    'nav-feature-cards': NavFeatureCards,
    'nav-feature-icons': NavFeatureIcons,
    'nav-features': NavFeatures
  };

  const navFeatureSideMenuCnt = tv({
    base: ['flex', 'data-[state="inactive"]:hidden data-[state="active"]:grid']
  });
</script>

<div
  class={navFeatureSideMenuCnt({ class: className })}
  data-index={index}
  data-state={index === 0 ? 'active' : 'inactive'}
>
  {#each block.content as content}
    {#if blockMap[content.component]}
      <svelte:component
        this={blockMap[content.component]}
        className="last-of-type:border-l last-of-type:border-l-[#FAFAFF0F] flex-[0.5]"
        block={content}
        {...$$restProps}
      />
    {/if}
  {/each}
</div>
