<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  type positionType =
    | 'topLeft'
    | 'topMiddle'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomMiddle'
    | 'bottomRight';

  export let className = '';
  export let position: positionType;
  const secureDecCircle = tv({
    base: [
      'absolute h-4 w-4 bg-[#0A0914] z-[1]',
      'rounded-[50%] border border-[#FAFAFF] border-opacity-10'
    ],
    variants: {
      position: {
        topLeft: ['left-0 top-0', '-translate-x-1/2 -translate-y-1/2'],
        topMiddle: ['left-1/2 top-0', '-translate-x-1/2 -translate-y-1/2'],
        topRight: ['left-full top-0', '-translate-x-1/2 -translate-y-1/2'],
        bottomLeft: ['left-0 bottom-0', '-translate-x-1/2 translate-y-1/2'],
        bottomMiddle: ['left-1/2 bottom-0', '-translate-x-1/2 translate-y-1/2'],
        bottomRight: ['left-full bottom-0', '-translate-x-1/2 translate-y-1/2']
      }
    },
    defaultVariants: {
      position: position
    }
  });
</script>

<div class={secureDecCircle({ class: className })} />
