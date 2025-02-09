import { Writable } from 'svelte/store';

export type SelectValue = string | number | boolean | null;

export interface SelectOption<T extends SelectValue> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface SelectContextValue<T extends SelectValue> {
  isOpen: boolean;
  selectedValue: T | null;
  activeIndex: number;
  disabled: boolean;
}

export interface SelectContext<T extends SelectValue> {
  isOpen: Writable<boolean>;
  selectedValue: Writable<T | null>;
  activeIndex: Writable<number>;
  disabled: Writable<boolean>;
  close: () => void;
  select: (value: T) => void;
  setActiveIndex: (index: number) => void;
}

export interface SelectProps<T extends SelectValue> {
  value: T | null;
  disabled?: boolean;
  class?: string;
}

export interface SelectEvents<T extends SelectValue> {
  change: {
    value: T | null;
  };
}
