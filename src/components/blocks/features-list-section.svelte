<script lang="ts">
  import type { FeaturesListSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { cn, getLabelInfo } from '$lib/utils';

  import Tabs from '$components/tabs/tabs.svelte';
  import Title from '$components/title.svelte';
  import FeaturesListSectionItem from '$components/features-list-section-item.svelte';

  export let block: FeaturesListSectionStoryblok;

  let selectedItemIndex = 0;

  const onOptionSelect = (e: CustomEvent) => {
    selectedItemIndex = e.detail.i;
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="overflow-hidden bg-gray-1 text-gray-12"
  >
    <div class="mx-auto max-w-content">
      {#if block.header && block.header[0]}
        {@const header = block.header[0]}
        {@const labelInfo = getLabelInfo(header.label, 'brand')}
        <Title label={labelInfo} title={header.title} />
      {/if}
      {#if block.items.length > 0}
        {@const parsedItems = block.items.map((item, i) => ({
          id: i,
          label: item.title,
          content: item.items
        }))}
        <Tabs
          options={parsedItems}
          activeTab={selectedItemIndex}
          on:optionSelect={onOptionSelect}
        />
        {#if block.items[selectedItemIndex]}
          {@const item = block.items[selectedItemIndex]}
          {@const firstTwoItems = item.items.slice(0, 2)}
          {@const lastTwoItems = item.items.slice(2, 4)}
          {@const subArrays = [firstTwoItems, lastTwoItems]}
          <!-- Tablet -->
          <div
            class="hidden flex-row border border-t-0 border-b-gray-12/[0.08] shadow-[0_-1px_0_0_hsla(246,21%,9%,0.08)] md:flex lg:hidden"
          >
            {#each subArrays as array, i}
              <div class={cn('flex-1', i === 0 && 'border-r border-r-gray-12/[0.08]')}>
                {#each array as item, f}
                  <FeaturesListSectionItem {item} i={f} />
                {/each}
              </div>
            {/each}
          </div>

          <!-- Mobile and Desktop -->
          <div
            class="flex flex-col gap-px border border-l-0 border-r-0 border-t-0 border-b-gray-12/[0.08] bg-gray-12/[0.08] shadow-[0_-1px_0_0_hsla(246,21%,9%,0.08)] md:hidden lg:grid lg:grid-cols-3"
          >
            {#each item.items as subItem, i}
              {@const positioningFor4Items = [
                'col-start-1',
                'col-start-2 row-end-1',
                'col-start-2 row-start-2',
                'col-start-3'
              ]}
              {@const positioningFor3Items = ['col-start-1', 'col-start-2', 'col-start-3']}
              <div
                class={cn(
                  'row-start-1 row-end-3 bg-gray-1',
                  item.items.length === 4 && positioningFor4Items[i],
                  item.items.length === 3 && positioningFor3Items[i]
                )}
              >
                <FeaturesListSectionItem item={subItem} {i} />
              </div>
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </section>
{/if}
