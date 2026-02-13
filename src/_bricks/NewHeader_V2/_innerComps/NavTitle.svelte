<script>
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  const navTitle = tv({
    base: ['font-sans text-[14px] font-medium leading-[16px] text-[#FAFAFF] text-opacity-40']
  });
</script>

<p class={navTitle({ class: className })}>
  <slot />
</p>
