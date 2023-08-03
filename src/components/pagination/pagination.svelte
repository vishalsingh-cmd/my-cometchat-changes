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

  $: pages = generatePagesArray(0, lastPage);
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
    {#each pages as page, i}
      {#if page === 1 || page === lastPage || (page < currentPage + 2 && page > currentPage - 2)}
        <PaginationItem {onPageChange} number={page} isCurrent={pages[i] === currentPage} />
      {:else if page === currentPage + 2 || page === currentPage - 2}
        ...
      {/if}
    {/each}
  </div>

  <button
    on:click={() => (currentPage += 1)}
    disabled={currentPage === lastPage}
    class="flex h-6 w-6 items-center justify-center disabled:opacity-40"
  >
    <Icon icon="chevron-right" size="xs" class="text-gray-12/74" />
  </button>
</div>
