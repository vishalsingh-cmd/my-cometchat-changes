<script lang="ts">
  import { SelectValue } from './select.types';
  import { getSelectContext } from './SelectContext';

  type T = $$Generic<SelectValue>;

  export let value: T;
  export let disabled = false;
  export let className = '';

  const { selectedValue, select } = getSelectContext<T>();

  $: isSelected = $selectedValue === value;

  function handleSelect(): void {
    if (!disabled) {
      select(value);
    }
  }
</script>

<div
  class="text-zinc-200 hover:bg-zinc-800 cursor-pointer rounded-md px-3 py-2 {className}"
  class:bg-zinc-800={isSelected}
  class:opacity-50={disabled}
  class:cursor-not-allowed={disabled}
  role="option"
  aria-selected={isSelected}
  aria-disabled={disabled}
  on:click={handleSelect}
  tabindex={disabled ? -1 : 0}
>
  <slot {isSelected} />
</div>
