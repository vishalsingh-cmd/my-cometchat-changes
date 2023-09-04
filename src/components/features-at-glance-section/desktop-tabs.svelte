<script lang="ts">
  import type { FeatureItemStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  import ButtonTab from './button-tab.svelte';

  const dispatch = createEventDispatcher();

  export let activeTab = 0;
  export let options: FeatureItemStoryblok[];

  let className: undefined | string = undefined;
  export { className as class };
</script>

<div class={cn('hidden w-full flex-row gap-3 overflow-x-scroll break-all md:flex', className)}>
  {#each options as tab, i}
    <ButtonTab
      id={tab.id}
      label={tab.title}
      isActive={activeTab === i}
      on:click={() =>
        dispatch('optionSelect', {
          i
        })}
    />
  {/each}
</div>
