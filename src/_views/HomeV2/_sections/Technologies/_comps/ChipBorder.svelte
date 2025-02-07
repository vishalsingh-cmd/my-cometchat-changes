<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let direction: 'horizontal' | 'vertical';
  export let className = '';

  const chipBorder = tv({
    base: ['absolute ', 'bg-[#FAFAFF] bg-opacity-10'],
    variants: {
      direction: {
        horizontal: ['bottom-0 left-0 right-0 translate-y-1/2', 'h-[1px] w-full'],
        vertical: [
          'h-[calc(100%+32px)] w-[1px] left-1/2 top-0 bottom-0 -translate-x-1/2',
          'lg:h-full'
        ]
      }
    },
    defaultVariants: {
      direction: direction
    }
  });
</script>

<div class={chipBorder({ class: className })} />
