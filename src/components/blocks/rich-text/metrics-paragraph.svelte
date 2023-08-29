<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { MetricsStoryblok } from '$types/bloks';

  import MetricsItem from '../metrics-item.svelte';

  export let block: MetricsStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class="flex flex-col gap-3 py-4 md:flex-row md:justify-between md:gap-10"
  >
    {#if block.metrics}
      {#each block.metrics as metric}
        <MetricsItem
          {metric}
          class="w-full gap-3 lg:h-[70px] lg:max-w-[192px] lg:items-start lg:gap-4"
          titleClassName="text-xl font-semibold"
          subtitleClassName="font-medium mt-1 lg:mt-[5px] tracking-wide"
        />
      {/each}
    {/if}
  </div>
{/if}
