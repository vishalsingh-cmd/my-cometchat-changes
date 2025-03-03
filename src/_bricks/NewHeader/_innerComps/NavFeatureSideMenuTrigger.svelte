<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let isActive: boolean;
  export let className = '';
  const navFeatureSideMenuTrigger = tv({
    base: [
      'px-5 py-6  w-full',
      'flex items-center justify-between',
      'font-sans font-semibold text-[14px] text-[#FAFAFF]',
      'transition-colors duration-300'
    ]
  });
</script>

<button
  class={navFeatureSideMenuTrigger({ class: className })}
  data-name="navFeatureSideMenuTrigger"
  data-state={isActive ? 'active' : 'inactive'}
  on:click
>
  <slot />
</button>
