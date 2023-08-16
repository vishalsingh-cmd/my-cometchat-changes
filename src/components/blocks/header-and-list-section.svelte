<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { HeaderAndListSectionStoryblok } from '$types/bloks';

  import ListSectionItem from '$components/list-section/list-section-item.svelte';
  import Title from '$components/title.svelte';

  export let block: HeaderAndListSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme ? block.theme : 'light'}
    class="bg-gray-1 text-gray-12"
  >
    {#if block.header && block.header[0]}
      {@const header = block.header[0]}
      {#if header.label}
        <Title
          alignment="center"
          label={{
            content: header.label,
            color: block.accent_colour ? block.accent_colour : 'orange'
          }}
          title={header.title}
        />
      {/if}
    {/if}
    {#if block.items && block.items.length > 0}
      {@const items = block.items[0]}
      <div
        class={cn(
          'container mx-auto flex flex-col gap-12 px-container pb-12 pt-6 md:grid md:gap-y-16 md:pb-20 md:pt-12',
          (items.items.length <= 3 || items.items.length > 4) && 'grid-cols-3 gap-x-8 lg:gap-x-12',
          items.items.length === 4 && 'sm:grid-cols-2 md:gap-x-12 lg:grid-cols-4 xl:gap-x-10'
        )}
      >
        {#if items.items.length > 0}
          {#each items.items as item}
            <ListSectionItem block={item} accentColour="orange" class="max-w-[395px]" />
          {/each}
        {/if}
      </div>
    {/if}
  </section>
{/if}
