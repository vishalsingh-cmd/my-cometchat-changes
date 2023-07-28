<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';

  import type { BlogPostStoryblok, DirectorySectionStoryblok } from '$types/bloks';

  import { directories } from '$lib/stores/directories';
  import { industries } from '$lib/stores/industries';

  import { formatDate } from '$lib/utils/dates';
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import ContentCard from '$components/content-card.svelte';
  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  // import { createQuery } from '@tanstack/svelte-query';

  // import { storyblok } from '$lib/storyblok';

  export let block: DirectorySectionStoryblok;

  let directoryData = $directories.filter((directory) => {
    return directory.key === block._uid;
  })[0].data as SbBlokData[];
  let areFiltersOpen = false;
  let selectedTags = [] as string[];

  const allIndustries = $industries;

  const getTagsFromDirectoryData = () => {
    const tags: any[] = [];

    directoryData.forEach((item) => {
      const typedItem = item as BlogPostStoryblok;

      if (typedItem.content.component === 'customer-story') {
        const industry = typedItem.content.customer.content.industry;
        if (industry) {
          if (!tags.includes(industry)) {
            tags.push(industry);
          }
        }
      }
    });

    return tags;
  };

  const getTag = (tag: string) => {
    const tagObj = allIndustries.filter((ind) => ind.uuid === tag)[0];

    return tagObj;
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  };

  const parseItem = (item: SbBlokData) => {
    const typedItem = item as BlogPostStoryblok;

    return {
      image:
        typedItem.content.cover !== undefined && typedItem.content.cover.filename !== ''
          ? typedItem.content.cover
          : undefined,
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
    <div class="container mx-auto px-container">
      <div class="max-w-[528px] pb-8 font-semibold leading-tighter md:pb-12">
        <p class="mb-2 text-xl text-brand-9 md:mb-3">{block.label}</p>
        <p class="text-3xl">{block.title}</p>
      </div>

      <Button
        variant="secondary"
        on:click={() => (areFiltersOpen = !areFiltersOpen)}
        class="mb-8 gap-[6px]"
      >
        {#if areFiltersOpen}
          {string('directory.hide_filters')}
        {:else}
          {string('directory.show_filters')}
        {/if}
        {#if selectedTags.length > 0}
          <span
            class="min-w-[20px] rounded-md bg-brand-9 px-[3px] py-[2px] text-xxs font-semibold leading-normal tracking-widest text-brand-1"
          >
            {selectedTags.length}
          </span>
        {/if}
      </Button>

      {#if directoryData && directoryData.length > 0}
        <div class={cn('grid', areFiltersOpen && 'grid-cols-[30%_1fr] gap-20')}>
          {#if areFiltersOpen}
            {@const tags = getTagsFromDirectoryData()}
            <div class="border-t border-gray-12/8 pt-5">
              <p class="mb-4 text-lg font-semibold leading-tight">Industries</p>
              <div class="flex flex-row gap-2">
                {#each tags as tag}
                  {@const tagObj = getTag(tag)}
                  {@const isTagSelected = selectedTags.includes(tagObj.uuid)}
                  <button
                    class={cn(
                      'flex items-center gap-[6px]',
                      'rounded-[10px] bg-brand-10/[0.12]',
                      'px-2.5 py-1.5',
                      'text-md font-semibold leading-tight tracking-wide',
                      isTagSelected
                        ? 'bg-brand-10/[0.12] pr-2 text-brand-10'
                        : 'bg-gray-11/[0.06] text-gray-11'
                    )}
                    on:click={() => {
                      toggleTag(tagObj.uuid);
                    }}
                  >
                    {tagObj.name}
                    {#if isTagSelected}
                      <button
                        class="h-3.5 w-3.5"
                        on:click|stopPropagation={() => {
                          toggleTag(tagObj.uuid);
                        }}
                      >
                        <Icon size="xs" icon="x-circle" />
                      </button>
                    {/if}
                  </button>
                {/each}
              </div>
            </div>
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
