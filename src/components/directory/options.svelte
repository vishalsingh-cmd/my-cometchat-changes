<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { string } from '$lib/strings';

  import Button from '$components/buttons/button.svelte';
  import Input from '$components/input.svelte';

  const dispatch = createEventDispatcher();

  export let selectedTags: string[] = [];
  export let search = '';
  export let areFiltersOpen = false;
</script>

<div class="mb-8 flex w-full items-center justify-between">
  <Button variant="secondary" on:click={() => dispatch('toggleFiltersPanel')} class="gap-[6px]">
    {#if areFiltersOpen}
      {string('directory.hide_filters')}
    {:else}
      {string('directory.show_filters')}
    {/if}
    {#if selectedTags.length > 0}
      <span
        class="min-w-[20px] rounded-md bg-brand-9 px-[3px] py-[2px] text-xxs font-semibold leading-normal tracking-widest text-brand-1"
      >
        {selectedTags.length}
      </span>
    {/if}
  </Button>

  <Input bind:value={search} icon="search-lg" placeholder={string('directory.input_placeholder')} />
</div>
