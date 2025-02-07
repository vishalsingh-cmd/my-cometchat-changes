<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  export let position: 'top' | 'bottom' = 'top';

  const secureBorderBeam = tv({
    base: [
      'absolute left-0 right-0',
      'h-[1px] bg-border-beam-white opacity-70',
      'w-[114%] -translate-x-[7%]'
    ],
    variants: {
      position: {
        top: ['top-0'],
        bottom: ['bottom-0']
      }
    },
    defaultVariants: {
      position: position
    }
  });
</script>

<div class={secureBorderBeam({ class: className })} />
