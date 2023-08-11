<script lang="ts">
  import { cva } from 'class-variance-authority';

  import type { MetricsStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import MetricsItem from './metrics-item.svelte';

  export let block: MetricsStoryblok;

  const grid = cva('grid gap-8 py-10 md:pt-20', {
    variants: {
      even: {
        true: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
        false: 'grid-cols-1 md:grid-cols-3'
      }
    }
  });
</script>

{#if block.metrics}
  <div use:storyblokEditable={block} class="bg-gray-1 text-gray-12">
    <div
      class={cn(
        'container mx-auto h-[300px] px-container',
        grid({ even: block.metrics.length % 2 === 0 })
      )}
    >
      {#each block.metrics as metric}
        <MetricsItem
          {metric}
          subtitleClassName={block.metrics.length > 3 ? 'max-w-[280px]' : 'max-w-[328px]'}
        />
      {/each}
    </div>
  </div>
{/if}
