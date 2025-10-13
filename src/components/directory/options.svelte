<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cva } from 'class-variance-authority';

  import { string } from '$lib/strings';
  import { cn } from '$lib/utils';

  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Input from '$components/input.svelte';

  const dispatch = createEventDispatcher();

  export let numberOfSelectedTags = 0;
  export let areFiltersOpen = false;
  export let value: string | undefined;

  const badge = cva([
    'min-w-[20px]',
    'rounded-md',
    'bg-brand-9',
    'px-[3px] py-0.5',
    'text-xxs font-semibold leading-normal tracking-widest text-brand-1'
  ]);
</script>

<div
  class="relative mb-8 flex w-full flex-row-reverse items-center justify-between gap-3 lg:flex-row"
>
  <Button
    variant="secondary"
    on:click={() => dispatch('toggleFiltersPanel')}
    class="gap-1.5 border border-gray-1/10 text-gray-1"
  >
    <!-- Desktop -->
    <span class="hidden lg:block">
      {#if areFiltersOpen}
        {string('directory.hide_filters')}
      {:else}
        {string('directory.show_filters')}
      {/if}
    </span>

    <!-- Mobile -->
    <span class="block h-4 w-4 lg:hidden">
      <Icon icon="filter-02" size="xs" />
    </span>

    <!-- Desktop Badge -->
    {#if numberOfSelectedTags > 0}
      <span class={cn(badge(), 'hidden lg:block')}>
        {numberOfSelectedTags}
      </span>
    {/if}
  </Button>

  <!-- Mobile Badge | Add to move it outside `Button` because we have a `overflow: hidden` in it for the hover / background effects -->
  {#if numberOfSelectedTags > 0}
    <span
      class={cn(badge(), 'absolute -right-1 -top-[5px] flex items-center justify-center lg:hidden')}
    >
      {numberOfSelectedTags}
    </span>
  {/if}

  <Input
    bind:value
    icon="search-lg"
    placeholder={string('directory.input_placeholder')}
    class="lg:max-w-[304px]"
  />
</div>
