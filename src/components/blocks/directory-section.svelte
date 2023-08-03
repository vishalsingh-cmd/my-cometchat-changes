<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';
  import type { SbBlokData } from '@storyblok/js';

  import type { BlogPostStoryblok, DirectorySectionStoryblok } from '$types/bloks';

  import { directories } from '$lib/stores/directories';
  import { createDebouncedValue } from '$lib/stores/create-debounced-value';

  import { getStories } from '$lib/storyblok';
  import { formatDate } from '$lib/utils/dates';
  import { cn } from '$lib/utils';

  import ContentCard from '$components/content-card.svelte';
  import FilterPanel from '$components/directory/filter-panel.svelte';
  import MobileFiltersFooter from '$components/directory/mobile-filters-footer.svelte';
  import MobileFiltersHeader from '$components/directory/mobile-filters-header.svelte';
  import NoResultsBanner from '$components/directory/no-results-banner.svelte';
  import Options from '$components/directory/options.svelte';

  export let block: DirectorySectionStoryblok;

  let directoryData = $directories.filter((directory) => {
    return directory.key === block._uid;
  })[0].data as SbBlokData[];
  let areFiltersOpen = false;

  const [search, debouncedSearch] = createDebouncedValue('');

  const onClearSearchValue = () => {
    $search = '';
  };

  const onToggleFiltersPanel = () => {
    areFiltersOpen = !areFiltersOpen;
  };

  const clearFilters = () => {
    selectedTags = [];
  };

  const getTagsFromDirectoryData = () => {
    const tags: string[] = [];

    directoryData.forEach((item) => {
      const typedItem = item as BlogPostStoryblok;

      console.log(item);

      switch (typedItem.content.component) {
        case 'customer-story': {
          const industry = typedItem.content.industry;
          if (industry) {
            if (!tags.includes(industry)) {
              tags.push(industry);
            }
          }
          break;
        }

        case 'blog-post': {
          const category = typedItem.content.category;
          if (category) {
            if (!tags.includes(category)) {
              tags.push(category);
            }
          }
          break;
        }
        case 'tutorial': {
          const technologies = typedItem.content.technology;

          technologies.forEach((technology: string) => {
            if (!tags.includes(technology)) {
              tags.push(technology);
            }
          });

          break;
        }
        default: {
          return undefined;
        }
      }

      return tags;
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

  const getContentType = () => {
    switch (block.content_type) {
      case 'customer-story':
        return 'customer-story';
      case 'blog-post':
        return 'blog-post';
      case 'tutorial':
        return 'tutorial';
      default:
        return undefined;
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

  $: selectedTags = [] as string[];

  $: getDirectoryDataWithFilters = createQuery({
    queryKey: [`directory-${Math.random()}`, selectedTags],
    queryFn: async () => {
      const res = await getStories({
        content_type: getContentType(),
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
    <div class="container mx-auto px-container">
      <div class="max-w-[528px] pb-8 font-semibold leading-tighter md:pb-12">
        <p class="mb-2 text-xl text-brand-9 md:mb-3">{block.label}</p>
        <p class="text-3xl">{block.title}</p>
      </div>

      <Options
        {selectedTags}
        on:toggleFiltersPanel={onToggleFiltersPanel}
        bind:value={$search}
        {areFiltersOpen}
      />

      {#if directoryData}
        <div class={cn('flex flex-col lg:grid', areFiltersOpen && 'gap-20 lg:grid-cols-[30%_1fr]')}>
          {#if areFiltersOpen}
            {@const tags = getTagsFromDirectoryData()}
            <div
              class="fixed left-0 top-0 isolate z-40 h-[100dvh] w-full border-t border-gray-12/8 bg-gray-1 px-5 lg:relative lg:h-auto lg:w-auto lg:bg-transparent lg:px-0 lg:pt-5"
            >
              <!-- Mobile Filters Header -->
              <MobileFiltersHeader on:toggleFiltersPanel={onToggleFiltersPanel} />

              <FilterPanel
                {tags}
                {selectedTags}
                on:selectTag={(e) => toggleTag(e.detail.i)}
                on:clearFilters={() => clearFilters()}
              />

              <!-- Mobile Filters Footer -->
              <MobileFiltersFooter
                on:clearFiltersAndClose={() => {
                  clearFilters();
                  onToggleFiltersPanel();
                }}
                on:toggleFiltersPanel={onToggleFiltersPanel}
              />
            </div>
          {/if}

          <!-- Content Cards -->
          <div class={cn('grid gap-8', areFiltersOpen ? 'lg:grid-cols-2' : 'lg:grid-cols-3')}>
            <!-- Loading State -->
            {#if $getDirectoryDataWithFilters.isLoading}
              {#each Array(6) as _}
                <ContentCard isLoading />
              {/each}
            {/if}

            <!-- Empty State -->
            {#if $getDirectoryDataWithFilters.isSuccess && $getDirectoryDataWithFilters.data.stories.length === 0 && $search !== ''}
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
