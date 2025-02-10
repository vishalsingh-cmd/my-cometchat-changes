<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let index: number;
  export let activeIndex: number;
  export let setActiveIndex: (changedIndex: number) => void;
  export let setIsOpen: (changedValue: boolean) => void;
  export let disabled = false;
  export let className = '';

  const isSelected = activeIndex === index;

  function handleSelect(): void {
    if (!disabled) {
      setActiveIndex(index);
      setIsOpen(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Space') {
      event.preventDefault(); // Prevent page scroll on space
      handleSelect();
    }
  }

  const selectOption = tv({
    base: ['cursor-pointer']
  });
</script>

<div
  class={selectOption({ class: className })}
  role="option"
  aria-selected={isSelected}
  aria-disabled={disabled}
  tabindex={disabled ? -1 : 0}
  on:click={handleSelect}
  on:keydown={handleKeyDown}
>
  <slot {isSelected} />
</div>
