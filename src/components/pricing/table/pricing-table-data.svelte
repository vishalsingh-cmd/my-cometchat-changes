<script lang="ts">
  import type { PricingTableGroupStoryblok } from '$types/bloks';

  import PricingTableDataGroup from './pricing-table-data-group.svelte';

  export let data: PricingTableGroupStoryblok[];
</script>

<!-- Descktop -->
<div class="hidden flex-col md:grid">
  {#each data as group}
    <PricingTableDataGroup {group} />
  {/each}
</div>

<!-- Mobile -->
