<script lang="ts">
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { TopnavSolutionsPanelStoryblok } from '$types/bloks';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';

  export let data: TopnavSolutionsPanelStoryblok;
</script>

<div class="container mx-auto flex px-4">
  {#each data.groups as group, i}
    {#if i === data.groups.length - 1}
      <div
        class="relative w-[480px] flex-1 gap-12 border-l border-gray-5 bg-gray-4 p-12 pr-0 before:absolute before:left-full before:top-0 before:h-full before:w-screen before:bg-gray-4"
      >
        <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
        <div class="flex flex-col gap-8">
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
      </div>
    {:else}
      <div class="flex-[3] p-12 pl-0">
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
      </div>
    {/if}
  {/each}
</div>
