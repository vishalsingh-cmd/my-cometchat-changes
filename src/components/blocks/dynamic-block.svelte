<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import Page from './page.svelte';
  import Metrics from './metrics.svelte';
  import ListSection from './list-section.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import PlatformSection from './platform-section.svelte';
  import TechnologiesSection from './technologies-section.svelte';
  import CustomerStoriesSection from './customer-stories-section.svelte';
  import SyncedBlock from './synced-block.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    'customer-stories-section': CustomerStoriesSection,
    'list-section': ListSection,
    'homepage-hero': HomepageHero,
    metrics: Metrics,
    page: Page,
    'platform-section': PlatformSection,
    'technologies-section': TechnologiesSection,
    'synced-block': SyncedBlock
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
