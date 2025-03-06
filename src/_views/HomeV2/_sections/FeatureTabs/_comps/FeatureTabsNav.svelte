<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';

  const featureTabsNav = tv({
    base: [
      'flex items-center justify-start gap-5 px-4',
      'overflow-x-auto overflow-y-clip',
      'sm:justify-center',
      'lg:gap-8'
    ]
  });
</script>

<div
  data-scrollbar="hide"
  class={featureTabsNav({ class: className })}
  data-name="feature-tabs-nav"
>
  <slot />
</div>
