<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { navActiveShadowElem } = getNewHeaderContext();
  export let className = '';

  const navActiveShadow = tv({
    base: [
      'absolute bottom-0 pointer-events-none',
      'hidden xl:block',
      'left-[var(--active-trigger-left)]',
      'w-[var(--active-trigger-width)]',
      'transition-all duration-300 ease-out',
      // Opacity transitions for smooth hide/show
      'opacity-0 data-[state="active"]:opacity-100',
      // Keep behind dropdown panel
      'z-[-1]'
    ]
  });
</script>

<div
  class={navActiveShadow({ class: className })}
  data-state="inactive"
  bind:this={$navActiveShadowElem}
>
  <!-- Gradient glow -->
  <div
    class="absolute bottom-[1px] left-1/2 h-4 w-[calc(100%+16px)] -translate-x-1/2 bg-gradient-to-t from-[#8C7CE0]/[0.24] to-transparent"
  />
  <!-- Solid bottom border -->
  <div
    class="absolute bottom-0 left-1/2 h-[1px] w-[calc(100%+16px)] -translate-x-1/2 bg-[#6852D6]"
  />
</div>
