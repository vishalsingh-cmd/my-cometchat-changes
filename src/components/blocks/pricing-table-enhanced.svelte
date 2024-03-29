<script lang="ts">
  import PricingTableHeaderEnhanced from './../pricing/enhanced/pricing-table-header-enhanced.svelte';
  import PricingTableDataEnhanced from './../pricing/enhanced/pricing-table-data-enhanced.svelte';
  import type { PricingTableEnhancedStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Sticky from '$components/sticky.svelte';

  let activePlanIndex = 0;
  let activeTabIndex = 0;
  export let block: PricingTableEnhancedStoryblok | undefined;
</script>

{#if block}
  {@const { header, data } = block}
  <section data-theme="dark" use:storyblokEditable={block}>
    <div class="container relative z-10 mx-auto w-full items-center justify-center px-container">
      <!-- Header -->
      {#if header}
        <Sticky
          translateOnDesktop
          class="data-[sticky]:border-b data-[sticky]:border-gray-12/8 xl:data-[sticky]:border-b-0"
        >
          <PricingTableHeaderEnhanced
            bind:activeTab={activePlanIndex}
            {header}
            on:tabChange={(e) => {
              activeTabIndex = e.detail;
            }}
          />
        </Sticky>
      {/if}
      <!-- Data -->
      {#if data}
        <PricingTableDataEnhanced activeTab={activePlanIndex} {data} {activeTabIndex} />
      {/if}
    </div>
  </section>
{/if}
