<script lang="ts">
  import Panel from '$components/panel.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';
  import type { CometCreditsSectionStoryblok } from '$types/bloks';
  import TitleSection from './title-section.svelte';
  // import Background from '$components/pre-footer/background.svelte';

  export let block: CometCreditsSectionStoryblok;
  console.log(block);
</script>

{#if block}
  {@const { title, panels_title, panels_description, panels } = block}
  <section data-theme="dark" class="isolate overflow-hidden" use:storyblokEditable={block}>
    {#if title && title.length > 0 && title[0]}
      <TitleSection block={title[0]} />
    {/if}
    <div class="container relative mx-auto px-container pb-10 md:pb-20">
      <div
        class="grid grid-cols-1 divide-y divide-gray-12/[.08] border-gray-12/[.08] bg-gray-1 md:grid-cols-2 md:divide-x md:border-b xl:grid-cols-3 xl:grid-rows-2"
      >
        <div
          class="mb-8 border-gray-12/[.08] p-8 pl-0 pr-0 md:col-span-2 md:border-t md:pb-0 md:pl-0 xl:col-span-1 xl:row-span-2 xl:p-16"
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
                'border-b-0 px-0 md:border-r-0 xl:p-16',
                i % 2 === 0 ? 'md:pl-0' : 'md:pl-container'
              )}
            />
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
