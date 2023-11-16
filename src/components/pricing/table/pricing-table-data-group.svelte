<script lang="ts">
  import type { PricingTableGroupStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Sticky from '$components/sticky.svelte';
  import PricingTableDataLine from './pricing-table-data-line.svelte';

  export let group: PricingTableGroupStoryblok;
</script>

{#if group}
  {@const { title, lines } = group}
  <div use:storyblokEditable={group} class="flex flex-col bg-gray-1">
    <Sticky
      translateOnDesktop
      class="top-[133px] z-10 data-[sticky]:border-b data-[sticky]:border-gray-12/8"
    >
      <p class="bg-gray-1 py-8 text-xl/tighter font-semibold text-gray-12">{title}</p>
    </Sticky>
    {#if lines && lines.length > 0}
      {#each lines as line}
        <PricingTableDataLine {line} />
      {/each}
    {/if}
  </div>
{/if}
