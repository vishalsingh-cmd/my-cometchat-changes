<script lang="ts">
  import { SelectValue } from './select.types';
  import { getSelectContext } from './SelectContext';

  type T = $$Generic<SelectValue>;

  export let className = '';

  const { isOpen, selectedValue, disabled } = getSelectContext<T>();

  function handleClick(): void {
    if (!$disabled) {
      $isOpen = !$isOpen;
    }
  }
</script>

<button
  type="button"
  class="hover:bg-zinc-800 w-full rounded-lg bg-[#14151A] px-4 py-3 transition-colors duration-200 {className}"
  class:rounded-b-none={$isOpen}
  on:click={handleClick}
  disabled={$disabled}
  aria-expanded={$isOpen}
>
  <slot selected={$selectedValue} />
</button>
