<script lang="ts">
  export let number: number;
  export let isCurrent = false;
  export let onPageChange: (page: number) => void;
</script>

{#if isCurrent}
  <button class="text-brand-9">
    {number}
  </button>
{:else}
  <button on:click={() => onPageChange(number)}>
    {number}
  </button>
{/if}
