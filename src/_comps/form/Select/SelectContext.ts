import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import { SelectContext, SelectValue } from './select.types';

const SELECT_CTX = Symbol();

export function createSelectContext<T extends SelectValue>(): SelectContext<T> {
  const isOpen = writable<boolean>(false);
  const selectedValue = writable<T | null>(null);
  const activeIndex = writable<number>(-1);
  const disabled = writable<boolean>(false);

  const store: SelectContext<T> = {
    isOpen,
    selectedValue,
    activeIndex,
    disabled,
    close: () => isOpen.set(false),
    select: (value: T) => {
      selectedValue.set(value);
      isOpen.set(false);
    },
    setActiveIndex: (index: number) => activeIndex.set(index)
  };

  setContext(SELECT_CTX, store);
  return store;
}

export function getSelectContext<T extends SelectValue>(): SelectContext<T> {
  const context = getContext<SelectContext<T>>(SELECT_CTX);
  if (!context) {
    throw new Error('Select components must be used within a <Select> component');
  }
  return context;
}
