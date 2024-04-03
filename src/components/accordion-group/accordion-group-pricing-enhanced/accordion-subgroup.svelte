<script lang="ts">
  import type { PricingTableSubgroupEnhancedStoryblok } from '$types/bloks';
  import AccordionLine from '$components/accordion-group/accordion-group-pricing-enhanced/accordion-line.svelte';
  import { cn } from '$lib/utils';
  import Icon from '$components/icon/icon.svelte';

  export let activeTabIndex = 0;
  export let subgroups: PricingTableSubgroupEnhancedStoryblok[] = [];
  export let open = false;
</script>

<div id="subgroup" class="col-span-6 text-start">
  {#each subgroups as subgroup}
    {@const { title, lines } = subgroup}

    <button
      on:click={() => (open = !open)}
      class={cn(
        'flex w-full items-center justify-start gap-3 text-start text-gray-12',
        // if expanded change the color of the title
        { 'text-gray-12': !open, 'text-brand-9': open }
      )}
    >
      {#if open}
        <Icon icon="minus" size="sm" />
      {:else}
        <Icon icon="plus" size="sm" />
      {/if}
      <p
        id="subgroup-title"
        class="ml-3 w-full py-5 text-start text-lg/snug font-medium tracking-wide"
      >
        {title}
      </p>
    </button>

    {#if open}
      <div class="subgroup-content">
        <AccordionLine {lines} {activeTabIndex} />
      </div>
    {/if}
  {/each}
</div>
