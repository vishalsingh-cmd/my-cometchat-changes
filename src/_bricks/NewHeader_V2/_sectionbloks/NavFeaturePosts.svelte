<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavFeaturePostsProps } from '../newHeader.types';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';
  import NavFeaturePost from '../_innerComps/NavFeaturePost.svelte';

  export let className = '';
  export let titleClassName = '';
  export let featuresClassName = '';
  export let block: NavFeaturePostsProps;

  const navFeaturePosts = tv({
    base: ['flex flex-col gap-4', 'px-6 w-full', 'py-4']
  });

  const grid = tv({
    base: ['grid grid-cols-1 xl:grid-cols-2 gap-4']
  });
</script>

<NavSection className={navFeaturePosts({ class: className })}>
  {#if block.title}
    <NavTitle className={titleClassName}>{block.title}</NavTitle>
  {/if}

  <div class={grid({ class: featuresClassName })}>
    {#each block.posts as post}
      <NavFeaturePost block={post} />
    {/each}
  </div>
</NavSection>
