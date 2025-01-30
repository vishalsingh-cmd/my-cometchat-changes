<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const parah = tv({
    base: ['font-sans font-medium'],
    variants: {
      size: {
        xl: ['text-[#FAFAFF]/75 text-[18px] leading-[21px]', 'lg:text-[22px] lg:leading-[26px]']
      }
    },

    defaultVariants: {
      size: 'xl'
    }
  });

  let className: undefined | string = undefined;
  export let id = '';
  export { className as class };
  export let as: undefined | 'p' | 'span' = 'p';
  export let size: undefined | 'xl' = 'xl';
</script>

<svelte:element
  this={as}
  {id}
  on:click
  on:mouseenter
  on:mousemove
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  on:focus
  on:blur
  class={parah({ size, class: className })}
  {...$$restProps}
>
  <slot />
</svelte:element>
