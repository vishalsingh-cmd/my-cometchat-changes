<script lang="ts">
  import { cn } from '$lib/utils';
  import type { MetricsStoryblok } from '$types/bloks';
  import { cva } from 'class-variance-authority';
  import MetricsItem from './metrics-item.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  export let block: MetricsStoryblok;

  const grid = cva('grid gap-8 py-10 lg:pt-14 xl:pt-20', {
    variants: {
      even: {
        true: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
        false: 'grid-cols-1 lg:grid-cols-3'
      }
    }
  });
</script>

{#if block.metrics}
  <div use:storyblokEditable={block} class="bg-gray-1 text-gray-12">
    <div
      class={cn('container mx-auto px-container', grid({ even: block.metrics.length % 2 === 0 }))}
    >
      {#each block.metrics as metric}
        <MetricsItem {metric} />
      {/each}
    </div>
  </div>
{/if}
