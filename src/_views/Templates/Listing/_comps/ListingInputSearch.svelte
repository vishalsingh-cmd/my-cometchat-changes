<script lang="ts">
  import Icon from '$src/components/icon/icon.svelte';
  import { tv } from '$src/_utils/tailwind.utils';
  import { getTemplatesContext } from '../_context/templates.context';

  export let className = '';
  export let labelClassName = '';
  export let iconClassName = '';
  export let inputClassName = '';
  export let closeClassName = '';

  const { searchTerm, actions } = getTemplatesContext();
  $: $searchTerm, actions.fetchTemplates();

  const listingInputSearch = tv({
    slots: {
      base: ['relative isolate w-full', 'lg:max-w-[304px]'],
      label: ['font-inter font-[400] text-[#A1A1A1] text-[14px]'],
      icon: ['absolute left-4 top-1/2 -translate-y-2/4'],
      input: [
        'w-full pr-3.5 py-2.5 pl-10',
        'border border-[#E8E8E8] rounded-[8px] focus:border-[#b3b1b1]',
        'placeholder:text-opacity-64',
        'outline-none bg-transparent',
        $searchTerm && $searchTerm.length > 0 && 'pr-10'
      ],
      closeBtn: ['absolute right-4 top-1/2 h-[14px] w-[14px] -translate-y-2/4']
    }
  });

  const { base, label, icon, input, closeBtn } = listingInputSearch();
</script>

<div class={base({ class: className })}>
  <label for={'ListingInputSearch'} class={label({ class: labelClassName })}>
    <Icon icon="search-lg" size="xs" class={icon({ class: iconClassName })} />
    <input class={input({ class: inputClassName })} bind:value={$searchTerm} placeholder="Search" />

    {#if $searchTerm && $searchTerm.length > 0}
      <button class={closeBtn({ class: closeClassName })} on:click={actions.clearSearch}>
        <Icon size="xs" icon="x-circle" />
      </button>
    {/if}
  </label>
</div>
