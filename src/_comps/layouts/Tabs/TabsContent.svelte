<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getTabsContext } from './tabsContext';

  export let value: string;
  export let className = '';

  const tabsContent = tv({
    base: ['group/tabsContent']
  });

  const { selectedValue } = getTabsContext();
</script>

<div
  role="tabpanel"
  id={`panel-${value}`}
  aria-labelledby={`trigger-${value}`}
  data-state={$selectedValue === value ? 'active' : 'inactive'}
  hidden={$selectedValue !== value}
  tabindex="0"
  class={tabsContent({ class: className })}
>
  <slot />
</div>
