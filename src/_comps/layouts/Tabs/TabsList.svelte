<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getTabsContext } from './tabsContext';

  export let className = '';
  const tabsList = tv({
    base: ['group/tabsList']
  });

  const { orientation } = getTabsContext();

  let listElement: HTMLDivElement;

  function handleKeyDown(event: KeyboardEvent) {
    if (!listElement) return;

    const triggers = Array.from(listElement.querySelectorAll('[role="tab"]'));
    const currentIndex = triggers.findIndex((trigger) => trigger === document.activeElement);

    if (currentIndex === -1) return;

    const isHorizontal = $orientation === 'horizontal';
    let newIndex: number;

    switch (event.key) {
      case isHorizontal ? 'ArrowRight' : 'ArrowDown':
        event.preventDefault();
        newIndex = (currentIndex + 1) % triggers.length;
        (triggers[newIndex] as HTMLElement).focus();
        break;
      case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
        event.preventDefault();
        newIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        (triggers[newIndex] as HTMLElement).focus();
        break;
      case 'Home':
        event.preventDefault();
        (triggers[0] as HTMLElement).focus();
        break;
      case 'End':
        event.preventDefault();
        (triggers[triggers.length - 1] as HTMLElement).focus();
        break;
    }
  }
</script>

<div
  bind:this={listElement}
  role="tablist"
  tabindex="0"
  aria-orientation={$orientation}
  on:keydown={handleKeyDown}
  class={tabsList({ class: className })}
>
  <slot />
</div>
