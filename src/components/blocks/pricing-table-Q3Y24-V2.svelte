<script lang="ts">
  import { cn } from '$lib/utils';
  import { activateTable, maus, pricingValues } from '$lib/stores/pricing-stores';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import PricingTableLineQ3Y24 from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';
  import TitleSection from './title-section.svelte';
  import Dropdown from '$components/dropdown.svelte';
  import PricingTableLineQ3Y24Portrait from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24-portrait.svelte';

  export let block;
  let isOpen = false;
  // let mauContent =
  //   'Monthly active users (MAU) {Monthly active users represent the total number of unique users who log in to CometChat during your billing period.}';
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

  let currentRowIndex = 1;
  function analyseCurrentRowIndex() {
    let lg = 1024;
    let offset = 100;
    let elements;
    if (window.innerWidth < lg) {
      elements = document.querySelectorAll('[data-row-portrait-index]');
      offset = 140;
    } else elements = document.querySelectorAll('[data-row-index]');
    for (let i = 0; i < elements.length; i++) {
      const top = elements[i].getBoundingClientRect().top;
      if (
        elements[currentRowIndex - 1].getBoundingClientRect().top > offset &&
        currentRowIndex != 1
      ) {
        currentRowIndex -= 1;
      }
      if (top > 0 && top < offset) {
        currentRowIndex = i + 1;
      }
    }
  }
  onMount(() => {
    convertedMaus = convertMAUSToNumber($maus);
    analyseCurrentRowIndex();
  });
</script>

{#if $activateTable}
  <div class="container mx-auto">
    <TitleSection block={block.title[0]} />
    <div class="hidden px-container lg:block" id="pricing-table-Q3Y24">
      <table class="table-auto">
        <tr
          class={cn(
            'sticky top-0 z-20 w-full border-b border-gray-4 bg-[#0F0B1E]',
            $scrollDirection === 'up' && !$page.route.id?.startsWith('/lp/') && 'top-[64px]'
          )}
        >
          <td
            class={cn(
              'max-w-[440px] items-center border-b border-r border-gray-4 py-12 pl-4 text-2xl leading-[33.92px] xl:min-w-[390px] 2xl:min-w-[440px]'
            )}
          >
            {#if currentRowIndex === 1}
              Usage
            {/if}
          </td>
          {#each Object.keys($pricingValues) as plan, index}
            <th
              class={cn(
                'relative h-full max-w-[228px] flex-shrink flex-grow-0 flex-col items-center justify-start gap-0 border-b border-gray-4 px-5 xl:min-w-[205px] 2xl:min-w-[238px]',
                index != Object.keys($pricingValues).length - 1 && 'border-r',
                index == 2 && 'bg-[#6852D61A]'
              )}
            >
              {#if index == 2}
                <p
                  class="absolute -top-10 left-0 flex h-10 w-[100%] items-center justify-center rounded-t-3xl border border-brand-12/2 bg-brand-9 text-md font-[640]"
                >
                  Most popular
                </p>
              {/if}
              <p class="text-xl/normal font-semibold tracking-wide">{plan}</p>
              <!-- <p class="px-4 text-center text-lg/normal font-medium tracking-wide opacity-74">
                {#if plan !== 'Build'}
                  {$pricingValues[plan].price}
                {:else}
                  Free Forever
                {/if}
                {#if $pricingValues[plan].price.startsWith('$') && plan !== 'Build'}
                  <span class="-ml-[4px]">/month</span>
                {/if}
              </p>
              <p class="text-md font-medium tracking-wide opacity-74">
                {$isBilledAnnualy && $pricingValues[plan].price.startsWith('$') && plan !== 'Build'
                  ? 'Billed annually'
                  : ''}
              </p> -->
            </th>
          {/each}
        </tr>
        <!-- </Sticky> -->
        {#each block.data as item, index}
          {#if item.title}
            <tr
              data-row-index={index}
              class={cn(
                'border-b border-gray-4 bg-[#0F0B1E] text-2xl leading-[33.92px]',
                index === currentRowIndex && 'sticky top-6 z-20',
                index === currentRowIndex &&
                  $scrollDirection === 'up' &&
                  !$page.route.id?.startsWith('/lp/') &&
                  'top-[88px]',
                (index === currentRowIndex && $scrollDirection !== 'up') ||
                  ($page.route.id?.startsWith('/lp/') && 'top-6')
              )}><td class="py-[26px] pl-4">{item.title}</td></tr
            >
          {/if}
          <!-- {#if index == 0}
            <PricingTableLineQ3Y24
              block={{
                name_and_description: mauContent,
                build: '100/mo',
                basic: `${convertedMaus[$lastSelectedMAUIndex]}/mo`,
                advanced: `${convertedMaus[$lastSelectedMAUIndex]}/mo`,
                enterprise: `${convertedMaus[$lastSelectedMAUIndex]}/mo`
              }}
            />
          {/if} -->
          {@const lines = item?.subgroup}
          {#each lines as line}
            {#if line?.lines}
              {@const lines = line.lines}
              {#if line.title}
                <tr class={cn('border-b border-gray-4 text-lg leading-[21.6px]')}>
                  <td class="py-5 pl-4">{line.title}</td></tr
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
    <div class="lg:hidden" id="mini-pricing-table-Q3Y24">
      <div
        class={cn(
          'sticky top-0 flex h-[123px] w-full flex-col items-center bg-[#0F0B1E] px-0 pt-4',
          $scrollDirection === 'up' && !$page.route.id?.startsWith('/lp/') && 'top-top-nav',
          isOpen && 'z-30',
          !isOpen && 'z-20'
        )}
      >
        <div class="w-full px-container">
          <Dropdown
            bind:isOpen
            class="mx-2 w-[95%]"
            chevronUp={false}
            options={plans}
            bind:selectedOption
            on:optionSelect={(e) => {
              selectedOption = e.detail.i;
            }}
          />
          <div
            class="mt-auto flex items-center border-b border-gray-4 bg-[#0F0B1E] py-[20px] pl-4 text-xl leading-[23.92px]"
          >
            {#if currentRowIndex === 1}
              Usage
            {/if}
          </div>
        </div>
      </div>
      <div class="flex flex-col px-container">
        {#each block.data as item, index}
          {#if item.title}
            <tr
              data-row-portrait-index={index}
              class={cn(
                'isolate border-b border-gray-4 bg-[#0F0B1E] text-xl leading-[23.92px] ',
                index === currentRowIndex && 'sticky top-[64px] z-20',
                index === currentRowIndex &&
                  $scrollDirection === 'up' &&
                  !$page.route.id?.startsWith('/lp/') &&
                  'top-[130px]'
              )}><td class="py-[20px] pl-4">{item.title}</td></tr
            >
          {/if}
          <!-- {#if index == 0}
            <PricingTableLineQ3Y24Portrait
              {plans}
              {selectedOption}
              block={{
                name_and_description: mauContent,
                build: '100/mo',
                basic: `${convertedMaus[$lastSelectedMAUIndex]}/mo`,
                advanced: `${convertedMaus[$lastSelectedMAUIndex]}/mo`,
                enterprise: `${convertedMaus[$lastSelectedMAUIndex]}/mo`
              }}
            />
          {/if} -->
          {@const lines = item?.subgroup}
          {#each lines as line}
            {#if line?.lines}
              {@const lines = line.lines}
              {#if line.title}
                <div class={cn('w-full border-b border-gray-4 text-lg leading-[21.6px]')}>
                  <td class="w-[232px] py-3 pl-4">{line.title}</td>
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
    </div>
  </div>
{/if}

<svelte:document on:scroll={analyseCurrentRowIndex} />
