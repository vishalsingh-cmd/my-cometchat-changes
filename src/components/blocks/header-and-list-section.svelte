<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Title from '$components/title.svelte';

  import { cn } from '$lib/utils';

  import type { HeaderAndListSectionStoryblok } from '$types/bloks';
  import ListSectionItem from '$components/list-section/list-section-item.svelte';

  export let block: HeaderAndListSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme ? block.theme : 'light'}
    class="bg-gray-1"
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
    {#if block.items}
      <section class="bg-gray-1 pb-12 pt-6 md:pb-20 md:pt-12" use:storyblokEditable={block}>
        <div
          class={cn(
            'container mx-auto flex flex-col gap-12 px-container md:grid md:gap-y-16',
            (block.items.length <= 3 || block.items.length > 4) &&
              'grid-cols-3 gap-x-8 lg:gap-x-12',
            block.items.length === 4 && 'sm:grid-cols-2 md:gap-x-12 lg:grid-cols-4 xl:gap-x-10'
          )}
        >
          {#if block.items.length > 0}
            {#each block.items as item}
              <ListSectionItem
                block={item}
                accentColour={block.accent_colour ? block.accent_colour : 'orange'}
                class="max-w-[395px]"
              />
            {/each}
          {/if}
        </div>
      </section>
    {/if}
  </section>
{/if}
