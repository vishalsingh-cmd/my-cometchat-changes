<script lang="ts">
  import type { ListSectionStoryblok } from '$types/bloks';

  import InfoItem from '$components/info-item.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  export let block: ListSectionStoryblok;

  const iconColour = 'orange' as 'orange' | 'brand';
</script>

{#if block}
  <section
    data-theme="light"
    class="bg-gray-1 px-container pb-12 pt-6 md:pb-16 md:pt-12"
    use:storyblokEditable={block}
  >
    <div
      class={cn(
        'mx-auto flex max-w-content flex-col gap-12 md:grid md:gap-y-16',
        (block.items.length <= 3 || block.items.length > 4) && 'grid-cols-3 md:gap-x-16',
        block.items.length === 4 && 'grid-cols-4 md:gap-x-12'
      )}
    >
      {#if block.items.length > 0}
        {#each block.items as item}
          {@const newItem = { ...item, icon: { icon: item.icon.toString(), colour: iconColour } }}
          <InfoItem item={newItem} class="max-w-[395px]" />
        {/each}
      {/if}
    </div>
  </section>
{/if}
