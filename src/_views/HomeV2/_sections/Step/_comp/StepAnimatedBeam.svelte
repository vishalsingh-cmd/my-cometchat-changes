<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';

  const stepAnimatedBeam = tv({
    base: [
      'hidden lg:block',
      'absolute left-1/2 top-0 bottom-0',
      'w-[1px] h-full bg-[#FAFAFF] bg-opacity-10',
      '-translate-x-1/2'
    ]
  });
</script>

<div class={stepAnimatedBeam({ class: className })} />
