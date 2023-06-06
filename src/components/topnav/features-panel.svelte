<script lang="ts">
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { TopnavFeaturesPanelStoryblok } from '$types/bloks';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';

  export let data: TopnavFeaturesPanelStoryblok;
</script>

<div class="container mx-auto flex px-4">
  <div
    class="relative w-[480px] border-r border-gray-5 bg-gray-4 p-12 pl-0 before:absolute before:right-full before:top-0 before:h-full before:w-screen before:bg-gray-4"
  >
    <div class="flex flex-col gap-12">
      {#each data.featured_items as featured}
        {@const { href, target, rel } = getAnchorFromCmsLink(featured.link)}
        <TopnavItem
          size="big"
          {href}
          {target}
          {rel}
          title={featured.title}
          description={featured.description}
          asset={getItemAsset(featured)}
        />
      {/each}
    </div>
  </div>
  <div class="flex-1 p-12">
    {#each data.groups as group, i}
      <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
      <div class="grid grid-cols-3 gap-8">
        {#each group.items as item}
          {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
          <TopnavItem
            {href}
            {target}
            {rel}
            title={item.title}
            description={item.description}
            asset={getItemAsset(item)}
          />
        {/each}
      </div>
      {#if i < data.groups.length - 1}
        <div class="my-8 flex h-px w-full bg-divider-gradient" />
      {/if}
    {/each}
  </div>
</div>
