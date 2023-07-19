<script lang="ts">
  export let number: number;
  export let isCurrent = false;
  //   export let onPageChange: (page: number) => void;
</script>

{#if isCurrent}
  <button>
    {number}
  </button>
{:else}
  <button>
    {number}
  </button>
{/if}
