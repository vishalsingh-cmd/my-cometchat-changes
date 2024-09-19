<script lang="ts">
  import PricingTableLineQ3Y24 from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24.svelte';

  export let block;
  //   console.log('pricing table Q3y24', block);
</script>

<div class="flex w-full flex-col gap-3">
  {#each block.data as item, index}
    <p>{item.title}</p>
    {@const lines = item?.subgroup}
    <!-- {#if row.lines}
      {@const lines = row.lines}
      <p>{row.title}</p>
      {#each lines as line}
        <PricingTableLineQ3Y24 block={line} />
      {/each}
    {:else} -->
    <!-- {@const lines = row} -->
    {#each lines as line}
      {#if line.lines}
        {@const lines = line.lines}
        <p>{line.title}</p>
        {#each lines as line}
          <PricingTableLineQ3Y24 block={line} />
        {/each}
      {:else}
        <PricingTableLineQ3Y24 block={line} />
      {/if}
    {/each}
    <!-- {/if} -->
  {/each}
</div>
