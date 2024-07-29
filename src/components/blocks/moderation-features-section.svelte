<script lang="ts">
  import type { ModerationFeaturesSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import TitleSection from './title-section.svelte';
  import ContentCard from '$components/content-card.svelte';
  import { cn } from '$lib/utils';

  export let block: ModerationFeaturesSectionStoryblok;
  console.log(block);
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="border-b border-gray-12 border-opacity-8 bg-gray-1 text-gray-12"
  >
    {#if block.title && block.title[0]}
      <TitleSection block={block.title[0]} />
    {/if}

    <div class={cn('container mx-auto flex flex-col px-container lg:grid')}>
      <div
        class={cn(
          'grid gap-8',
          // areFiltersOpen ? 'lg:grid-cols-2' :
          'lg:grid-cols-3'
          // !hasPagination && 'pb-12 lg:pb-20'
        )}
      >
        <!-- {#each $getDirectoryDataWithFilters.data.stories as item}
            {@const parsedItem = parseItem(item, 'blog-post')}
            {@const { image, title, tags, link, customer, author, date } = parsedItem} -->
        {#if block.rows}
          {#each block.rows as row}
            {#each row.cards as card}
              <!-- <div class="flex flex-col">
                  <p>{card.title}</p>
                  <p>{card.description}</p>
                </div> -->
              <ContentCard
                link="https://google.com"
                title={card.title}
                author={card.description}
                date="1"
                image={card.image}
              />
            {/each}
          {/each}
        {/if}
        <!-- {/each} -->
      </div>
    </div>
  </section>
{/if}
