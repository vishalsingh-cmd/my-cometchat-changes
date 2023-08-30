<script lang="ts">
  import ListSectionItem from '$components/list-section/list-section-item.svelte';
  import Media from '$components/media.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';
  import type { FeaturesAtGlanceSectionStoryblok } from '$types/bloks';
  import ListSection from './list-section.svelte';

  let activeTab = 0;
  let activeButtonsTab = 0;

  export let block: FeaturesAtGlanceSectionStoryblok;
  console.log(block.features);
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="overflow-hidden bg-gray-1 text-gray-12"
  >
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
          class="container mx-auto mt-4 flex w-full flex-row gap-3 overflow-x-scroll break-all px-container md:mt-6"
        >
          {#each block.features[activeTab].feature_list as feature, i}
            <button
              on:click={() => {
                activeButtonsTab = i;
              }}
              id="{i}-buttontabhead"
              type="button"
              role="tab"
              class={cn(
                'px-2.5 md:px-5',
                'py-1.5 md:py-3',
                'bg-gray-12/[0.06] hover:bg-brand-10/[0.12]',
                'text-lg/tight text-gray-12/64 hover:text-brand-10',
                'rounded-[10px] md:rounded-[14px]',
                'transition-colors',
                'font-semibold',
                'min-w-fit',
                'cursor-pointer',
                'break-keep',
                activeButtonsTab === i && 'bg-brand-10/[0.12] text-brand-10'
              )}
            >
              {feature.title}
            </button>
          {/each}
        </div>
        <div class="container mx-auto px-container">
          {#if block.features[activeTab].feature_list[activeButtonsTab]}
            {@const { image, items_right_of_image } =
              block.features[activeTab].feature_list[activeButtonsTab]}
            <div
              class="mt-8 grid grid-cols-1 gap-12 pb-8 md:pb-12 lg:mt-12 lg:grid-cols-[2fr,1fr] lg:gap-[54px]"
            >
              <div
                class="order-2 flex max-w-[864px] items-center justify-center rounded-3xl border border-gray-12/[.04] bg-gray-12/[0.02] py-8 backdrop-blur-[20px] lg:order-1"
              >
                {#if image}
                  <div class={cn('min-w-[318px] max-w-[555px] lg:w-full')}>
                    <Media
                      imageTransformOptions={{ size: [555, 0] }}
                      media={image}
                      class="w-full object-cover"
                    />
                  </div>
                {/if}
              </div>

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
      </div>
    {/if}
  </section>
{/if}
