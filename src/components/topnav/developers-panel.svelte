<script lang="ts">
  import type { TechnologyStoryblok, TopnavTechnologiesPanelStoryblok } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let data: TopnavTechnologiesPanelStoryblok;
  $: links = data.technologies_links as unknown as ISbStoryData<TechnologyStoryblok>[]; // layout.server is resolving relations for this field
</script>

<div class="container mx-auto flex items-stretch px-4">
  <div class="flex-1 p-12 pl-0">
    <h3 class="mb-8 text-lg opacity-54">{data.technologies_title}</h3>
    <div class="grid grid-cols-3 gap-8">
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
  <div class="w-px bg-divider-gradient-vertical" />
  <div class="flex-1 p-12 pr-0">
    {#each data.groups as group}
      <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
      <div class="grid grid-cols-2 gap-8">
        {#each group.items as item}
          {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
          <TopnavItem {href} {target} {rel} title={item.title} asset={getItemAsset(item)} />
        {/each}
      </div>
    {/each}
  </div>
</div>
