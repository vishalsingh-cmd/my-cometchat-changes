<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const navItem = tv({
    base: [
      'group/navitem relative',
      'font-sans font-semibold',
      'text-[#FFFFFF] text-[14px] leading-[2px]',
      'hover:text-[#8C7CE0] cursor-pointer',
      'transition-colors duration-200'
    ]
  });

  export let className = '';
</script>

<li class={navItem({ class: className })} {...$$restProps}>
  <slot />
</li>
