<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  const navContent = tv({
    base: ['relative w-full h-full']
  });
</script>

<div class={navContent({ class: className })}>
  <slot />
</div>
