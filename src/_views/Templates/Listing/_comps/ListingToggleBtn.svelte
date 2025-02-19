<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getTemplatesContext } from '../_context/templates.context';

  export let className = '';
  const { areFiltersOpen, actions } = getTemplatesContext();

  const listingToggleBtn = tv({
    base: [
      'font-inter font-[500] text-[#141414] text-center whitespace-nowrap',
      'py-3 px-5 flex items-center justify-center min-w-[140px]',
      'border border-[#DCDCDC] hover:border-[#b3b1b1] rounded-[8px]'
    ]
  });
</script>

<button class={listingToggleBtn({ class: className })} on:click={actions.toggleFilters}>
  {#if $areFiltersOpen}
    Hide Categories
  {:else}
    Show Categories
  {/if}
</button>
