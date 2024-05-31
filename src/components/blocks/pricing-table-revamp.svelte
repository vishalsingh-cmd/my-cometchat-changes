<script lang="ts">
  import type { PricingTableStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Sticky from '$components/sticky.svelte';

  import PricingTableHeader from '$components/pricing/table/pricing-table-header.svelte';
  import PricingTableDataRevamp from '$components/pricing/table-revamp/pricing-table-data-revamp.svelte';
  import { activateTable } from '$lib/stores/pricing-stores';

  let activePlanIndex = 0;
  export let block: PricingTableStoryblok;
</script>

{#if block && $activateTable}
  {@const { header, data } = block}
  <section data-theme="dark" use:storyblokEditable={block}>
    <div class="container relative z-10 mx-auto px-container">
      <!-- Header -->
      {#if header}
        <Sticky
          translateOnDesktop
          class="data-[sticky]:border-b data-[sticky]:border-gray-12/8 xl:data-[sticky]:border-b-0"
        >
          <PricingTableHeader bind:activeTab={activePlanIndex} {header} />
        </Sticky>
      {/if}
      <!-- Data -->
      {#if data}
        <PricingTableDataRevamp activeTab={activePlanIndex} {data} />
      {/if}
    </div>
  </section>
{/if}
