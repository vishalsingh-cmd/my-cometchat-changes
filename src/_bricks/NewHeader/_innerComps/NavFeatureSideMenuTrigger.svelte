<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let index: number;
  export let className = '';
  const navFeatureSideMenuTrigger = tv({
    base: [
      'px-5 py-6 flex',
      'font-sans font-semibold text-[14px] text-[#FAFAFF]',
      'transition-colors duration-300',
      'data-[state="active"]:text-[#6852D6]',
      'xl:text-[16px] xl:px-4 xl:bg-[#14131D]',
      'xl:data-[state="active"]:bg-[#0A0914] xl:data-[state="active"]:rounded-l-md'
    ]
  });
</script>

<button
  class={navFeatureSideMenuTrigger({ class: className })}
  data-index={index}
  data-state={index === 0 ? 'active' : 'inactive'}
>
  <slot />
</button>
