<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';

  import { page } from '$app/stores';

  import type { DirectorySectionStoryblok } from '$types/bloks';

  import { createDebouncedValue } from '$lib/stores/create-debounced-value';
  import { createMediaStore } from '$lib/stores/media';

  import { getStories } from '$lib/storyblok';
  import { cn, scrollLock } from '$lib/utils';
  import { cleanFilters, parseItem, type Panel, RESULTS_PER_PAGE } from '$lib/data/directory';

  import ContentCard from '$components/content-card.svelte';
  import FilterPanel from '$components/directory/filter-panel.svelte';
  import MobileFiltersFooter from '$components/directory/mobile-filters-footer.svelte';
  import MobileFiltersHeader from '$components/directory/mobile-filters-header.svelte';
  import NoResultsBanner from '$components/directory/no-results-banner.svelte';
  import Options from '$components/directory/options.svelte';
  import Pagination from '$components/pagination/pagination.svelte';

  export let block: DirectorySectionStoryblok;

  let areFiltersOpen = false;

  const [search, debouncedSearch] = createDebouncedValue('');

  const onClearSearchValue = () => {
    $search = '';
  };

  const onToggleFiltersPanel = () => {
    areFiltersOpen = !areFiltersOpen;
  };

  const clearFilters = () => {
    panels = cleanFilters(panels);
  };

  $: panels = [
    {
      type: 'category',
      title: 'Category',
      tags: $page.data.datasourceCategories,
      selectedTags: []
    }
  ] as Panel[];

  const getPanel = (type: 'category') => {
    return panels.filter((panel) => {
      return panel.type === type;
    })[0];
  };

  const toggleTag = (tag: string, type: 'category') => {
    const panel = getPanel(type);

    if (panel.selectedTags.includes(tag)) {
      panel.selectedTags = panel.selectedTags.filter((selectedTag) => {
        return selectedTag !== tag;
      });

      const newPanel = {
        ...panel,
        selectedTags: panel.selectedTags
      };

      panels = panels.map((panel) => {
        if (panel.type === type) {
          return newPanel;
        } else {
          return panel;
        }
      });
    } else {
      panel.selectedTags = [...panel.selectedTags, tag];

      const newPanel = {
        ...panel,
        selectedTags: panel.selectedTags
      };

      panels = panels.map((panel) => {
        if (panel.type === type) {
          return newPanel;
        } else {
          return panel;
        }
      });
    }
  };

  $: getNumberOfSelectedTags = () => {
    let numberOfSelectedTags = 0;

    panels.forEach((panel) => {
      if (panel.selectedTags.length > 0) {
        numberOfSelectedTags += panel.selectedTags.length;
      }
    });

    return numberOfSelectedTags;
  };

  $: numberOfSelectedTags = getNumberOfSelectedTags();

  $: filter_query = {
    category: panels[0].selectedTags.length ? { in: panels[0].selectedTags.join(',') } : null
  };

  const toggleNewPage = (pageNumber: number) => {
    currentPage = pageNumber;
  };

  $: currentPage = 1;

  $: getDirectoryDataWithFilters = createQuery({
    queryKey: [`directory-${Math.random()}`, { id: block._uid }],
    queryFn: async () => {
      const res = await getStories({
        content_type: 'blog-post',
        filter_query: filter_query,
        per_page: 12,
        page: currentPage,
        search_term: $debouncedSearch,
        sort_by: 'created_at:desc'
      });

      return { stories: res.data.stories, total: res.total };
    }
  });

  $: hasPagination =
    $getDirectoryDataWithFilters.isSuccess &&
    $getDirectoryDataWithFilters.data.total > RESULTS_PER_PAGE;

  const isMobile = createMediaStore('(max-width: 1023px)');
  $: scrollLock(areFiltersOpen && $isMobile);
</script>

{#if block}
  <Options
    {numberOfSelectedTags}
    on:toggleFiltersPanel={onToggleFiltersPanel}
    bind:value={$search}
    {areFiltersOpen}
  />
  <div class={cn('flex flex-col lg:grid', areFiltersOpen && 'gap-x-20 lg:grid-cols-[30%_1fr]')}>
    {#if areFiltersOpen}
      <div
        class="fixed left-0 top-0 isolate z-40 h-[100dvh] w-full bg-gray-1 px-5 lg:relative lg:h-auto lg:w-auto lg:bg-transparent lg:px-0"
      >
        <!-- Mobile Filters Header -->
        <MobileFiltersHeader on:toggleFiltersPanel={onToggleFiltersPanel} />

        <FilterPanel
          {panels}
          on:selectTag={(e) => toggleTag(e.detail.i, e.detail.j)}
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
    <div
      class={cn(
        'grid gap-8',
        areFiltersOpen ? 'lg:grid-cols-2' : 'lg:grid-cols-3',
        !hasPagination && 'pb-12 lg:pb-20'
      )}
    >
      <!-- Loading State -->
      {#if $getDirectoryDataWithFilters.isLoading}
        {#each Array(6) as _}
          <ContentCard isLoading />
        {/each}
      {/if}

      <!-- Empty State -->
      {#if $getDirectoryDataWithFilters.isSuccess && $getDirectoryDataWithFilters.data.stories.length === 0}
        <NoResultsBanner
          searchValue={$search}
          on:clearSearchValue={onClearSearchValue}
          class="col-span-3"
        />
      {/if}

      <!-- Success fetch -->
      {#if $getDirectoryDataWithFilters.isSuccess && $getDirectoryDataWithFilters.data.stories.length > 0}
        {#each $getDirectoryDataWithFilters.data.stories as item}
          {@const parsedItem = parseItem(item, 'blog-post')}
          {@const { image, title, tags, link, customer, author, date } = parsedItem}
          <ContentCard
            {image}
            {title}
            {tags}
            {link}
            {customer}
            {author}
            {date}
            badgeSize="medium"
          />
        {/each}
      {/if}
    </div>

    <!-- Pagination -->
    {#if $getDirectoryDataWithFilters.isSuccess && hasPagination}
      <div
        class={cn(
          'flex items-center justify-center py-10 lg:py-16',
          areFiltersOpen && 'col-start-2'
        )}
      >
        <Pagination
          onPageChange={toggleNewPage}
          onPageDecrement={() => (currentPage -= 1)}
          onPageIncrement={() => (currentPage += 1)}
          totalCountOfRegisters={$getDirectoryDataWithFilters.data.total}
          registersPerPage={RESULTS_PER_PAGE}
          {currentPage}
        />
      </div>
    {/if}
  </div>
{/if}
