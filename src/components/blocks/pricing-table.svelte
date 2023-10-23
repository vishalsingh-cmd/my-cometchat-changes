<script lang="ts">
  import type { PricingTableStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import PricingTableData from '$components/pricing/table/pricing-table-data.svelte';
  import PricingTableHeader from '$components/pricing/table/pricing-table-header.svelte';

  export let block: PricingTableStoryblok;
</script>

{#if block}
  {@const { header, data } = block}
  <section data-theme="dark" class="overflow-hidden" use:storyblokEditable={block}>
    <div class="container relative z-10 mx-auto px-container">
      <!-- Header -->
      {#if header}
        <PricingTableHeader {header} />
      {/if}
      <!-- Data -->
      {#if data}
        <PricingTableData {data} />
      {/if}
    </div>
  </section>
{/if}
