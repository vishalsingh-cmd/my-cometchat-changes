<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import Page from './page.svelte';
  import type { ComponentType } from 'svelte';
  import Metrics from './metrics.svelte';
  import CustomerStoriesSection from './customer-stories-section.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    'customer-stories-section': CustomerStoriesSection,
    page: Page,
    metrics: Metrics
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
