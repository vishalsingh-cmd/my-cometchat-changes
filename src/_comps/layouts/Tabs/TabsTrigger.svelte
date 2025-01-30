<script lang="ts">
  import { onDestroy } from 'svelte';
  import { tv } from '$src/_utils/tailwind.utils';
  import { getTabsContext } from './tabsContext';

  export let value: string;
  export let className = '';
  const tabsTrigger = tv({
    base: ['group/tabsTrigger']
  });

  const { selectedValue, activateOnFocus, registerTrigger, unregisterTrigger } = getTabsContext();
  registerTrigger(value);

  onDestroy(() => {
    unregisterTrigger(value);
  });

  function handleClick() {
    $selectedValue = value;
  }

  function handleFocus() {
    if ($activateOnFocus) {
      $selectedValue = value;
    }
  }
</script>

<button
  role="tab"
  aria-selected={$selectedValue === value}
  aria-controls={`panel-${value}`}
  id={`trigger-${value}`}
  data-state={$selectedValue === value ? 'active' : 'inactive'}
  tabindex={$selectedValue === value ? 0 : -1}
  on:click={handleClick}
  on:focus={handleFocus}
  class={tabsTrigger({ class: className })}
>
  <slot />
</button>
