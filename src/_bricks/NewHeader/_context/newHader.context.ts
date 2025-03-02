import { getContext, setContext } from 'svelte';
import { get, writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export type TriggerElemsObject = {
  [trigger: string]: HTMLButtonElement;
};

export type PenelElemsObject = {
  [trigger: string]: HTMLDivElement;
};

interface NewHeaderContext {
  headerElem: Writable<HTMLElement | null>;
  viewportElem: Writable<HTMLDivElement | null>;
  navElem: Writable<HTMLElement | null>;
  triggerElems: Writable<TriggerElemsObject>;
  panelElems: Writable<PenelElemsObject>;
  activeIndex: Writable<number | null>;
  actions: {
    showPanel: (index: number) => void;
    hidePanel: (index: number) => void;
    scheduleHidePanel: (index: number) => void;
    cancelHidePanel: () => void;
  };
}

const NEW_HEADER_CONTEXT_KEY = 'new-header';

export function createNewHeaderContext(): NewHeaderContext {
  const headerElem = writable<HTMLElement | null>(null);
  const viewportElem = writable<HTMLDivElement | null>(null);
  const navElem = writable<HTMLElement | null>(null);
  const triggerElems = writable<TriggerElemsObject>({});
  const panelElems = writable<PenelElemsObject>({});
  const activeIndex = writable<number | null>(null);

  // Timeout for delayed hiding
  let hideTimeout: ReturnType<typeof setTimeout> | null = null;
  const HOVER_DELAY = 300; // ms

  /* --------------------------------- helpers -------------------------------- */
  const getElements = (index: number) => {
    const viewport = get(viewportElem);
    const trigger = get(triggerElems)[`trigger-${index}`];
    const panel = get(panelElems)[`panel-${index}`];

    return { viewport, trigger, panel };
  };

  const setViewportAttributes = (
    viewport: HTMLDivElement,
    state: 'active' | 'inactive',
    width: number,
    height: number
  ) => {
    viewport.setAttribute('style', `--viewport-width: ${width}px; --viewport-height: ${height}px;`);
    viewport.setAttribute('data-state', state);
  };

  /* --------------------------------- actions -------------------------------- */
  const actions = {
    showPanel: (index: number) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }

      const { viewport, trigger, panel } = getElements(index);
      if (!viewport || !trigger || !panel) return;

      activeIndex.set(index);
      setViewportAttributes(viewport, 'active', panel.scrollWidth, panel.scrollHeight);
    },

    hidePanel: (index: number) => {
      const { viewport, trigger, panel } = getElements(index);
      if (!viewport || !trigger || !panel) return;

      activeIndex.set(null);
      setViewportAttributes(viewport, 'inactive', 0, 0);
    },

    scheduleHidePanel: (index: number) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      hideTimeout = setTimeout(() => {
        actions.hidePanel(index);
        hideTimeout = null;
      }, HOVER_DELAY);
    },

    cancelHidePanel: () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    }
  };

  const context: NewHeaderContext = {
    headerElem,
    viewportElem,
    navElem,
    triggerElems,
    panelElems,
    activeIndex,
    actions
  };

  setContext(NEW_HEADER_CONTEXT_KEY, context);
  return context;
}

export function getNewHeaderContext(): NewHeaderContext {
  const context = getContext<NewHeaderContext>(NEW_HEADER_CONTEXT_KEY);

  if (!context) {
    throw new Error('New Header context must be used within a New Header Context Provider');
  }

  return context;
}
