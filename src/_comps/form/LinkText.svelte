<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  export let link: string;

  const linkText = tv({
    base: [
      'font-sans font-semibold text-[#FFFFFF] text-[14px] whitespace-nowrap',
      'transition-colors duration-300',
      'hover:text-[#8C7CE0]'
    ]
  });
</script>

<a class={linkText({ class: className })} href={link} target="_blank">
  <slot />
</a>
