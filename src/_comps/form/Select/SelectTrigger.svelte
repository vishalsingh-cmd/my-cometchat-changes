<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  export let className = '';

  export let isOpen: boolean;
  export let setIsOpen: (changedValue: boolean) => void;

  function handleClick(): void {
    setIsOpen(!isOpen);
  }

  const selectTrigger = tv({
    base: ['group/selectTrigger']
  });
</script>

<button
  type="button"
  class={selectTrigger({ class: className })}
  on:click={handleClick}
  aria-expanded={isOpen}
  data-state={isOpen ? 'opened' : 'closed'}
>
  <slot />
</button>
