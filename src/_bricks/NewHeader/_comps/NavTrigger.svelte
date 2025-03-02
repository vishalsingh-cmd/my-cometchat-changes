<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { triggerElems, actions } = getNewHeaderContext();

  export let index: number;
  export let className = '';

  const navTrigger = tv({
    base: [
      'relative',
      'font-sans font-semibold text-[#FFFFFF] text-[14px] leading-[2px] whitespace-nowrap',
      'flex items-center gap-1 py-6',
      'transition-colors duration-200',
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
</button>
