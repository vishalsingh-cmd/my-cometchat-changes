<script lang="ts">
  export let activeTabValue: number;
  export let id: number;
</script>

{#if activeTabValue === id}
  <div class="" id="{id}-tabitem" role="tabpanel" aria-labelledby="{id}-tab">
    <slot />
  </div>
{/if}
