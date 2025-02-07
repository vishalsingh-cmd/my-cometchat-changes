<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  export let position: 'top' | 'bottom' = 'top';

  const stepBorderBeam = tv({
    base: ['absolute left-0 right-0 ', 'w-full h-[1px] bg-[#FAFAFF] bg-opacity-10'],
    variants: {
      position: {
        top: [
          'top-0',
          'group-first-of-type/step:w-[110%] group-first-of-type/step:-translate-x-[5%]',
          'group-first-of-type/step:bg-border-beam-white group-first-of-type/step:opacity-70'
        ],
        bottom: [
          'bottom-0',
          'group-last-of-type/step:w-[110%] group-last-of-type/step:-translate-x-[5%]',
          'group-last-of-type/step:bg-border-beam-white group-last-of-type/step:opacity-70'
        ]
      }
    },
    defaultVariants: {
      position: position
    }
  });
</script>

<div class={stepBorderBeam({ class: className })} />
