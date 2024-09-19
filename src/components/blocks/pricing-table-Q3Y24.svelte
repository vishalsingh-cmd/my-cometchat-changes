<script lang="ts">
  import PricingTableLineQ3Y24 from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24.svelte';

  export let block;
  //   console.log('pricing table Q3y24', block);
</script>

<div class="container px-container">
  <table class="w-[1312px] table-auto">
    {#each block.data as item, index}
      <tr class="border-b border-gray-6">{item.title}</tr>
      {@const lines = item?.subgroup}
      {#each lines as line}
        {#if line?.lines}
          {@const lines = line.lines}
          <tr class="border-b border-gray-6">{line.title}</tr>
          {#each lines as line}
            <PricingTableLineQ3Y24 block={line} />
          {/each}
        {:else}
          <PricingTableLineQ3Y24 block={line} />
        {/if}
      {/each}
    {/each}
  </table>
</div>
