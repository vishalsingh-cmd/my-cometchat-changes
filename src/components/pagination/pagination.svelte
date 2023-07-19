<script lang="ts">
  import PaginationItem from './pagination-item.svelte';

  export let totalCountOfRegisters: number;
  export let registersPerPage = 10;
  export let currentPage = 1;
  //   export let onPageChange: (page: number) => void;

  // 2 to 5 -> 2 3 4 5
  // 2 to 5 -> [0, 0 ,0] -> [2 + 0 + 1 , 2 + 1 + 1 , 2 + 2 + 1] -> [3, 4, 5]
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const siblingsCount = 1;

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, i) => i + from + 1).filter((page) => page > 0);
  }

  const previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];
</script>

<div>
  <div class="flex">
    {#if currentPage > 1 + siblingsCount}
      <PaginationItem number={1} />
      {#if currentPage > 2 + siblingsCount}
        <p>...</p>
      {/if}
    {/if}

    {#if previousPages.length > 0}
      {#each previousPages as page}
        <PaginationItem number={page} />
      {/each}
    {/if}

    <PaginationItem number={currentPage} isCurrent />

    {#if nextPages.length > 0}
      {#each previousPages as page}
        <PaginationItem number={page} />
      {/each}
    {/if}

    {#if currentPage + siblingsCount < lastPage}
      {#if currentPage + 1 + siblingsCount < lastPage}
        <p>...</p>
      {/if}
    {:else}
      <PaginationItem number={lastPage} />
    {/if}
  </div>
</div>
