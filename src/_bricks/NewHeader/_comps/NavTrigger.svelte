<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  const navTrigger = tv({
    base: [
      'relative',
      'font-sans font-semibold text-[#FFFFFF] text-[14px] leading-[2px] whitespace-nowrap',
      'flex items-center gap-1 py-2',
      'transition-colors duration-200',
      'group-hover/navitem:text-[#8C7CE0]'
    ]
  });

  export let className = '';
  export let id = '';
  export let as: 'button' | 'a' = 'a';
</script>

<svelte:element this={as} {id} class={navTrigger({ class: className })} {...$$restProps}>
  <slot />
</svelte:element>
