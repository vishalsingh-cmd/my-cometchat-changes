<script lang="ts">
  import ButtonTab from '$components/features-at-glance-section/button-tab.svelte';
  import ListSectionItem from '$components/list-section/list-section-item.svelte';
  import Media from '$components/media.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import { intersectionObserver } from '$lib/actions/intersection-observer';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import scrollDirection from '$lib/stores/scroll-direction';
  import { cn } from '$lib/utils';
  import type { FeaturesAtGlanceSectionStoryblok } from '$types/bloks';
  import ListSection from './list-section.svelte';

  let activeTab = 0;
  let activeButtonsTab = 0;

  let isIntersecting = false;

  export let block: FeaturesAtGlanceSectionStoryblok;
</script>

<!-- TODO: colocar borda quando estiver sticky -->

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
      {@const parsedFeatures = block.features.map((item, i) => ({
        id: i,
        label: item.title
      }))}
      <div
        use:intersectionObserver={{
          callback: ([e]) => {
            if (e.isIntersecting) {
              isIntersecting = true;
            }
          },
          options: {}
        }}
        class={cn(
          'sticky left-0 top-0 z-10 bg-gray-1 pb-8 transition-transform duration-300 ease-motion md:static md:pb-6',
          {
            animate: $scrollDirection === 'up'
          }
        )}
      >
        <Tabs
          {activeTab}
          options={parsedFeatures}
          on:optionSelect={(e) => {
            activeTab = e.detail.i;
            activeButtonsTab = 0;
          }}
          class="container mx-auto px-container"
        />

        <div class="border-t border-gray-12/8">
          <div
            class="container mx-auto mt-4 flex w-full flex-row gap-3 overflow-x-scroll break-all px-container"
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

      <div class="container mx-auto px-container">
        {#if block.features[activeTab].feature_list[activeButtonsTab]}
          {@const { image, items_right_of_image } =
            block.features[activeTab].feature_list[activeButtonsTab]}
          <div
            class=" grid grid-cols-1 gap-12 pb-8 md:pb-12 lg:mt-12 lg:grid-cols-[2fr,1fr] lg:gap-[54px]"
          >
            {#if image}
              <div
                class="order-2 flex max-w-[864px] items-center justify-center rounded-3xl border border-gray-12/[.04] bg-gray-12/[0.02] py-8 backdrop-blur-[20px] lg:order-1"
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
                class="order-1 flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-10 lg:order-2 lg:grid-cols-1 lg:flex-col xl:flex"
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

<style>
  .animate {
    transition: top 300ms ease-in-out;
  }
</style>
