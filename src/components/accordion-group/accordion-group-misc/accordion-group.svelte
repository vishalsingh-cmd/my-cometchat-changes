<script lang="ts">
  import type { IAccordionSubgroup } from '$lib/types';
  import AccordionSubgroup from '../accordion-subgroup.svelte';

  export let groupTitle = '';
  export let subgroups: IAccordionSubgroup[];
  export let index: number; // Pass the index of the group
  let open = index === 0; // Open only if the index is 0
</script>

<div class="group">
  <button on:click={() => (open = !open)}>
    {groupTitle}
  </button>
  {#if open}
    <div class="group-content">
      <AccordionSubgroup {subgroups} />
    </div>
  {/if}
</div>
