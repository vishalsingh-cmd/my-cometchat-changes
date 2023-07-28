<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type {
    BulletPointStoryblok,
    ListsSectionItemStoryblok,
    ListsSectionStoryblok
  } from '$types/bloks';

  import Item from '$components/lists-section/item.svelte';
  import Title from '$components/lists-section/title.svelte';
  import Tabs from '$components/tabs/tabs.svelte';

  export let block: ListsSectionStoryblok;

  let innerWidth = 0;
  let selectedItemIndex = 0;

  const splitArray = (array: BulletPointStoryblok[], size: number) => {
    const tempSize = Math.ceil(array.length / size);
    const res = [];

    for (let i = 0; i < array.length; i += tempSize) {
      const chunk = array.slice(i, i + tempSize);
      res.push(chunk);
    }
    return res;
  };

  const numberOfSplitsBasedOnWindowSize = (numberOfColumns: number, screenWidth: number) => {
    if (numberOfColumns === undefined) {
      return 4;
    }

    if (screenWidth < 768) {
      return 1;
    }
    if (screenWidth < 1024) {
      return numberOfColumns === 3 || numberOfColumns === 5 ? 3 : 2;
    }

    return numberOfColumns;
  };

  const splitMultiItemsIntoSubArrays = (array: ListsSectionItemStoryblok[], windowSize: number) => {
    if (windowSize < 768 || windowSize > 1024) {
      return [array];
    }

    const tempSize = Math.ceil(array.length / 2);

    const res = [];

    for (let i = 0; i < array.length; i += tempSize) {
      const chunk = array.slice(i, i + tempSize);
      res.push(chunk);
    }

    return res as ListsSectionItemStoryblok[][];
  };

  const onOptionSelect = (e: CustomEvent) => {
    selectedItemIndex = e.detail.i;
  };
</script>

<svelte:window bind:innerWidth />
{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme}
    class="bg-gray-1 pb-10 pt-5 text-gray-12 md:py-16"
  >
    <div class="container mx-auto px-container">
      {#if block.items.length === 1}
        {@const item = block.items[0]}
        <!-- We know that the column amount will always be 3, 4 or 5 -->
        {@const parsedColumnCount = parseInt(
          block.single_item_columns_count ? block.single_item_columns_count.toString() : '4'
        )}
        <div>
          <div class="flex flex-col">
            <Title title={item.title} />
            <div
              class={cn(
                'relative mt-8 flex flex-col gap-px before:absolute before:inset-0 before:hidden before:h-full before:w-full before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-[#DCDCE0] before:to-[#FAFAFF00] before:to-80% md:mt-12 md:grid md:before:block',
                parsedColumnCount === 3 && 'md:grid-cols-3',
                parsedColumnCount === 4 && 'md:grid-cols-2 lg:grid-cols-4',
                parsedColumnCount === 5 && 'md:grid-cols-3 lg:grid-cols-5'
              )}
            >
              {#if item.items[0].items}
                {@const subArrays = splitArray(
                  item.items[0].items,
                  numberOfSplitsBasedOnWindowSize(parsedColumnCount, innerWidth) ?? 4
                )}
                {#each subArrays as subArray, i}
                  <div
                    class={cn(
                      'isolate flex flex-col gap-5 bg-gray-1 pb-5 pr-8 md:gap-6 md:pb-8 md:pr-2',
                      i !== 0 && 'md:pl-4 md:pr-2 lg:px-8'
                    )}
                  >
                    {#each subArray as subArrayItem}
                      <Item item={subArrayItem} />
                    {/each}
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        </div>
      {:else}
        {@const splittedArray = splitMultiItemsIntoSubArrays(block.items, innerWidth)}
        {@const itemsAsTabs = block.items.map((item, i) => ({
          id: i,
          label: item.title
        }))}
        <!-- Mobile Layout when we have multiple items -->
        <div class="block md:hidden">
          <Tabs
            options={itemsAsTabs}
            activeTab={selectedItemIndex}
            on:optionSelect={onOptionSelect}
            class="pl-0 pr-0"
          />
          {#if block.items[selectedItemIndex]}
            {@const item = block.items[selectedItemIndex]}
            <div class={cn('flex h-full flex-col gap-6 bg-gray-1 pt-5')}>
              {#each item.items[0].items as subItem}
                <Item item={subItem} />
              {/each}
            </div>
          {/if}
        </div>

        <!-- Tablet and Larger Screens Layout when we have multiple items -->
        {#each splittedArray as subArray}
          <div
            class={cn(
              'relative hidden gap-px before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-[#DCDCE0] before:to-[#FAFAFF00] before:to-80% md:grid',
              // When we have a sub array of 2, we want to fit the gradient into those two and not expand it the entire width
              subArray.length === 2 && 'md:w-2/3 md:grid-cols-2',
              subArray.length === 3 && 'md:grid-cols-3',
              subArray.length === 4 && 'md:grid-cols-2 lg:grid-cols-4',
              subArray.length === 5 && 'md:grid-cols-3 lg:grid-cols-5'
            )}
          >
            {#each subArray as item, i}
              <div class="isolate flex flex-col gap-px">
                <Title class={cn('pb-8 pr-8 pt-12 ', i !== 0 && 'px-8')} title={item.title} />
                <div
                  class={cn(
                    'flex h-full flex-col gap-6 bg-gray-1 pb-8 pr-8 pt-12',
                    i !== 0 && 'px-8'
                  )}
                >
                  {#each item.items[0].items as subItem}
                    <Item item={subItem} />
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/each}
      {/if}
    </div>
  </section>
{/if}
