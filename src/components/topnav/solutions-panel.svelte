<script lang="ts">
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { TopnavSolutionsPanelStoryblok } from '$types/bloks';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';

  export let data: TopnavSolutionsPanelStoryblok;
</script>

<div class="container mx-auto px-container">
  <div class="xl:flex">
    {#each data.groups as group, i}
      {#if i === data.groups.length - 1}
        <div class="h-px w-full bg-divider-gradient xl:hidden" />
        <div
          class={cn([
            'relative flex-1 gap-12 border-gray-5 p-8 px-0 pr-0 lg:p-12 xl:w-[480px] xl:border-l xl:bg-gray-4 xl:px-12',
            'xl:before:absolute xl:before:left-full xl:before:top-0 xl:before:h-full xl:before:w-screen xl:before:bg-gray-4'
          ])}
        >
          <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
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
        <div class="flex-[3] p-8 px-0 lg:p-12 xl:pr-12">
          <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
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
              />
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>
