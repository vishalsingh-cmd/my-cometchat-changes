<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const heading = tv({
    base: ['font-sans font-semibold'],
    variants: {
      varient: {
        h1: '',
        h2: ['text-[32px] leading-[33px] text-[#FAFAFF]', 'lg:text-[48px] lg:leading-[50px]'],
        h3: ['text-[18px] leading-[20px]', 'lg:text-[24px] lg:leading-[26px]'],
        h4: '',
        h5: '',
        h6: ['text-[18px] leading-[20px]', 'lg:text-[22px] lg:leading-[24px]']
      }
    },

    defaultVariants: {
      varient: 'h2'
    }
  });

  let className: undefined | string = undefined;
  export let id = '';
  export { className as class };
  export let as: undefined | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  export let varient: undefined | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
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
  class={heading({ varient, class: className })}
  {...$$restProps}
>
  <slot />
</svelte:element>
