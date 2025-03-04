<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';

  export let className = '';
  export let isSidemenu = false;
  let navSectionElem: HTMLDivElement;

  const navSection = tv({
    base: ['']
  });

  onMount(() => {
    if (isSidemenu && navSectionElem) {
      const navPanelElem = navSectionElem.closest('[data-name="nav-panel"]');
      navPanelElem?.setAttribute('data-issidemenu', 'yes');
    }
  });
</script>

<div class={navSection({ class: className })} bind:this={navSectionElem}>
  <slot />
</div>
