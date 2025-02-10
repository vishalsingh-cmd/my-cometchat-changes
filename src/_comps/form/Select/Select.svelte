<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';

  export let isOpen: boolean;
  export let setIsOpen: (changedValue: boolean) => void;
  export let className = '';

  let selectEl: HTMLDivElement;

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectEl && !selectEl.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const select = tv({
    base: ['relative w-full']
  });
</script>

<div
  class={select({ class: className })}
  bind:this={selectEl}
  data-state={isOpen ? 'open' : 'closed'}
>
  <slot />
</div>
