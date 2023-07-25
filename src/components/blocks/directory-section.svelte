<script lang="ts">
  import { createQuery, isError } from '@tanstack/svelte-query';
  import type { ISbStoriesParams, SbBlokData } from '@storyblok/js';

  import type { BlogPostStoryblok, DirectorySectionStoryblok } from '$types/bloks';

  import { directories } from '$lib/stores/directories';
  import { createDebouncedValue } from '$lib/stores/create-debounced-value';

  import { storyblok } from '$lib/storyblok';
  import { formatDate } from '$lib/utils/dates';
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import Button from '$components/buttons/button.svelte';
  import ContentCard from '$components/content-card.svelte';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Input from '$components/input.svelte';
  import NoResultsBanner from '$components/directory/no-results-banner.svelte';

  export let block: DirectorySectionStoryblok;

  let directoryData = $directories.filter((directory: { key: string }) => {
    return directory.key === block._uid;
  })[0].data as SbBlokData[];
  let areFiltersOpen = false;

  const [search, debouncedSearch] = createDebouncedValue('');

  const onClearSearchValue = () => {
    $search = '';
  };

  const clearFilters = () => {
    selectedTags = [];
  };

  const getTagsFromDirectoryData = () => {
    const tags: string[] = [];

    directoryData.forEach((item) => {
      const typedItem = item as BlogPostStoryblok;

      if (typedItem.content.component === 'customer-story') {
        const industry = typedItem.content.industry;
        if (industry) {
          if (!tags.includes(industry)) {
            tags.push(industry);
          }
        }
      }
    });

    return tags;
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
      author: typedItem.content.author.name,
      date: formatDate(new Date(typedItem.created_at))
    };
  };

  const getStories = async (params: Omit<ISbStoriesParams, 'content_type'> = {}) => {
    return await storyblok.get('cdn/stories', {
      version: 'draft',
      content_type: 'customer-story',
      sort_by: 'updated_at:desc',
      ...params
    });
  };

  $: selectedTags = [] as string[];

  $: getDirectoryDataWithFilters = createQuery({
    queryKey: ['directory', selectedTags],
    queryFn: async () => {
      const res = await getStories({
        filter_query: selectedTags.length > 0 ? { industry: { in: selectedTags.join(',') } } : {},
        per_page: 12,
        search_term: $debouncedSearch
      });

      return { stories: res.data.stories, total: res.total };
    }
  });
</script>

{#if block}
  <section data-theme="light" class="bg-gray-1 pt-12 text-gray-12 md:pt-20">
    <div class="mx-auto px-container">
      <div class="max-w-[528px] pb-8 font-semibold leading-tighter md:pb-12">
        <p class="mb-2 text-xl text-brand-9 md:mb-3">{block.label}</p>
        <p class="text-3xl">{block.title}</p>
      </div>

      <div class="mb-8 flex w-full items-center justify-between">
        <Button
          variant="secondary"
          on:click={() => (areFiltersOpen = !areFiltersOpen)}
          class="gap-[6px]"
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

        <Input bind:value={$search} icon="search-lg" />
      </div>

      {#if directoryData}
        <div class={cn('grid', areFiltersOpen && 'grid-cols-[30%_1fr] gap-20')}>
          {#if areFiltersOpen}
            {@const tags = getTagsFromDirectoryData()}
            <div class="border-t border-gray-12/8 pt-5">
              <p class="mb-4 text-lg font-semibold leading-tight">Industries</p>
              <div class="flex flex-row gap-2">
                {#each tags as tag}
                  {@const isTagSelected = selectedTags.includes(tag)}
                  <button
                    class={cn(
                      'flex items-center gap-[6px]',
                      'rounded-[10px] bg-brand-10/[0.12]',
                      'px-[10px] py-[6px]',
                      'text-md font-semibold leading-tight tracking-wide',
                      'whitespace-nowrap',
                      isTagSelected
                        ? 'bg-brand-10/[0.12] pr-2 text-brand-10'
                        : 'bg-gray-11/[0.06] text-gray-11'
                    )}
                    on:click={() => {
                      if (!isTagSelected) {
                        toggleTag(tag);
                      }
                    }}
                  >
                    {tag}
                    {#if isTagSelected}
                      <button
                        class="h-[14px] w-[14px]"
                        on:click|stopPropagation={() => {
                          toggleTag(tag);
                        }}
                      >
                        <Icon size="xs" icon="x-circle" />
                      </button>
                    {/if}
                  </button>
                {/each}
              </div>
              <GhostButton class="mt-8 gap-[6px]" on:click={clearFilters}>
                Reset filters
                <Icon size="xs" icon="trash-01" />
              </GhostButton>
            </div>
          {/if}

          <!-- Content Cards -->
          <div class={cn('grid gap-8', areFiltersOpen ? 'grid-cols-2' : 'grid-cols-3')}>
            <!-- Loading State -->
            {#if $getDirectoryDataWithFilters.isLoading}
              {#each Array(4) as _}
                <ContentCard isLoading />
              {/each}
            {/if}

            <!-- Empty State -->
            {#if $getDirectoryDataWithFilters.isSuccess && $getDirectoryDataWithFilters.data.stories.length === 0 && search}
              <NoResultsBanner
                searchValue={$search}
                on:clearSearchValue={onClearSearchValue}
                class="col-span-3"
              />
            {/if}

            <!-- Success fetch -->
            {#if $getDirectoryDataWithFilters.isSuccess && $getDirectoryDataWithFilters.data.stories.length > 0}
              {#each $getDirectoryDataWithFilters.data.stories as item}
                {@const parsedItem = parseItem(item)}
                {@const { image, title, tags, link, customer, author, date } = parsedItem}
                <ContentCard {image} {title} {tags} {link} {customer} {author} {date} />
              {/each}
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </section>
{/if}
