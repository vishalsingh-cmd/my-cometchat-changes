<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { navActiveShadowElem } = getNewHeaderContext();
  export let className = '';
  const navActiveShadow = tv({
    base: [
      'absolute bottom-0 pointer-events-none',
      'w-20 hidden xl:block',
      'h-0 data-[state="active"]:h-4',
      'left-[var(--active-trigger-left)]',
      'transition-[height,left] duration-300',
      'bg-[linear-gradient(0deg,_rgba(140,_124,_224,_0.24)_0%,_rgba(140,_124,_224,_0)_100%)]'
    ]
  });
</script>

<div
  class={navActiveShadow({ class: className })}
  data-state="inactive"
  bind:this={$navActiveShadowElem}
/>
