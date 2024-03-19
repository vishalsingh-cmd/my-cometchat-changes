<script lang="ts">
  import AccordionGroup from '$components/accordion-group.svelte';
  import Accordion from '$components/accordion.svelte';
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  import PricingTableDataGroup from './pricing-table-data-group-enhanced.svelte';

  export let activeTab = 0;
  export let data: PricingTableGroupEnhancedStoryblok[];
  $: selectedTabName = (['grow', 'scale'] as const)[activeTab];
</script>

{#if data}
  <!-- Descktop -->
  <div class="flex hidden grid-cols-6 flex-col lg:grid">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group, i}
        <PricingTableDataGroup {group} />
      {/each}
    </AccordionGroup>
  </div>

  <!-- Mobile -->
  <div class="flex grid-cols-6 flex-col lg:hidden">
    <AccordionGroup expanded={data[0].title}>
      {#each data as group, i}
        <Accordion title={group.title} expanded={i === activeTab}>
          <PricingTableDataGroup {group} />
        </Accordion>
      {/each}
    </AccordionGroup>
  </div>

  <!-- Mobile -->
  <!-- <div class="mb-12 mt-5 flex flex-col flex-wrap gap-4 lg:hidden">
    <AccordionGroup>
      {#each data as group, i}
        {@const { title, lines } = group}
        {@const parsedLines = lines.map((line) => ({
          name: line.name,
          icon: line[selectedTabName]
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
              {#if line.icon}
                {@const { name } = line}
                {@const { icon, color } = getPricingIcon(line.icon)}
                <div class="flex justify-between py-4">
                  {#if name}
                    <p class="text-lg/snug font-medium tracking-wide text-gray-12 opacity-74">
                      {name}
                    </p>
                  {/if}

                  <Icon {icon} class={cn(color, 'h-[22-px] w-[22px]')} />
                </div>
              {/if}
            {/each}
          </div>
        </Accordion>
      {/each}
    </AccordionGroup>
  </div> -->
{/if}
