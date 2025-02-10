<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  const emblaSlide = tv({
    base: ['embla__slide', 'min-w-0']
  });
</script>

<div class={emblaSlide({ class: className })}>
  <slot />
</div>
