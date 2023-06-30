<script lang="ts">
  import FeaturesListSectionItem from '$components/features-list-section-item.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';
  import type { FeaturesListSectionStoryblok } from '$types/bloks';

  export let block: FeaturesListSectionStoryblok;

  let selectedItemIndex = 0;
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
        <Title label={{ content: header.label, color: 'brand' }} title={header.title} />
      {/if}
      {#if block.items.length > 0}
        <div class="flex flex-row gap-4 px-container">
          {#each block.items as item, i}
            <button on:click={() => (selectedItemIndex = i)}>
              {item.title}
            </button>
          {/each}
        </div>
        {#if block.items[selectedItemIndex]}
          {@const item = block.items[selectedItemIndex]}
          {@const firstTwoItems = item.items.slice(0, 2)}
          {@const lastTwoItems = item.items.slice(2, 4)}
          {@const subArrays = [firstTwoItems, lastTwoItems]}
          <!-- Tablet -->
          <div class="hidden flex-row md:flex lg:hidden">
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
            class="flex flex-col gap-px border-b-gray-12/[0.08] bg-gray-12/[0.08] md:hidden lg:grid lg:grid-cols-3"
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
