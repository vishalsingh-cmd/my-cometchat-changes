<script lang="ts">
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  import AccordionSubgroup from '$components/accordion-group/accordion-group-pricing-enhanced/accordion-subgroup.svelte';
  import { cn } from '$lib/utils';
  import Icon from '$components/icon/icon.svelte';

  export let activeTabIndex = 0;
  export let group: PricingTableGroupEnhancedStoryblok;
  export let index: number; // Pass the index of the group
  export let open = false;
  let initiallyExpanded = index === 0;
</script>

{#if group}
  {@const { title, subgroup } = group}
  <div id="group" class="col-span-6 ml-0 flex w-full flex-col border-b border-gray-12/[.08]">
    <button
      class="flex w-full items-center justify-start gap-3 text-gray-12"
      on:click={() => (open = !open)}
    >
      {#if open}
        <Icon icon="minus" size="sm" class="text-brand-9" />
      {:else}
        <Icon icon="plus" size="sm" />
      {/if}
      <p
        id="group-title"
        class={cn(
          'bg-gray-1 py-8 text-start text-xl/tighter font-semibold text-gray-12',
          open ? 'text-brand-9' : 'text-gray-12'
        )}
      >
        {title}
      </p>
    </button>
    {#if open}
      <div class="group-content">
        <AccordionSubgroup subgroups={subgroup} {activeTabIndex} open={initiallyExpanded} />
      </div>
    {/if}
  </div>
{/if}
