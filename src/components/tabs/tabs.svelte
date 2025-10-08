<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import TabItem from './tab-item.svelte';

  const dispatch = createEventDispatcher();

  let className: undefined | string = undefined;
  export { className as class };
  export let options: {
    id: number;
    label: string;
  }[];
  export let activeTab = 0;
  export let navBgTheme: 'light' | 'dark' = 'light';

  const navBg = {
    light: 'gray-1',
    dark: '[#0A0914]'
  };
</script>

<div
  class={cn(
    ` mx-auto flex w-full flex-row gap-4 overflow-auto break-all bg-${navBg[navBgTheme]} px-container md:gap-6`,
    className
  )}
  role="tablist"
>
  {#each options as tab}
    <TabItem
      {navBgTheme}
      id={tab.id}
      on:click={() =>
        dispatch('optionSelect', {
          i: tab.id
        })}
      isActive={activeTab === tab.id}
      label={tab.label}
    />
  {/each}
</div>
