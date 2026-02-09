<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let isActive: boolean;
  export let className = '';
  const navFeatureSideMenuTrigger = tv({
    base: [
      'px-5 py-6 w-full',
      'flex items-center justify-between',
      /*Updated Typography: 14px, 600 weight, 140% leading, 2% tracking */
      'font-sans font-semibold text-[14px] leading-[1.4] tracking-[0.02em] text-[#FAFAFF]',
      'transition-colors duration-300',

      /*Removed lg:text-[16px] to keep it 14px consistently */
      ' xl:data-[state="active"]:text-[#6852D6] ',
      ' xl:data-[state="active"]:bg-[#0F0E19] '
    ]
  });
</script>

<button
  class={navFeatureSideMenuTrigger({ class: className })}
  data-name="navFeatureSideMenuTrigger"
  data-state={isActive ? 'active' : 'inactive'}
  on:click
  on:pointerenter
>
  <slot />
</button>
