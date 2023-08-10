<script lang="ts">
  import Divider from '$components/divider.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { TopnavFeaturesPanelStoryblok } from '$types/bloks';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';

  export let data: TopnavFeaturesPanelStoryblok;
</script>

<div class="container mx-auto px-container xl:flex">
  <div
    class={cn([
      'relative border-gray-5 bg-gray-4',
      'before:absolute before:right-full before:top-0 before:h-full before:w-screen before:bg-gray-4',
      'after:absolute after:left-full after:top-0 after:h-full after:w-screen after:bg-gray-4 xl:after:hidden',
      'xl:w-[480px] xl:border-r'
    ])}
  >
    <div class="flex flex-col gap-12 p-8 px-0 sm:flex-row lg:p-12 lg:pl-0 xl:flex-col xl:pr-12">
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
          class="flex-1"
        />
      {/each}
    </div>
    <Divider class="xl:hidden" />
  </div>
  <div class="flex-1 py-8 lg:px-10 lg:py-12">
    {#each data.groups as group, i}
      <h3 class="mb-6 text-lg opacity-54">{group.title}</h3>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each group.items as item}
          {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
          <TopnavItem
            {href}
            {target}
            {rel}
            title={item.title}
            description={item.description}
            asset={getItemAsset(item)}
            comingSoon={item.coming_soon}
          />
        {/each}
      </div>
      {#if i < data.groups.length - 1}
        <Divider class="my-8 flex" />
      {/if}
    {/each}
  </div>
</div>
