<script lang="ts">
  import type { FeatureItemStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  import PricingTierTab from './pricing-tier-tab.svelte';

  const dispatch = createEventDispatcher();

  export let activeTab = 0;
  export let options: { id: number; label: string }[];

  let className: undefined | string = undefined;
  export { className as class };
</script>

<div class={cn('hidden w-full flex-row gap-3 overflow-auto break-all md:flex', className)}>
  {#each options as { id, label }, i}
    <PricingTierTab
      {id}
      {label}
      isActive={activeTab === i}
      on:click={() =>
        dispatch('pricingTierSelected', {
          i
        })}
    />
  {/each}
</div>
