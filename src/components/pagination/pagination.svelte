<script lang="ts">
  import PaginationItem from './pagination-item.svelte';

  export let totalCountOfRegisters: number;
  export let registersPerPage = 10;
  export let currentPage = 1;
  export let onPageChange: (page: number) => void;

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, i) => i + from + 1).filter((page) => page > 0);
  }

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  $: siblingsCount = currentPage === 1 || currentPage == lastPage ? 2 : 1;

  $: previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];

  $: nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];
</script>

<div class="flex gap-2">
  <button on:click={() => (currentPage -= 1)} disabled={currentPage <= 1}>{'<'}</button>

  {#if currentPage > 1 + siblingsCount}
    <PaginationItem {onPageChange} number={1} />
    {#if currentPage > 2 + siblingsCount}
      <p>...</p>
    {/if}
  {/if}

  {#if previousPages.length > 0}
    {#each previousPages as page}
      <PaginationItem {onPageChange} number={page} />
    {/each}
  {/if}

  <PaginationItem {onPageChange} number={currentPage} isCurrent />

  {#if nextPages.length > 0}
    {#each nextPages as page}
      <PaginationItem {onPageChange} number={page} />
    {/each}
  {/if}

  {#if currentPage + siblingsCount < lastPage}
    {#if currentPage + 1 + siblingsCount < lastPage}
      <p>...</p>
    {/if}
    <PaginationItem {onPageChange} number={lastPage} />
  {/if}
  <button on:click={() => (currentPage += 1)} disabled={currentPage >= lastPage}>{'>'}</button>
</div>
