<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  import { get } from 'svelte/store';
  import { getNewHeaderContext } from '../_context/newHader.context';

  const { isNavExpanded, actions } = getNewHeaderContext();

  export let className = '';
  const burger = tv({
    base: ['block xl:hidden', 'z-[1]']
  });

  const onClick = () => {
    const state = get(isNavExpanded);
    !state ? actions.activateNav() : actions.deactivateNav();
  };
</script>

<div class={burger({ class: className })}>
  <Button
    on:click={onClick}
    aria-label="Menu button"
    class="flex h-[36px] w-[40px] items-center justify-center gap-[10px] rounded-[10px] border border-[#FAFAFF1A] bg-[#FAFAFF05] px-[12px] py-[10px] transition-all duration-300 ease-out"
  >
    {#if $isNavExpanded}
      <Icon size="sm" icon="x" class="opacity-80" />
    {:else}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="opacity-80"
      >
        <path d="M2.5 4.5H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M2.5 8H9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M2.5 11.5H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    {/if}
  </Button>
</div>
