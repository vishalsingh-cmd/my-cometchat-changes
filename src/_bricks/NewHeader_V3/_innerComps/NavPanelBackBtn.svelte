<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { actions } = getNewHeaderContext();
  export let className = '';

  const navPanelBackBtn = tv({
    base: [
      'sticky top-0 bg-[#0A0914] z-[1]',
      'flex items-center gap-1 py-3 px-5',
      'font-sans font-semibold text-[14px] text-[#FAFAFF]',
      'border-b border-[#22212C]',
      'before:content-[""] before:absolute before:bottom-full before:left-0 before:right-0 before:h-[60px] before:bg-[#0A0914]',

      'xl:hidden'
    ]
  });

  const onShowPanel = () => {
    actions.hidePanel();
  };
</script>

<button class={navPanelBackBtn({ class: className })} on:click={onShowPanel}>
  <div class="flex h-4 w-4 items-center justify-center">
    <Icon icon="arrow-narrow-left" class="h-3 w-3 text-[#FAFAFF]" />
  </div>
  Back
</button>
