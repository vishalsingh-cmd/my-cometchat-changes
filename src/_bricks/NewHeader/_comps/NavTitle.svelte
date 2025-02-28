<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const parah = tv({
    base: [
      'font-sans font-semibold relative',
      'text-[#FFFFFF] text-[14px] leading-[2px]',
      // 'hover:text-[#8C7CE0] cursor-pointer',
      'transition-colors duration-200',
      'group-hover/navitem:text-[#8C7CE0]'
    ]
  });

  let className: undefined | string = undefined;
  export let id = '';
  export { className as class };
  export let as: undefined | 'p' | 'span' | 'a' = 'p';
  export let href: string | undefined = undefined;
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
  class={parah({ class: className })}
  {...as === 'a' ? { href } : {}}
  {...$$restProps}
>
  <slot />
</svelte:element>
