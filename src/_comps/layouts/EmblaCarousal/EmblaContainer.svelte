<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  const carousal = tv({
    base: ['embla__container', 'flex']
  });
</script>

<div class={carousal({ class: className })}>
  <slot />
</div>
