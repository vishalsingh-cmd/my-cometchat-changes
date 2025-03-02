<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  export let link: string;

  const navTrigger = tv({
    base: [
      'relative',
      'font-sans font-semibold text-[#FFFFFF] text-[14px] leading-[2px] whitespace-nowrap',
      'flex items-center gap-1 py-2',
      'transition-colors duration-200',
      'group-hover/navitem:text-[#8C7CE0]'
    ]
  });
</script>

<a class={navTrigger({ class: className })} href={link} target="_blank">
  <slot />
</a>
