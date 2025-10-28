<script lang="ts">
  import { cn } from '$lib/utils';
  import { activateTable, isBilledAnnualy, maus, pricingValues } from '$lib/stores/pricing-stores';
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';
  import PricingTableLineQ3Y24 from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';
  import TitleSection from './title-section.svelte';
  import Dropdown from '$components/dropdown.svelte';
  import PricingTableLineQ3Y24Portrait from './pricing-table-line-Q3Y24/pricing-table-line-Q3Y24-portrait.svelte';
  import Button from '$components/buttons/button.svelte';

  export let block;
  let limit = block.collapsed_items_count;
  let selectedOption = 2;
  let currentRowIndex = 1;

  let label = 'Expand all Features';
  let icon = 'chevron-down';
  let data = [];
  let ranOnce = false;
  async function toggleTable() {
    if (isExpanded) {
      data = [];
      let limitReached = false;
      let lineItemsLength = 0;
      for (let i = 0; i < block?.data.length; i++) {
        limitReached = lineItemsLength > limit;
        if (limitReached) break;
        if (block?.data[i]?.title) lineItemsLength++;
        let tempGroup = { ...block.data[i], subgroup: [] };
        for (let j = 0; j < block?.data[i]?.subgroup?.length; j++) {
          limitReached = lineItemsLength >= limit;
          if (limitReached) break;
          if (block?.data[i]?.subgroup[j]?.lines) {
            lineItemsLength++;
            let tempSubgroup = { ...block?.data[i]?.subgroup[j], lines: [] };
            for (let k = 0; k < block?.data[i]?.subgroup[j]?.lines?.length; k++) {
              limitReached = lineItemsLength > limit;
              if (limitReached) break;
              lineItemsLength++;
              tempSubgroup.lines.push(block.data[i].subgroup[j].lines[k]);
              limitReached = lineItemsLength >= limit;
            }
            if (tempSubgroup.lines.length > 0)
              tempGroup.subgroup = [...tempGroup.subgroup, { ...tempSubgroup }];
          } else {
            lineItemsLength++;
            let tempLine = block?.data[i]?.subgroup[j];
            if (tempLine) tempGroup.subgroup.push(tempLine);
          }
        }
        if (tempGroup.subgroup.length > 0) data.push(tempGroup);
        label = 'Expand all Features';
        icon = 'chevron-down';
      }

      if (ranOnce) {
        currentRowIndex = 1;
        let lg = 1024;
        let element;
        if (window.innerWidth < lg) element = document.getElementById('mini-pricing-table-Q3Y24');
        else element = document.getElementById('pricing-table-Q3Y24');

        await tick();
        const top = element?.offsetTop + element?.offsetHeight / 2;
        if (top) {
          window.scrollTo(0, top);
        }
      }
    } else {
      data = block.data;
      label = 'Collapse all Features';
      icon = 'chevron-up';
    }
    isExpanded = !isExpanded;
    if (!ranOnce) ranOnce = true;
  }

  let isOpen = false;
  let isExpanded = true;
  toggleTable();
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
  let plans = Object.keys($pricingValues);
  plans = plans.map((plan) => {
    return {
      label: plan,
      value: plan
    };
  });
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
  <div class="container mx-auto pb-[80px]">
    <TitleSection block={block.title[0]} />
    <div class="hidden px-container lg:block" id="pricing-table-Q3Y24">
      <table class="relative table-auto">
        <div
          class="pointer-events-none absolute top-0 z-30 mt-14 flex h-full w-full items-end justify-center"
        >
          <Button
            {icon}
            class={cn(
              'pointer-events-auto  sticky mt-[40%] w-[320px]',
              isExpanded && 'bottom-2',
              !isExpanded && 'bottom-36'
            )}
            on:click={() => toggleTable()}>{label}</Button
          >
        </div>
        <div
          class={cn(
            'pointer-events-none absolute z-20 flex h-56 w-full items-end justify-center',
            isExpanded && '-bottom-10',
            !isExpanded && '-bottom-2 bg-gradient-to-b from-[#0F0B1E]/2 to-[#0F0B1E]/90'
          )}
        />
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
              <p class="px-4 text-center text-lg/normal font-medium tracking-wide opacity-74">
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
              </p>
            </th>
          {/each}
        </tr>
        <!-- </Sticky> -->
        {#each data as item, index}
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
    <div class="relative lg:hidden" id="mini-pricing-table-Q3Y24">
      <div
        class="pointer-events-none absolute top-0 z-30 mt-14 flex h-full w-full items-end justify-center"
      >
        <Button
          {icon}
          class={cn(
            'pointer-events-auto sticky mt-[80%] w-[320px]',
            isExpanded && 'bottom-2',
            !isExpanded && 'bottom-20'
          )}
          on:click={() => toggleTable()}>{label}</Button
        >
      </div>
      <div
        class={cn(
          'pointer-events-none absolute z-20 flex h-56 w-full items-end justify-center',
          isExpanded && '-bottom-11',
          !isExpanded && '-bottom-2 bg-gradient-to-b from-[#0F0B1E]/2 to-[#0F0B1E]/100'
        )}
      />
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
      <div class="relative flex flex-col px-container">
        {#each data as item, index}
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
