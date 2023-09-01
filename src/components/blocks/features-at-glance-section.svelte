<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { FeaturesAtGlanceSectionStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import scrollDirection from '$lib/stores/scroll-direction';

  import Media from '$components/media.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import ListSection from './list-section.svelte';
  import Dropdown from '$components/dropdown.svelte';
  import ButtonTab from '$components/features-at-glance-section/button-tab.svelte';
  import ListSectionItem from '$components/list-section/list-section-item.svelte';

  let activeTab = 0;
  let activeButtonsTab = 0;
  let selectedFeatureIndex = 0;

  let windowScroll = 0;
  let isSticky = false;
  let topOffset: number;
  let containerRef: HTMLElement;

  $: if (windowScroll !== 0) {
    topOffset = containerRef.getBoundingClientRect().top; // Distance from the element to the top
    isSticky = topOffset === 0;
  }

  export let block: FeaturesAtGlanceSectionStoryblok;
</script>

<svelte:window bind:scrollY={windowScroll} />

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
      {@const parsedDropdownFeatures = block.features[activeTab].feature_list.map(
        ({ title }, i) => ({
          label: title,
          value: title
        })
      )}

      <!-- Sticky Element -->
      <div bind:this={containerRef} class="sticky left-0 top-0 z-10 md:static">
        <!-- Element that is going to translate -->
        <div
          class={cn('bg-gray-1 transition-transform duration-300 ease-motion', {
            'border-b border-gray-12/8': isSticky,
            'translate-y-16': $scrollDirection === 'up' && isSticky
          })}
        >
          <Tabs
            {activeTab}
            options={parsedTabsFeatures}
            on:optionSelect={(e) => {
              activeTab = e.detail.i;
              activeButtonsTab = 0;
              selectedFeatureIndex = 0;
            }}
            class="container mx-auto px-container"
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
            <div
              class="container mx-auto mt-4 hidden w-full flex-row gap-3 overflow-x-scroll break-all px-container md:flex"
            >
              {#each block.features[activeTab].feature_list as feature, i}
                <ButtonTab
                  id={i}
                  label={feature.title}
                  isActive={activeButtonsTab === i}
                  on:click={() => (activeButtonsTab = i)}
                />
              {/each}
            </div>
          </div>
        </div>
      </div>

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
