<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';

  const page = tv({
    base: ['']
  });
</script>

<div class={page({ class: className })} {...$$restProps}>
  <slot />
</div>
