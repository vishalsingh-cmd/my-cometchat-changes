<script lang="ts">
  import { cn } from '$lib/utils';
  import {
    activateTable,
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
  import TitleSection from './title-section.svelte';
  import Dropdown from '$components/dropdown.svelte';
  import PricingTableLineQ3Y24Portrait from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24-portrait.svelte';

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
  let plans: any = Object.keys($pricingValues);
  plans = plans.map((plan) => {
    return {
      label: plan,
      value: plan
    };
  });
  let selectedOption = 2;
  onMount(() => {
    convertedMaus = convertMAUSToNumber($maus);
  });
</script>

{#if $activateTable}
  <div class="container mx-auto">
    <TitleSection block={block.title[0]} />
    <div class="hidden px-container md:block" id="pricing-table-Q3Y24">
      <Sticky
        translateOnDesktop
        class="data-[sticky]:border-b data-[sticky]:border-gray-12/8 lg:w-[1382px] xl:data-[sticky]:border-b-0"
      >
        <div class={cn('grid h-[131px] grid-flow-col border-b border-gray-6 bg-brand-4')}>
          <div
            class={cn(
              'flex min-w-[401px] items-center border-b border-r border-gray-6 pl-4 text-2xl leading-[33.92px]'
            )}
          >
            Usage
          </div>
          {#each Object.keys($pricingValues) as plan, index}
            <div
              class={cn(
                'relative flex min-w-[246px] flex-col items-center justify-center border-b border-gray-6 lg:w-[246px]',
                index != Object.keys($pricingValues).length - 1 && 'border-r',
                index == 2 && 'bg-brand-5'
              )}
            >
              {#if index == 2}
                <p
                  class="absolute -top-10 flex h-10 w-full items-center justify-center rounded-t-3xl border border-brand-12/2 bg-brand-9 lg:w-[246px]"
                >
                  Most popular
                </p>
              {/if}
              <p class="text-xl/normal font-semibold tracking-wide">{plan}</p>
              <p class="px-4 text-center text-lg/normal font-medium tracking-wide opacity-74">
                {$pricingValues[plan].price}
                {#if $pricingValues[plan].price.startsWith('$')}
                  <span class="-ml-1.5">/month</span>
                {/if}
              </p>
              <p class="text-lg/tight font-medium tracking-wide opacity-74">
                {$isBilledAnnualy && $pricingValues[plan].price.startsWith('$')
                  ? index == 0
                    ? 'Free Forever'
                    : 'Billed annualy'
                  : ''}
              </p>
            </div>
          {/each}
        </div>
      </Sticky>
      <table class="table-auto lg:w-[1312px]">
        {#each block.data as item, index}
          {#if item.title}
            <tr
              class={cn(
                'sticky top-6 z-20 border-b border-gray-6 bg-brand-4 text-2xl leading-[33.92px]',
                $scrollDirection === 'up' && !$page.route.id?.startsWith('/lp/') && 'top-[88px]',
                $scrollDirection !== 'up' || ($page.route.id?.startsWith('/lp/') && 'top-6')
              )}><td class="border-r border-gray-6 py-[26px] pl-4">{item.title}</td></tr
            >
          {/if}
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
              {#if line.title}
                <tr
                  class={cn(
                    'sticky top-20 z-20 border-b border-gray-6 bg-brand-4 p-5 text-lg leading-[21.6px]',
                    $scrollDirection === 'up' &&
                      !$page.route.id?.startsWith('/lp/') &&
                      'top-[144px]'
                  )}
                >
                  <td class="border-r border-gray-6 py-3 pl-4">{line.title}</td></tr
                >
              {/if}
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

    <!-- mobile layout -->
    <div class="px-container md:hidden" id="mini-pricing-table-Q3Y24">
      <Sticky
        translateOnDesktop
        class=" data-[sticky]:border-b data-[sticky]:border-gray-12/8 xl:data-[sticky]:border-b-0"
      >
        <Dropdown
          class="z-30 w-full"
          options={plans}
          bind:selectedOption
          on:optionSelect={(e) => {
            selectedOption = e.detail.i;
          }}
        />
        <div class={cn('flex h-[100px] border-b border-gray-6 bg-brand-4')}>
          <div
            class="flex w-[232px] items-center border-b border-r border-gray-6 pl-4 text-2xl leading-[33.92px]"
          >
            Usage
          </div>
          <!-- {#each Object.keys($pricingValues) as plan, index} -->
          <div class={cn('relative flex items-center justify-center border-b border-gray-6 p-2 ')}>
            <!-- {#if selectedOption == 2}
              <p
                class="absolute -top-10 flex h-10  items-center justify-center rounded-t-3xl border border-brand-12/2 bg-brand-9"
              >
                Most popular
              </p>
            {/if} -->
            <p class="w-full text-xl/normal font-semibold tracking-wide">
              {plans[selectedOption].label}
            </p>
          </div>
        </div>
      </Sticky>
      <div class="flex flex-col">
        {#each block.data as item, index}
          {#if item.title}
            <tr
              class={cn(
                'sticky top-[37px] z-20 w-[232px] border-b border-gray-6 bg-brand-4 text-2xl leading-[33.92px] md:top-6',
                $scrollDirection === 'up' &&
                  !$page.route.id?.startsWith('/lp/') &&
                  'top-[103px] lg:top-top-nav'
              )}><td class="py-[26px] pl-4">{item.title}</td></tr
            >
          {/if}
          {#if index == 0}
            <PricingTableLineQ3Y24Portrait
              {plans}
              {selectedOption}
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
              {#if line.title}
                <div
                  class={cn(
                    'sticky top-[92px] z-20 w-full border-b border-gray-6 leading-[21.6px] md:top-20 md:text-lg',
                    $scrollDirection === 'up' &&
                      !$page.route.id?.startsWith('/lp/') &&
                      'top-[156px] lg:top-top-nav'
                  )}
                >
                  <td class="w-[232px] bg-brand-4 py-3 pl-4">{line.title}</td>
                </div>
              {/if}
              {#each lines as line}
                <PricingTableLineQ3Y24Portrait block={line} {plans} {selectedOption} />
              {/each}
            {:else}
              <PricingTableLineQ3Y24Portrait block={line} {plans} {selectedOption} />
            {/if}
          {/each}
        {/each}
      </div>
      <!-- <p class="text-lg/normal font-medium tracking-wide opacity-74">
              {$pricingValues[plan].price}/month
            </p>
            <p class="text-lg/tight font-medium tracking-wide opacity-74">
              {$isBilledAnnualy ? (index == 0 ? 'Free Forever' : 'Billed annualy') : ''}
            </p> -->
    </div>
    <!-- {/each} -->
  </div>
{/if}
