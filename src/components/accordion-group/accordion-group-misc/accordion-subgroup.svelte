<script lang="ts">
  import type { IAccordionSubgroup } from '$lib/types';
  import AccordionLine from './accordion-line.svelte';

  export let subgroups: IAccordionSubgroup[] = [];
  let open = true; // Subgroups start initially open
</script>

<div class="subgroup">
  {#each subgroups as subgroup}
    <button on:click={() => (open = !open)}>
      {subgroup.subgroupTitle}
    </button>

    {#if open}
      <div class="subgroup-content">
        {#each subgroup.lines as line}
          <AccordionLine {line} />
        {/each}
      </div>
    {/if}
  {/each}
</div>
