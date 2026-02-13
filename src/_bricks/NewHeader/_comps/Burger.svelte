<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  import { get } from 'svelte/store';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { isNavExpanded, actions } = getNewHeaderContext();

  export let className = '';
  const burger = tv({
    base: ['block xl:hidden', 'z-[1]']
  });

  const onClick = () => {
    const state = get(isNavExpanded);
    !state ? actions.activateNav() : actions.deactivateNav();
  };
</script>

<div class={burger({ class: className })}>
  <Button aria-label="Menu button" variant="secondary" on:click={onClick}>
    <Icon size="sm" icon={$isNavExpanded ? 'x' : 'menu-01'} class="opacity-80" />
  </Button>
</div>
