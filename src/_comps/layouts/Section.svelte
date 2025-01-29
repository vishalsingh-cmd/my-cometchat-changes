<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';

  const section = tv({
    base: ['']
  });
</script>

<section class={section({ class: className })} {...$$restProps}>
  <slot />
</section>
