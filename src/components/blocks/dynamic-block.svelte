<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import Metrics from './metrics.svelte';
  import Page from './page.svelte';
  import TechnologiesSection from './technologies-section.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    metrics: Metrics,
    page: Page,
    'technologies-section': TechnologiesSection
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
