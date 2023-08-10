<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { ImplementationListSectionStoryblok } from '$types/bloks';

  import Panel from '$components/panel.svelte';

  export let block: ImplementationListSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1 text-gray-12">
    <div
      class={cn(
        'container mx-auto flex flex-col border-t border-gray-12/8',
        block.items.length === 1 && 'md:flex-row'
      )}
    >
      {#if block.title && block.label}
        <div class="max-w-[720px] flex-1 px-container py-10 font-semibold leading-tighter md:py-20">
          <p class="mb-2 text-xl text-orange-9 md:mb-3">{block.label}</p>
          <p class="w-full max-w-[593px] text-3xl">{block.title}</p>
        </div>
      {/if}
      {#if block.items && block.items.length > 0}
        <div
          class={cn(
            'flex flex-1 flex-col border-gray-12/8 md:flex-row',
            block.items.length === 2 && 'border-t',
            block.items.length === 1 && 'border-l'
          )}
        >
          {#each block.items as item, i}
            <Panel
              {item}
              class={cn(
                ((block.items.length === 2 && i === 1) || (block.items.length === 1 && i === 0)) &&
                  'md:border-r-0'
              )}
            />
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}
