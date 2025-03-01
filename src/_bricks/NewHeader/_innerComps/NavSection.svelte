<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  const navSection = tv({
    base: ['']
  });
</script>

<div class={navSection({ class: className })}>
  <slot />
</div>
