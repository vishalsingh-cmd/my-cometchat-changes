<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  import { get } from 'svelte/store';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { isNavExpanded } = getNewHeaderContext();

  export let className = '';
  const burger = tv({
    base: ['block lg:hidden', 'z-[1]']
  });

  const onClick = () => {
    const state = get(isNavExpanded);
    isNavExpanded.update(() => !state);
  };
</script>

<div class={burger({ class: className })} on:click={onClick}>
  <Button aria-label="Menu button" variant="secondary">
    <Icon size="sm" icon={$isNavExpanded ? 'x' : 'menu-01'} class="opacity-80" />
  </Button>
</div>
