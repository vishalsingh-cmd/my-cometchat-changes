<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const navItem = tv({
    base: ['group/navitem', 'flex items-center w-full']
  });

  export let className = '';
</script>

<li class={navItem({ class: className })} {...$$restProps}>
  <slot />
</li>
