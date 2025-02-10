import { type Writable, writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

export interface SelectContext {
  isOpen: Writable<boolean>;
  setIsOpen: (changedValue: boolean) => void;
  activeIndex: Writable<number>;
  setActiveIndex: (index: number) => void;
  onChange: (callback: (index: number) => void) => () => void;
}

const SELECT_CTX = (CONTEXT_ID: string) => Symbol('SELECT_CONTECT_' + CONTEXT_ID);

export function createSelectContext(CONTEXT_ID: string, initialIndex = -1): SelectContext {
  const activeIndex = writable<number>(initialIndex);
  const isOpen = writable<boolean>(false);
  const eventTarget = new EventTarget();

  const setActiveIndex = (index: number) => {
    activeIndex.set(index);
    const event = new CustomEvent('change', { detail: index });
    eventTarget.dispatchEvent(event);
  };

  const setIsOpen = (changedValue: boolean) => {
    isOpen.update(() => changedValue);
  };

  const onChange = (callback: (index: number) => void) => {
    const unsubscribe = activeIndex.subscribe(callback);

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      callback(customEvent.detail);
    };

    eventTarget.addEventListener('change', handler);

    return () => {
      unsubscribe();
      eventTarget.removeEventListener('change', handler);
    };
  };

  const store: SelectContext = {
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    onChange
  };

  setContext(SELECT_CTX(CONTEXT_ID), store);
  return store;
}

export function getSelectContext(CONTEXT_ID: string) {
  const context = getContext<SelectContext>(SELECT_CTX(CONTEXT_ID));
  if (!context) {
    throw new Error('Select components must be used within a <Select> component');
  }
  return context;
}
