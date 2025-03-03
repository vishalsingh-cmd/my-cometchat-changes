<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  export let link: string;

  const navLink = tv({
    base: [
      'relative',
      'font-sans font-semibold text-[#FFFFFF] text-[14px] whitespace-nowrap',
      'flex items-center gap-1 py-8',
      'transition-colors duration-300',
      'group-hover/navitem:text-[#8C7CE0]'
    ]
  });
</script>

<a class={navLink({ class: className })} href={link} target="_blank">
  <slot />
</a>
