<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import Page from './page.svelte';
  import type { ComponentType } from 'svelte';
  import Metrics from './metrics.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    page: Page,
    metrics: Metrics
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
