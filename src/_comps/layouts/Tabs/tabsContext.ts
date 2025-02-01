import { getContext, setContext } from 'svelte';
import { writable, type Writable, get } from 'svelte/store';

export interface TabsContext {
  selectedValue: Writable<string>;
  orientation: Writable<'horizontal' | 'vertical'>;
  activateOnFocus: Writable<boolean>;
  registerTrigger: (value: string) => void;
  unregisterTrigger: (value: string) => void;
  triggerValues: Writable<string[]>;
  selectTab: (value: string) => void;
  selectNext: () => void;
  selectPrevious: () => void;
}

const TABS_CONTEXT = Symbol('TABS_CONTEXT');

export function createTabsContext(initialValue: string): TabsContext {
  const selectedValue = writable(initialValue);
  const orientation = writable<'horizontal' | 'vertical'>('horizontal');
  const activateOnFocus = writable(true);
  const triggerValues = writable<string[]>([]);

  const selectTab = (value: string) => {
    selectedValue.set(value);
  };

  const selectNext = () => {
    const values = get(triggerValues);
    const currentIndex = values.indexOf(get(selectedValue));
    const nextIndex = (currentIndex + 1) % values.length;
    selectedValue.set(values[nextIndex]);
  };

  const selectPrevious = () => {
    const values = get(triggerValues);
    const currentIndex = values.indexOf(get(selectedValue));
    const prevIndex = (currentIndex - 1 + values.length) % values.length;
    selectedValue.set(values[prevIndex]);
  };

  const context: TabsContext = {
    selectedValue,
    orientation,
    activateOnFocus,
    triggerValues,
    registerTrigger: (value: string) => {
      triggerValues.update((values) => [...values, value]);
    },
    unregisterTrigger: (value: string) => {
      triggerValues.update((values) => values.filter((v) => v !== value));
    },
    selectTab,
    selectNext,
    selectPrevious
  };

  setContext(TABS_CONTEXT, context);
  return context;
}

export function getTabsContext(): TabsContext {
  const context = getContext<TabsContext>(TABS_CONTEXT);
  if (!context) throw new Error('Tabs context not found');
  return context;
}
