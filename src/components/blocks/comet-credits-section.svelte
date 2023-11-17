<script lang="ts">
  import type { CometCreditsSectionStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Panel from '$components/panel.svelte';
  import TitleSection from './title-section.svelte';
  import Background from '$components/comet-credits-section/background.svelte';

  export let block: CometCreditsSectionStoryblok;
</script>

{#if block}
  {@const { title, panels_title, panels_description, panels } = block}
  <section
    data-theme="dark"
    class="relative isolate overflow-hidden bg-gray-1"
    use:storyblokEditable={block}
  >
    <!-- Top Gradient -->
    <div
      class="absolute left-0 top-0 z-30 h-[100px] w-full bg-gradient-to-t from-transparent to-gray-1/100"
    />

    {#if title && title.length > 0 && title[0]}
      <TitleSection block={title[0]} />
    {/if}
    <div class="container relative mx-auto pb-10 md:pb-20 lg:px-container">
      <Background />
      <div
        class="grid grid-cols-1 divide-y divide-gray-12/[.08] border-b border-gray-12/[.08] bg-gray-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 xl:divide-x"
      >
        <div
          class="z-20 mb-8 border-gray-12/[.08] px-container py-8 md:col-span-2 md:border-t md:pb-0 lg:px-0 xl:col-span-1 xl:row-span-2 xl:p-16 xl:pl-0"
        >
          {#if panels_title}
            <p class="text-2xl/tighter font-semibold">{panels_title}</p>
          {/if}
          {#if panels_description}
            <p class="mt-3 text-xl/snug font-medium tracking-wide opacity-74 md:mt-6">
              {panels_description}
            </p>
          {/if}
        </div>

        {#if panels}
          {#each panels as panel, i}
            <Panel
              item={panel}
              class={cn(
                'z-10 border-b-0 px-container md:border-r-0 xl:p-16',
                i % 2 === 0
                  ? 'md:border-r md:border-gray-12/[.08] md:pl-container lg:pl-0 xl:border-0'
                  : 'md:pl-container'
              )}
            />
          {/each}
        {/if}
      </div>

      <!-- Bottom Gradient -->
      <div
        class="absolute bottom-0 left-0 z-10 h-[50px] w-full bg-gradient-to-t from-gray-1/100 to-gray-1/0 xl:h-[100px]"
      />
    </div>
  </section>
{/if}
