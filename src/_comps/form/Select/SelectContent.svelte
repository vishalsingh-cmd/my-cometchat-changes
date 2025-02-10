<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { slide } from 'svelte/transition';

  export let isOpen: boolean;
  export let className = '';

  const selectContent = tv({
    base: ['']
  });
</script>

{#if isOpen}
  <div class={selectContent({ class: className })} transition:slide={{ duration: 300 }}>
    <slot />
  </div>
{/if}
