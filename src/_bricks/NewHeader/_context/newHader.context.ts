import { WINDOW_BREEAKPOINTS } from '$src/_consts/breakpoints.const';
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
  isNavExpanded: Writable<boolean>;
  headerElem: Writable<HTMLElement | null>;
  viewportElem: Writable<HTMLDivElement | null>;
  navElem: Writable<HTMLElement | null>;
  triggerElems: Writable<TriggerElemsObject>;
  panelElems: Writable<PenelElemsObject>;

  actions: {
    showPanel: (index: number) => void;
    hidePanel: () => void;
    scheduleHidePanel: () => void;
    cancelHidePanel: () => void;
    activateNav: () => void;
    deactivateNav: () => void;
  };
}

const NEW_HEADER_CONTEXT_KEY = 'new-header';

export function createNewHeaderContext(): NewHeaderContext {
  const isNavExpanded = writable<boolean>(false);
  const headerElem = writable<HTMLElement | null>(null);
  const viewportElem = writable<HTMLDivElement | null>(null);
  const navElem = writable<HTMLElement | null>(null);
  const triggerElems = writable<TriggerElemsObject>({});
  const panelElems = writable<PenelElemsObject>({});

  // Timeout for delayed hiding
  let prevPanel: HTMLDivElement | null = null;
  let hideTimeout: ReturnType<typeof setTimeout> | null = null;
  const HOVER_DELAY = 300; // ms

  /* --------------------------------- helpers -------------------------------- */
  const getElements = (index: number) => {
    const viewport = get(viewportElem);
    const trigger = get(triggerElems)[`trigger-${index}`];
    const panel = get(panelElems)[`panel-${index}`];

    return { viewport, trigger, panel };
  };

  /* --------------------------------- actions -------------------------------- */
  const actions = {
    showPanel: (index: number) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      const { viewport, panel } = getElements(index);
      if (!viewport || !panel) return;

      if (prevPanel) {
        prevPanel.setAttribute('data-state', 'inactive');
      }
      panel.setAttribute('data-state', 'active');
      viewport.setAttribute('data-state', 'active');
      prevPanel = panel;
    },

    hidePanel: () => {
      const viewport = get(viewportElem);
      if (!viewport) return;

      viewport.setAttribute('data-state', 'inactive');
    },

    scheduleHidePanel: () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      hideTimeout = setTimeout(() => {
        actions.hidePanel();
        hideTimeout = null;
      }, HOVER_DELAY);
    },

    cancelHidePanel: () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
    },

    activateNav: () => {
      isNavExpanded.update(() => true);
      if (window.innerWidth < WINDOW_BREEAKPOINTS.xl) {
        document.body.style.overflow = 'hidden';
      }
    },
    deactivateNav: () => {
      isNavExpanded.update(() => false);
      const viewport = get(viewportElem);
      viewport?.setAttribute('data-state', 'inactive');
      if (window.innerWidth < WINDOW_BREEAKPOINTS.xl) {
        document.body.style.overflow = 'auto';
      }
    }
  };

  const context: NewHeaderContext = {
    isNavExpanded,
    headerElem,
    viewportElem,
    navElem,
    triggerElems,
    panelElems,
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
