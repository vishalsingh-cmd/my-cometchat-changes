<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';

  const featureTabOverlay = tv({
    base: [
      'absolute bottom-0 left-0 right-0 h-28',
      'bg-[linear-gradient(180deg,_rgba(10,_9,_20,_0)_0%,_rgba(10,_9,_20,_0.8)_44%,_#0A0914_100%)]'
    ]
  });
</script>

<div data-name="black-mask-overlay" class={featureTabOverlay({ class: className })} />
