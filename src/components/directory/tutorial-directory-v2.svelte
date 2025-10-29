<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';

  import { page } from '$app/stores';

  import type { DirectorySectionStoryblok } from '$types/bloks';

  import { createDebouncedValue } from '$lib/stores/create-debounced-value';
  import { createMediaStore } from '$lib/stores/media';

  import { getStories } from '$lib/storyblok';
  import { cn, scrollLock } from '$lib/utils';
  import {
    cleanFilters,
    parseItem,
    type Panel,
    getPanel,
    RESULTS_PER_PAGE
  } from '$lib/data/directory-v2';

  // import ContentCard from '$components/content-card.svelte';
  import ContentCardTutorials from '$components/content-card-tutorials.svelte';
  import FilterPanel from '$components/directory/filter-panel.svelte';
  import MobileFiltersFooter from '$components/directory/mobile-filters-footer.svelte';
  import MobileFiltersHeader from '$components/directory/mobile-filters-header.svelte';
  import NoResultsBanner from '$components/directory/no-results-banner.svelte';
  import Options from '$components/directory/options.svelte';
  import Pagination from '$components/pagination/pagination.svelte';
  import { string } from '$lib/strings';

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
    // {
    //   type: 'integration_tool',
    //   title: string('directory.filter.integration_tool.label'),
    //   tags: $page.data.datasourceIntegrationTools,
    //   selectedTags: []
    // },
    // {
    //   type: 'product',
    //   title: string('directory.filter.products.label'),
    //   tags: $page.data.datasourceProducts,
    //   selectedTags: []
    // },
    {
      type: 'platform',
      title: string('directory.filter.platforms.label'),
      tags: $page.data.datasourcePlatforms,
      selectedTags: []
    },
    {
      type: 'language',
      title: string('directory.filter.languages.label'),
      tags: $page.data.datasourceLanguages,
      selectedTags: []
    },
    {
      type: 'framework',
      title: string('directory.filter.frameworks.label'),
      tags: $page.data.datasourceFrameworks,
      selectedTags: []
    }
  ] as Panel[];

  const toggleTag = (
    tag: string,
    type: 'integration_tool' | 'product' | 'platform' | 'language' | 'framework'
  ) => {
    const panel = getPanel(panels, type);

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
    // product: panels[0].selectedTags.length
    //   ? { any_in_array: panels[0].selectedTags.join(',') }
    //   : null,
    platform: panels[0].selectedTags.length
      ? { any_in_array: panels[0].selectedTags.join(',') }
      : null,
    language: panels[1].selectedTags.length
      ? { any_in_array: panels[1].selectedTags.join(',') }
      : null,
    framework: panels[2].selectedTags.length
      ? { any_in_array: panels[2].selectedTags.join(',') }
      : null
  };

  const toggleNewPage = (pageNumber: number) => {
    currentPage = pageNumber;
  };

  $: currentPage = 1;

  $: getDirectoryDataWithFilters = createQuery({
    queryKey: [`directory-${Math.random()}`, { id: block._uid }],
    queryFn: async () => {
      const res = await getStories({
        content_type: 'tutorial',
        filter_query: filter_query,
        per_page: 12,
        page: currentPage,
        search_term: $debouncedSearch
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

  <div class={cn('flex flex-col lg:grid ', areFiltersOpen && 'gap-x-20 lg:grid-cols-[30%_1fr]')}>
    {#if areFiltersOpen}
      <div
        class="fixed left-0 top-0 isolate z-40 h-[100dvh] w-full bg-[#0A0914] px-5 lg:relative lg:h-auto lg:w-auto lg:bg-transparent lg:px-0"
      >
        <!-- Mobile Filters Header -->
        <MobileFiltersHeader on:toggleFiltersPanel={onToggleFiltersPanel} />

        <FilterPanel
          panels={panels.filter((panel) => panel.type !== 'industries')}
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
          <ContentCardTutorials isLoading />
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
          {@const parsedItem = parseItem(item, 'tutorial')}
          {@const { image, title, tags, link, customer, author, date } = parsedItem}
          {@const filteredTags = tags.filter(
            (tag) =>
              ![
                'SDK', // name or slug of removed tag category
                'Integration Tool' // also handle label version if needed
              ].includes(tag)
          )}
          <ContentCardTutorials
            {image}
            {title}
            tags={filteredTags}
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
    {#if $getDirectoryDataWithFilters.data && hasPagination}
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
