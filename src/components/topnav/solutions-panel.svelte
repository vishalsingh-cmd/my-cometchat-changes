<script lang="ts">
  import Divider from '$components/divider.svelte';
  import { getAnchorFromCmsLink, sanitizeSlug } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { IndustryStoryblok, TopnavSolutionsPanelStoryblok } from '$types/bloks';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';
  import type { ISbStoryData } from '@storyblok/js';

  export let data: TopnavSolutionsPanelStoryblok;

  let industries = data.industries as ISbStoryData<IndustryStoryblok>[];
</script>

<div class="container mx-auto px-container">
  <div class="xl:flex">
    <div class="flex-[3] p-8 px-0 lg:p-12 lg:pl-0 xl:pr-12">
      <h3 class="mb-8 text-lg opacity-54">{data.industries_title}</h3>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each industries as item}
          <TopnavItem
            href={sanitizeSlug(item.full_slug)}
            title={item.content.short_name}
            description={item.content.description}
            asset={getItemAsset(item.content)}
          />
        {/each}
      </div>
    </div>
    {#each data.groups as group}
      <Divider class="xl:hidden" />
      <div
        class={cn([
          'relative flex-1 gap-12 border-gray-5 py-8 md:p-8 lg:py-12 xl:w-[480px] xl:border-l xl:bg-gray-4',
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
              comingSoon={item.coming_soon}
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
