<script lang="ts">
  import type { TechnologyStoryblok, TopnavTechnologiesPanelStoryblok } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import Divider from '$components/divider.svelte';

  export let data: TopnavTechnologiesPanelStoryblok;
  $: links = data.technologies_links as unknown as ISbStoryData<TechnologyStoryblok>[]; // layout.server is resolving relations for this field
</script>

<div class="container mx-auto px-container">
  <div class="items-stretch xl:flex">
    <div class="flex-1 p-8 px-0 lg:p-12 xl:pr-12">
      <h3 class="mb-8 text-lg opacity-54">{data.technologies_title}</h3>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each links as link}
          {@const doc = link.content.documentation_link?.[0]}
          {#if doc}
            {@const { href, target, rel } = getAnchorFromCmsLink(doc.link)}
            <TopnavItem
              {href}
              {target}
              {rel}
              title={doc.label || link.name}
              asset={typeof doc.icon === 'string'
                ? { icon: doc.icon, color: 'secondary' }
                : undefined}
            />
          {/if}
        {/each}
      </div>
    </div>
    <Divider direction="vertical" class="hidden xl:block" />
    <Divider class="xl:hidden" />
    <div class="flex-1 p-8 px-0 lg:p-12 xl:pl-12">
      {#each data.groups as group}
        <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {#each group.items as item}
            {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
            <TopnavItem {href} {target} {rel} title={item.title} asset={getItemAsset(item)} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
