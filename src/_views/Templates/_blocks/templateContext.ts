import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { storyblok } from '$lib/storyblok';
import type { PageStoryblok } from '$src/types/bloks';

interface TemplatesState {
  isLoading: boolean;
  error: Error | null;
  data: PageStoryblok | null;
}

interface TemplateContext {
  template: Writable<TemplatesState>;
  actions: {
    fetchTemplate: () => Promise<void>;
  };
}

const TEMPLATE_CONTEXT_KEY = 'template';

export function createTemplateContext(uuid: string): TemplateContext {
  const template = writable<TemplatesState>({
    isLoading: true,
    error: null,
    data: null
  });

  const fetchTemplate = async () => {
    try {
      template.update((state) => ({ ...state, isLoading: true }));

      const result = await storyblok.get(`cdn/stories/${uuid}`, {
        find_by: 'uuid',
        version: 'published'
      });

      template.set({
        isLoading: false,
        error: null,
        data: result.data
      });
    } catch (error) {
      template.set({
        isLoading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
        data: null
      });
    }
  };

  const actions: TemplateContext['actions'] = {
    fetchTemplate: () => fetchTemplate()
  };

  const context: TemplateContext = {
    template: template,
    actions
  };

  setContext(`${TEMPLATE_CONTEXT_KEY}_${uuid}`, context);
  return context;
}

export function getTemplateContext(uuid: string): TemplateContext {
  const context = getContext<TemplateContext>(`${TEMPLATE_CONTEXT_KEY}_${uuid}`);

  if (!context) {
    throw new Error('Template context must be used within a TemplateProvider');
  }

  return context;
}
