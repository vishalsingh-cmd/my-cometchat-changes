import { getContext, setContext } from 'svelte';
import { writable, derived, get } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';
import { getStories } from '$lib/storyblok';
import { RESULTS_PER_PAGE } from '$src/lib/data/directory';
import type { PageStoryblok } from '$src/types/bloks';

export function debounce(fn: () => Promise<void>, delay: number): () => Promise<void> {
  let timeoutId: ReturnType<typeof setTimeout>;

  return () =>
    new Promise<void>((resolve) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(async () => {
        await fn();
        resolve();
      }, delay);
    });
}

interface TemplatesData {
  stories: PageStoryblok[];
  total: number;
}
interface TemplatesConfig {
  startsWithPath: string;
  excludingPath: string;
  contentType?: string;
}

interface TemplatesState {
  isLoading: boolean;
  error: Error | null;
  data: TemplatesData | null;
}

interface TemplatesContext {
  currentPage: Writable<number>;
  areFiltersOpen: Writable<boolean>;
  searchTerm: Writable<string>;
  templates: Writable<TemplatesState>;
  hasPagination: Readable<boolean>;
  actions: {
    clearSearch: () => void;
    toggleFilters: () => void;
    setPage: (page: number) => void;
    fetchTemplates: () => Promise<void>;
    updateConfig: (newConfig: Partial<TemplatesConfig>) => void;
  };
}

const TEMPLATES_CONTEXT_KEY = 'templates';

export function createTemplatesContext(initialConfig: TemplatesConfig): TemplatesContext {
  const currentPage = writable<number>(1);
  const areFiltersOpen = writable<boolean>(false);
  const searchTerm = writable<string>('');
  const config = writable<TemplatesConfig>({
    contentType: 'page',
    ...initialConfig
    // starts_with: 'pages/templates/',
    // excluding_slugs: 'pages/templates/',
  });

  const templates = writable<TemplatesState>({
    isLoading: true,
    error: null,
    data: null
  });

  const hasPagination = derived(
    templates,
    ($templates) => ($templates.data?.total ?? 0) > RESULTS_PER_PAGE
  );

  const fetchTemplates = async () => {
    try {
      templates.update((state) => ({ ...state, isLoading: true }));

      const currentPageValue = get(currentPage);
      const searchValue = get(searchTerm);
      const currentConfig = get(config);

      const res = await getStories({
        content_type: currentConfig.contentType,
        starts_with: currentConfig.startsWithPath,
        excluding_slugs: currentConfig.excludingPath,
        per_page: RESULTS_PER_PAGE,
        page: currentPageValue,
        search_term: searchValue || ''
      });

      templates.set({
        isLoading: false,
        error: null,
        data: {
          stories: res.data.stories,
          total: res.total
        }
      });
    } catch (error) {
      templates.set({
        isLoading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
        data: null
      });
    }
  };

  const debouncedFetch = debounce(fetchTemplates, 500);

  const actions: TemplatesContext['actions'] = {
    clearSearch: () => {
      searchTerm.set('');
      debouncedFetch();
    },

    toggleFilters: () => areFiltersOpen.update((v) => !v),

    setPage: (page: number) => {
      currentPage.set(page);
      debouncedFetch();
    },

    fetchTemplates: () => debouncedFetch(),

    updateConfig: (newConfig: Partial<TemplatesConfig>) => {
      config.update((currentConfig) => ({
        ...currentConfig,
        ...newConfig
      }));
      debouncedFetch();
    }
  };

  const context: TemplatesContext = {
    currentPage,
    areFiltersOpen,
    searchTerm,
    templates,
    hasPagination,
    actions
  };

  setContext(TEMPLATES_CONTEXT_KEY, context);
  return context;
}

export function getTemplatesContext(): TemplatesContext {
  const context = getContext<TemplatesContext>(TEMPLATES_CONTEXT_KEY);

  if (!context) {
    throw new Error('Templates context must be used within a TemplatesProvider');
  }

  return context;
}
