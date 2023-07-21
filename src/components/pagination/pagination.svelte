<script lang="ts">
  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';
  import PaginationItem from './pagination-item.svelte';

  export let totalCountOfRegisters: number;
  export let registersPerPage = 10;
  export let currentPage = 1;
  export let onPageChange: (page: number) => void;

  let className: string | undefined = undefined;
  export { className as class };

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, i) => i + from + 1).filter((page) => page > 0);
  }

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  $: siblingsCount = currentPage === 1 || currentPage === lastPage ? 2 : 1;

  $: previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];

  $: nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];
</script>

<div class={cn('flex h-6 gap-[14px]', className)} data-theme="light">
  <button
    on:click={() => (currentPage -= 1)}
    disabled={currentPage <= 1}
    class="flex h-6 w-6 items-center justify-center disabled:opacity-40"
  >
    <Icon icon="chevron-left" size="xs" class="text-gray-12/74" />
  </button>

  <div class="flex gap-3">
    {#if currentPage > 1 + siblingsCount}
      <PaginationItem {onPageChange} number={1} />
      {#if currentPage > 2 + siblingsCount}
        <p
          class="h-6 w-6 py-1 text-center text-md/tight font-semibold tracking-widest text-gray-12/64"
        >
          ...
        </p>
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
        <p
          class="h-6 w-6 py-1 text-center text-md/tight font-semibold tracking-widest text-gray-12/64"
        >
          ...
        </p>
      {/if}
      <PaginationItem {onPageChange} number={lastPage} />
    {/if}
  </div>

  <button
    on:click={() => (currentPage += 1)}
    disabled={currentPage === lastPage}
    class="flex h-6 w-6 items-center justify-center disabled:opacity-40"
  >
    <Icon icon="chevron-right" size="xs" class="text-gray-12/74" />
  </button>
</div>
