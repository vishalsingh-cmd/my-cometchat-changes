<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const parah = tv({
    base: [
      'group/navitem relative',
      'font-sans font-semibold',
      'text-[#FFFFFF] text-[14px] leading-[2px]',
      'hover:text-[#8C7CE0] cursor-pointer',
      'transition-colors duration-200'
    ]
  });

  let className: undefined | string = undefined;
  export let id = '';
  export { className as class };
</script>

<li
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
  {...$$restProps}
>
  <slot />
</li>
