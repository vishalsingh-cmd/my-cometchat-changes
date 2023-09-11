<script lang="ts">
  import type { FeaturesAtGlanceSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Media from '$components/media.svelte';
  import Sticky from '$components/sticky.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import ListSection from './list-section.svelte';
  import Dropdown from '$components/dropdown.svelte';
  import ListSectionItem from '$components/list-section/list-section-item.svelte';
  import DesktopTabs from '$components/features-at-glance-section/desktop-tabs.svelte';

  let activeTab = 0;
  let activeButtonsTab = 0;
  let selectedFeatureIndex = 0;

  export let block: FeaturesAtGlanceSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="relative bg-gray-1 text-gray-12">
    {#if block.title}
      <p
        class="container mx-auto px-container pb-5 pt-10 text-2xl font-semibold leading-tighter lg:pb-[42px] lg:pt-20"
      >
        {block.title}
      </p>
    {/if}
    {#if block.features}
      {@const parsedTabsFeatures = block.features.map(({ title }, i) => ({
        id: i,
        label: title
      }))}
      {@const parsedDropdownFeatures = block.features[activeTab].feature_list.map(({ title }) => ({
        label: title,
        value: title
      }))}

      <Sticky>
        <Tabs
          {activeTab}
          options={parsedTabsFeatures}
          on:optionSelect={(e) => {
            activeTab = e.detail.i;
            activeButtonsTab = 0;
            selectedFeatureIndex = 0;
          }}
        />

        <div class="border-t border-gray-12/8">
          <!-- Mobile Dropdown -->
          <div class="container mx-auto w-full px-container md:hidden">
            <Dropdown
              class="my-4 w-full justify-between"
              flyOutClass="w-full justify-between"
              options={parsedDropdownFeatures}
              selectedOption={selectedFeatureIndex}
              on:optionSelect={(e) => {
                selectedFeatureIndex = e.detail.i;
                activeButtonsTab = e.detail.i;
              }}
            />
          </div>

          <!-- Desktop Tabs -->
          <DesktopTabs
            class="container mx-auto mt-4 px-container"
            options={block.features[activeTab].feature_list}
            activeTab={activeButtonsTab}
            on:optionSelect={(e) => {
              (activeButtonsTab = e.detail.i), (selectedFeatureIndex = e.detail.i);
            }}
          />
        </div>
      </Sticky>

      <div class="container mx-auto px-container pb-8 md:pb-12 md:pt-12">
        {#if block.features[activeTab].feature_list[activeButtonsTab]}
          {@const { image, items_right_of_image } =
            block.features[activeTab].feature_list[activeButtonsTab]}
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-[2fr,1fr] lg:gap-[54px]">
            {#if image}
              <div
                class="order-2 flex max-w-[864px] items-center justify-center overflow-hidden rounded-3xl border border-gray-12/[.04] bg-gray-12/[0.02] py-8 backdrop-blur-[20px] lg:order-1"
              >
                <div class="min-w-[318px] max-w-[555px] lg:w-full">
                  <Media
                    imageTransformOptions={{ size: [555, 0] }}
                    media={image}
                    class="w-full object-cover"
                  />
                </div>
              </div>
            {/if}

            {#if items_right_of_image}
              <div
                class="order-1 mt-8 flex flex-col gap-12 md:mt-0 md:grid md:grid-cols-2 md:gap-10 lg:order-2 lg:grid-cols-1 lg:flex-col xl:flex"
              >
                {#each items_right_of_image as item}
                  <ListSectionItem accentColour="brand" block={item} />
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      </div>

      {#if block.features[activeTab].feature_list[activeButtonsTab]}
        {@const { items } = block.features[activeTab].feature_list[activeButtonsTab]}
        {#if items && items[0]}
          <ListSection accentColour="brand" block={items[0]} />
        {/if}
      {/if}
    {/if}
  </section>
{/if}
