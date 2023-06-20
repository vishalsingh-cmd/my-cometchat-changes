<script lang="ts">
  import Illustration from '$components/implementation-section/assets/illustration.svg';
  import ColourPicker from '$components/colour-picker/colour-picker.svelte';
  import Panel from '$components/panel.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { ImplementationSectionStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';

  export let block: ImplementationSectionStoryblok;

  const parseItem = (item: ImplementationSectionStoryblok['item']) => {
    return {
      title: item.title,
      description: item.description,
      link: {
        label: item.link[0].label,
        link: item.link[0].link
      }
    };
  };

  const rightSidedItems = block.items.slice(1);
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden">
    <div
      class="absolute right-[calc(50vw-900px)] top-[-116px] mx-auto hidden h-[1026px] w-[1026px] origin-center rotate-[60deg] transform rounded-full bg-gradient-to-l from-orange-4/60 via-[hsl(242,30%,23%)]/60 to-[hsl(0,0%,2%)]/60 blur-[300px] md:block"
    />
    <div class="container mx-auto">
      {#if block.header[0]}
        <Title
          label={{ content: block.header[0].label, color: 'brand' }}
          title={block.header[0].title}
        />
      {/if}
    </div>
    <div class="container mx-auto grid grid-cols-1 border-t border-gray-12/8 md:grid-cols-2">
      <div class="border-b border-gray-12/8 md:border-b-0">
        {#if block.items[0]}
          <Panel item={parseItem(block.items[0])} class="border-b-0" />
        {/if}
        <div class="h-full border-gray-12/[.08] px-5 py-0 md:border-b-0 md:border-r md:px-16">
          <ColourPicker />
        </div>
      </div>
      <div class="relative">
        {#if rightSidedItems.length > 0}
          {#each rightSidedItems as item, i}
            <Panel
              item={parseItem(item)}
              class={cn('md:border-b md:border-r-0', {
                'pb-[151px] md:border-b-0 md:pb-[220px]': i === 1
              })}
            />
            {#if i === 1}
              <div
                class="absolute bottom-[-140px] right-[calc(50vw-300px)] h-[260px] w-[1333px] md:bottom-[-175px] md:right-[-200px] md:h-[338px] md:w-[1739px]"
              >
                <img src={Illustration} alt="" />
              </div>
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
