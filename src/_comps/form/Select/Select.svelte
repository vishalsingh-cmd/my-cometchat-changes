<script lang="ts">
  import { SelectEvents, SelectProps, SelectValue } from './select.types';
  import { createSelectContext } from './SelectContext';
  import { onMount, createEventDispatcher } from 'svelte';

  type T = $$Generic<SelectValue>;
  type $$Props = SelectProps<T>;

  export let value: T | null = null;
  export let disabled = false;
  export let className = '';

  const dispatch = createEventDispatcher<SelectEvents<T>>();
  const { isOpen, selectedValue, disabled: disabledStore } = createSelectContext<T>();

  $: {
    $selectedValue = value;
    dispatch('change', { value: $selectedValue });
  }
  $: $disabledStore = disabled;

  let selectEl: HTMLDivElement;

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectEl && !selectEl.contains(event.target as Node)) {
        $isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div
  class="relative w-full {className}"
  bind:this={selectEl}
  data-state={$isOpen ? 'open' : 'closed'}
>
  <slot />
</div>
