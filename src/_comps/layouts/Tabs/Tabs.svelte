<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { createTabsContext } from './tabsContext';

  export let className = '';
  export let defaultValue: string;
  export let value: string | undefined = undefined;
  export let orientation: 'horizontal' | 'vertical' = 'horizontal';
  export let activateOnFocus = true;

  const tabs = tv({
    base: ['group/tabsRoot']
  });

  const {
    selectedValue,
    orientation: orientationStore,
    activateOnFocus: activateOnFocusStore
  } = createTabsContext(defaultValue);

  $: if (value !== undefined) {
    $selectedValue = value;
  }
  $: $orientationStore = orientation;
  $: $activateOnFocusStore = activateOnFocus;
</script>

<div class={tabs({ class: className })}>
  <slot />
</div>
