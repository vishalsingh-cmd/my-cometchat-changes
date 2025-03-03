<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { actions } = getNewHeaderContext();

  export let index: number;
  export let className = '';

  const navPanelBackBtn = tv({
    base: [
      'sticky top-0 bg-[#0A0914] z-[1]',
      'flex items-center gap-1 py-3 px-5',
      'font-sans font-semibold text-[14px] text-[#FAFAFF]',
      'border-b border-[#22212C]'
    ]
  });

  const onShowPanel = () => {
    actions.hidePanel(index);
  };
</script>

<button class={navPanelBackBtn({ class: className })} on:click={onShowPanel}>
  <Icon icon="chevron-left" size="xs" />
  Back
</button>
