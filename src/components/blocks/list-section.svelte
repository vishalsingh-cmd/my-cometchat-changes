<script lang="ts">
  import type { ListSectionStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import ListSectionItem from '$components/list-section/list-section-item.svelte';

  export let accentColour: 'brand' | 'orange' = 'orange';
  export let block: ListSectionStoryblok;
</script>

{#if block}
  <section
    data-theme={block.theme}
    class="bg-gray-1 pb-12 pt-6 md:pb-20 md:pt-12"
    use:storyblokEditable={block}
  >
    <div
      class={cn(
        'container mx-auto flex flex-col gap-12 px-container md:grid md:gap-y-16',
        (block.items.length <= 3 || block.items.length > 4) && 'grid-cols-3 gap-x-8 lg:gap-x-12',
        block.items.length === 4 && 'sm:grid-cols-2 md:gap-x-12 lg:grid-cols-4 xl:gap-x-10'
      )}
    >
      {#if block.items.length > 0}
        {#each block.items as item}
          <ListSectionItem block={item} {accentColour} class="max-w-[395px]" />
        {/each}
      {/if}
    </div>
  </section>
{/if}
