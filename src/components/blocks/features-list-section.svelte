<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';

  import { getImageAttributes } from '$lib/storyblok';

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
        <Title label={{ content: header.label, color: 'orange' }} title={header.title} />
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
          <div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3">
            {#each item.items as subItem, i}
              <div
                class={cn(
                  'row-start-1 row-end-3 border-gray-12/[0.08] md:border-b-0',
                  item.items.length === 4 && i === 2 && 'row-start-2',
                  item.items.length === 4 && i === 1 && 'row-end-2',
                  (i === 0 || i === 1 || (item.items.length === 4 && i === 2)) && 'md:border-r',
                  item.items.length === 4 && i === 1 && 'md:border-b',
                  i < item.items.length - 1 && 'border-b',
                  (i === 0 || i === 2) && 'md:col-start-1',
                  (i === 1 || i === 3) && 'md:col-start-2',
                  (i === 0 || i === 1) && 'md:row-start-1',
                  (i === 2 || i === 3) && 'md:row-start-2'
                )}
              >
                <p
                  class={cn(
                    'p-5 text-xl font-semibold leading-tighter md:p-10',
                    i === 0 && 'pl-container'
                  )}
                >
                  {subItem.title}
                </p>
                {#if subItem.content.length > 0}
                  {#each subItem.content as contentItem}
                    {#if contentItem.items}
                      <div
                        class={cn(
                          'flex flex-col gap-3 p-5 pt-0 md:px-10 md:pb-16',
                          i === 0 && 'md:pl-container'
                        )}
                      >
                        {#each subItem.content[0].items as contentItem}
                          <div class="flex items-center gap-2">
                            <Icon icon="star-04" size="xs" class="flex-shrink-0 text-brand-9" />
                            <p class="text-lg font-medium leading-snug tracking-wide">
                              {contentItem.item}
                            </p>
                          </div>
                        {/each}
                      </div>
                    {/if}
                    {#if contentItem.illustration}
                      {@const { src, alt, width, height } = getImageAttributes(
                        contentItem.illustration
                      )}
                      <img {src} {alt} {width} {height} />
                    {/if}
                  {/each}
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </section>
{/if}
