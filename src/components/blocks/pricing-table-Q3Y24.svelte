<script lang="ts">
  import { cn } from '$lib/utils';
  import {
    isBilledAnnualy,
    lastSelectedMAUIndex,
    maus,
    pricingValues
  } from '$lib/stores/pricing-stores';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import PricingTableLineQ3Y24 from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';
  import Sticky from '$components/sticky.svelte';

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
  <Sticky
    translateOnDesktop
    class="w-[1312px] data-[sticky]:border-b data-[sticky]:border-gray-12/8 xl:data-[sticky]:border-b-0"
  >
    <div class={cn('grid h-[131px] grid-flow-col border-b border-gray-6 bg-gray-1')}>
      <div class="w-[346px] border-b border-r border-gray-6" />
      {#each Object.keys($pricingValues) as plan, index}
        <div
          class={cn(
            'flex w-[240px] flex-col items-center justify-center border-b border-gray-6',
            index != Object.keys($pricingValues).length - 1 && 'border-r'
          )}
        >
          <p class="text-xl/normal font-semibold tracking-wide">{plan}</p>
          <p class="text-lg/normal font-medium tracking-wide opacity-74">
            {$pricingValues[plan].price}/month
          </p>
          <p class="text-lg/tight font-medium tracking-wide opacity-74">
            {$isBilledAnnualy ? (index == 0 ? 'Free Forever' : 'Billed annualy') : ''}
          </p>
        </div>
      {/each}
    </div>
  </Sticky>
  <table class="w-[1312px] table-auto">
    {#each block.data as item, index}
      <tr
        class={cn(
          'sticky top-6 z-20 border-b border-gray-6 bg-gray-1 text-2xl leading-[33.92px]',
          $scrollDirection === 'up' && !$page.route.id?.startsWith('/lp/') && 'top-top-nav',
          $scrollDirection !== 'up' || ($page.route.id?.startsWith('/lp/') && 'top-6')
        )}><td class="py-[26px]">{item.title}</td></tr
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
          <tr
            class={cn(
              'sticky top-20 z-20 border-b border-gray-6 bg-gray-1 p-5 text-lg leading-[21.6px] '
            )}
          >
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
