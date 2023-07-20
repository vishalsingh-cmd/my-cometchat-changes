<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';

  import type { BlogPostStoryblok, DirectorySectionStoryblok } from '$types/bloks';

  import { formatDate } from '$lib/utils/dates';
  import { directories } from '$lib/stores/directories';
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import ContentCard from '$components/content-card.svelte';
  import Button from '$components/buttons/button.svelte';

  export let block: DirectorySectionStoryblok;

  let directoryData = $directories.filter((directory) => {
    return directory.key === block._uid;
  })[0].data as SbBlokData[];

  console.log(directoryData);

  let areFiltersOpen = false;

  const parseItem = (item: SbBlokData) => {
    const typedItem = item as BlogPostStoryblok;

    return {
      image: typedItem.content.cover.filename !== '' ? typedItem.content.cover : undefined,
      title: typedItem.name,
      tags: typedItem.content.component === 'customer-story' ? typedItem.content.tags : undefined,
      link: item.full_slug as string,
      customer:
        typedItem.content.component === 'customer-story'
          ? typedItem.content.customer.content
          : undefined,
      author: typedItem.content.author,
      date: formatDate(new Date(typedItem.created_at))
    };
  };
</script>

{#if block}
  <section data-theme="light" class="bg-gray-1 pt-12 text-gray-12 md:pt-20">
    <div class="mx-auto px-container">
      <div class="max-w-[528px] pb-8 font-semibold leading-tighter md:pb-12">
        <p class="mb-2 text-xl text-brand-9 md:mb-3">{block.label}</p>
        <p class="text-3xl">{block.title}</p>
      </div>

      <Button variant="secondary" on:click={() => (areFiltersOpen = !areFiltersOpen)}>
        {#if areFiltersOpen}
          {string('directory.hide_filters')}
        {:else}
          {string('directory.show_filters')}
        {/if}
      </Button>

      {#if directoryData && directoryData.length > 0}
        <div class={cn('grid', areFiltersOpen && 'grid-cols-[30%_1fr]')}>
          {#if areFiltersOpen}
            <div>Filters</div>
          {/if}
          <div class={cn('grid gap-8', areFiltersOpen ? 'grid-cols-2' : 'grid-cols-3')}>
            {#each directoryData as item}
              {@const parsedItem = parseItem(item)}
              {@const { image, title, tags, link, customer, author, date } = parsedItem}
              <ContentCard {image} {title} {tags} {link} {customer} {author} {date} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </section>
{/if}
