<script lang="ts">
  import Illustration1 from '$components/implementation-section/assets/illustration-1.svg';
  import Illustration2 from '$components/implementation-section/assets/illustration-2.svg';
  import ColourPicker from '$components/colour-picker/colour-picker.svelte';
  import Panel from '$components/panel.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { ImplementationSectionStoryblok } from '$types/bloks';
  import { cn, getLabelInfo } from '$lib/utils';

  export let block: ImplementationSectionStoryblok;

  const leftSidedItems =
    block.items.length === 4 ? block.items.slice(0, 2) : block.items.slice(0, 1);
  const rightSidedItems = block.items.length === 4 ? block.items.slice(2) : block.items.slice(1);
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden">
    <div class="container mx-auto">
      {#if block.header[0]}
        {@const { label, title, description, links } = block.header[0]}
        {@const labelInfo = getLabelInfo(label, 'brand')}
        <Title label={labelInfo} {title} {description} buttons={links} alignment="center" />
      {/if}
    </div>
    <div
      class="container mx-auto grid grid-cols-1 gap-px border-t border-gray-12/8 bg-gray-12/8 md:grid-cols-2"
    >
      <div class="flex flex-col gap-px">
        {#each leftSidedItems as item, i}
          <div class="bg-gray-1">
            <Panel
              {item}
              class={cn(
                'border-0 py-10 md:border-0 md:py-container md:pb-container md:pl-container md:pr-container md:pt-container lg:p-[64px]',
                i === 1 && 'pb-[151px] md:pb-[220px]'
              )}
            />
            {#if (leftSidedItems.length === 1 && i === 0) || (leftSidedItems.length === 2 && i === 1)}
              <div class="h-full px-container py-0">
                <ColourPicker />
              </div>
            {/if}
          </div>
        {/each}
      </div>
      <div class="flex h-full flex-col gap-px">
        {#if rightSidedItems.length > 0}
          {#each rightSidedItems as item, i}
            <div class={cn('overflow-hidden bg-gray-1', i === 1 && 'flex-1')}>
              <Panel
                {item}
                class={cn(
                  'border-0 py-10 md:border-0 md:py-container md:pb-container md:pl-container md:pr-container md:pt-container lg:p-[64px]',
                  i === 1 && 'pb-[151px] md:pb-[220px]'
                )}
              />

              {#if block.items.length === 4 && i === 0}
                <div class="w-[1000px] -translate-x-72 translate-y-10 transform bg-gray-1">
                  <img src={Illustration2} alt="" />
                </div>
              {/if}

              {#if block.items.length === 3 && i === 1}
                <div class="bg-gray-1">
                  <img src={Illustration1} alt="" />
                </div>
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
