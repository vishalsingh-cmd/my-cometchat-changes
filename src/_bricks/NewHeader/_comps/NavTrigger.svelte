<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { triggerElems, actions } = getNewHeaderContext();

  export let index: number;
  export let className = '';

  const navTrigger = tv({
    base: [
      'relative w-full py-6',
      'flex items-center justify-between gap-1',
      'font-sans font-semibold text-[#FFFFFF] text-[14px] whitespace-nowrap',
      'border-b border-b-[#FAFAFF] border-opacity-5',
      'transition-colors duration-300',
      'group-hover/navitem:text-[#8C7CE0]'
    ]
  });

  const handleMouseEnter = () => {
    actions.showPanel(index);
  };

  const handleMouseLeave = () => {
    actions.scheduleHidePanel(index);
  };
</script>

<button
  class={navTrigger({ class: className })}
  data-name="nav-trigger"
  data-index={index}
  bind:this={$triggerElems[`trigger-${index}`]}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <slot />

  <Icon icon="chevron-right" size="xs" />
</button>
