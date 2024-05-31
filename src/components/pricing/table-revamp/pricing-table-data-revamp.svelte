<script lang="ts">
  import AccordionGroup from '$components/accordion-group.svelte';
  import Accordion from '$components/accordion.svelte';
  import Icon from '$components/icon/icon.svelte';
  import { cn, getPricingIcon } from '$lib/utils';
  import type { PricingTableGroupRevampStoryblok } from '$types/bloks';
  import PricingTableDataGroupRevamp from './pricing-table-data-group-revamp.svelte';

  export let activeTab = 0;
  export let data: PricingTableGroupRevampStoryblok[];
  $: selectedTabName = (['basic', 'advanced', 'premium'] as const)[activeTab];
</script>

{#if data}
  <!-- Descktop -->
  <div class="hidden flex-col lg:grid">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group, i}
        <PricingTableDataGroupRevamp {group} />
      {/each}
    </AccordionGroup>
  </div>

  <!-- Mobile -->
  <div class="mb-12 mt-5 flex flex-col flex-wrap gap-4 lg:hidden">
    <AccordionGroup>
      {#each data as group, i}
        {@const { title, lines } = group}
        {@const parsedLines = lines.map((line) => ({
          name: line.name,
          item: line[selectedTabName]
        }))}
        <Accordion id={group.title + i}>
          <div slot="header" let:expanded let:attributes let:onClick class="w-full">
            <button
              {...attributes}
              class="flex w-full justify-between py-5 text-gray-12"
              on:click={onClick}
            >
              <p class="text-md/tight font-semibold tracking-wide">
                {title}
              </p>
              {#if expanded}
                <Icon icon="minus" size="sm" />
              {:else}
                <Icon icon="plus" size="sm" />
              {/if}
            </button>
          </div>
          <div class="flex flex-col">
            {#each parsedLines as line}
              {#if line.item}
                {@const { name, item } = line}
                <div class="flex justify-between py-4">
                  {#if name}
                    <p class="text-lg/snug font-medium tracking-wide text-gray-12 opacity-74">
                      {name}
                    </p>
                  {/if}
                  {#if item === 'no'}
                    {@const { icon, color } = getPricingIcon('none')}
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  {:else if item === 'addon'}
                    {@const { icon, color } = getPricingIcon('paid-add-on')}
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  {:else if item === 'yes'}
                    {@const { icon, color } = getPricingIcon('included')}
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  {:else}
                    <span class="self-center text-sm">{item}</span>
                  {/if}
                </div>
              {/if}
            {/each}
          </div>
        </Accordion>
      {/each}
    </AccordionGroup>
  </div>
{/if}
