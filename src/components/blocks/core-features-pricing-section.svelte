<script lang="ts">
  import type { CoreFeaturesPricingSectionStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Sticky from '$components/sticky.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import TitleSection from '$components/blocks/title-section.svelte';

  let activeTab = 0;

  export let block: CoreFeaturesPricingSectionStoryblok;
</script>

{#if block}
  {@const { title, items } = block}
  <section
    data-theme="dark"
    class="relative isolate bg-gray-1 pb-6 md:pb-[108px]"
    use:storyblokEditable={block}
  >
    {#if title && title.length > 0 && title[0]}
      <TitleSection block={title[0]} />
    {/if}

    {#if items && items.length > 0}
      {@const parsedItems = items.map((item, i) => ({
        id: i,
        label: item.title ?? '',
        content: item.items
      }))}

      <!-- Mobile -->
      <div class="flex flex-col md:hidden">
        <Sticky>
          <Tabs
            options={parsedItems}
            {activeTab}
            on:optionSelect={(e) => {
              activeTab = e.detail.i;
            }}
          />
        </Sticky>
        {#if items[activeTab]}
          {@const currentGroup = items[activeTab]}
          <div class="mt-5 flex flex-col gap-6 px-container">
            {#each currentGroup.items[0].items as item}
              <div class="flex w-fit items-center gap-2">
                <Icon class="text-brand-9" size="xs" icon="check-verified-01" />
                <p class="text-lg/snug font-medium tracking-wide opacity-74">
                  {item.item}
                </p>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Tablet and Desktop -->
      <div
        class="container mx-auto hidden gap-10 px-container md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
      >
        {#each items as { title, items: groupItems }}
          <div class="flex flex-col gap-6 text-gray-12">
            <p class="text-xl/tighter font-semibold">{title}</p>
            {#if groupItems && groupItems.length > 0 && groupItems[0]}
              <div class="flex flex-col gap-6">
                {#each groupItems[0].items as item}
                  <div class="flex w-fit items-center gap-2">
                    <Icon class="text-brand-9" size="xs" icon="check-verified-01" />
                    <p class="text-lg/snug font-medium tracking-wide opacity-74">
                      {item.item}
                    </p>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </section>
{/if}
