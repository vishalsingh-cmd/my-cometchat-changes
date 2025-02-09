<script lang="ts">
  import { SelectValue } from './select.types';
  import { getSelectContext } from './SelectContext';
  import { slide } from 'svelte/transition';

  type T = $$Generic<SelectValue>;

  export let className = '';

  const { isOpen } = getSelectContext<T>();
</script>

{#if $isOpen}
  <div
    class="border-zinc-800 rounded-b-lg border-t bg-[#14151A] {className}"
    transition:slide={{ duration: 200 }}
  >
    <div class="p-4">
      <slot />
    </div>
  </div>
{/if}
