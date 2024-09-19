<script lang="ts">
  import { cn } from '$lib/utils';
  import {
    isBilledAnnualy,
    lastSelectedMAUIndex,
    maus,
    pricingValues
  } from '$lib/stores/pricing-stores';
  import { onMount } from 'svelte';
  import PricingTableLineQ3Y24 from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24.svelte';

  export let block;
  function convertMAUSToNumber(maus: string[] | []) {
    maus = maus.map((mau) => {
      if (mau.includes('k')) {
        mau = mau.replace('k', ',000');
        return mau;
      } else if (mau.includes('M')) {
        mau = mau.replace('M', ',000,000+');
        return mau;
      } else return mau;
    });
    return maus;
  }
  let convertedMaus: string[] = [];
  onMount(() => {
    convertedMaus = convertMAUSToNumber($maus);
  });
</script>

<div class="container mx-auto px-container">
  <table class="w-[1312px] table-auto">
    <thead class="sticky top-0 h-[131px] border-b border-gray-6">
      <th class="border-b border-r border-gray-6" />
      {#each Object.keys($pricingValues) as plan, index}
        <th
          class={cn(
            'border-b border-gray-6',
            index != Object.keys($pricingValues).length - 1 && 'border-r'
          )}
          ><p class="text-xl/normal font-semibold tracking-wide">{plan}</p>
          <p class="text-lg/normal font-medium tracking-wide opacity-74">
            {$pricingValues[plan].price}/month
          </p>
          <p class="text-lg/tight font-medium tracking-wide opacity-74">
            {$isBilledAnnualy ? 'Billed annualy' : ''}
          </p></th
        >
      {/each}</thead
    >
    {#each block.data as item, index}
      <tr class="sticky top-0 border-b border-gray-6 text-2xl leading-[33.92px]"
        ><td class="py-[26px]">{item.title}</td></tr
      >
      {#if index == 0}
        <PricingTableLineQ3Y24
          block={{
            name_and_description: 'Monthly active users (MAU)',
            build: '100/mo',
            basic: `${convertedMaus[$lastSelectedMAUIndex]}/mo`,
            advanced: `${convertedMaus[$lastSelectedMAUIndex]}/mo`,
            enterprise: `${convertedMaus[$lastSelectedMAUIndex]}/mo`
          }}
        />
      {/if}
      {@const lines = item?.subgroup}
      {#each lines as line}
        {#if line?.lines}
          {@const lines = line.lines}
          <tr class="border-b border-gray-6 p-5 text-lg leading-[21.6px]">
            <td class="py-3">{line.title}</td></tr
          >
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
