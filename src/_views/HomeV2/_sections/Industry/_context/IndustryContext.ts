import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export interface IndustryContext {
  activeIndex: Writable<number>;
  setActiveIndex: (index: number) => void;
  onChange: (callback: (index: number) => void) => () => void;
}

const INDUSTRY_CONTEXT = Symbol('INDUSTRY_CONTEXT');

export function createIndustryContext(initialIndex: number): IndustryContext {
  const activeIndex = writable(initialIndex);
  const eventTarget = new EventTarget();

  const setActiveIndex = (index: number) => {
    activeIndex.set(index);
    const event = new CustomEvent('change', { detail: index });
    eventTarget.dispatchEvent(event);
  };

  const onChange = (callback: (index: number) => void) => {
    activeIndex.subscribe((value) => callback(value))();

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      callback(customEvent.detail);
    };
    eventTarget.addEventListener('change', handler);

    return () => {
      eventTarget.removeEventListener('change', handler);
    };
  };

  const context: IndustryContext = {
    activeIndex,
    setActiveIndex,
    onChange
  };

  setContext(INDUSTRY_CONTEXT, context);
  return context;
}

export const getIndustryContect = () => {
  const context = getContext<IndustryContext>(INDUSTRY_CONTEXT);
  if (!context) throw new Error('Industry context not found');
  return context;
};
