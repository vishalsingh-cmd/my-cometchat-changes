<script lang="ts">
  import type { PricingTableGroupStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import PricingTableDataLine from './pricing-table-data-line.svelte';

  export let group: PricingTableGroupStoryblok;
</script>

{#if group}
  {@const { title, lines } = group}
  <div use:storyblokEditable={group} class="flex flex-col">
    <p class="py-8 text-xl/tighter font-semibold text-gray-12">{title}</p>
    {#if lines && lines.length > 0}
      {#each lines as line}
        <PricingTableDataLine {line} />
      {/each}
    {/if}
  </div>
{/if}
