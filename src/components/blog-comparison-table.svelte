<script lang="ts">
  import type { BlogComparisonTableStoryblok } from '$types/bloks';

  export let block: BlogComparisonTableStoryblok;

  // get all column slots and map them to the table structure in thead
  const thead =
    block?.column_slot?.map((column) => {
      return {
        value: column.title
      };
    }) || [];

  // get all rows slots and map them to the table structure in tbody
  const tbody =
    block?.rows_slot?.map((row) => {
      let cells =
        row.cells?.map((cell) => {
          if (cell.component === 'blog-table-cell-image') {
            return {
              value: cell.image,
              type: 'image'
            };
          } else {
            return {
              value: cell.text,
              type: 'text'
            };
          }
        }) || [];

      // If the row has fewer cells than the number of columns, add "N/A" cells
      while (cells.length < thead.length) {
        cells.push({
          value: 'N/A',
          type: 'text'
        });
      }

      return {
        body: cells
      };
    }) || [];
</script>

<div class="mt-8 flow-root">
  <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <table
        class="divide-gray-300 min-w-full divide-y divide-gray-6 overflow-hidden rounded-3xl border border-gray-6"
      >
        <thead>
          <tr class="divide-x divide-gray-6 bg-gray-4">
            {#each thead as item}
              <th
                scope="col"
                class="text-gray-900 min-w-[160px] px-12 py-3.5 text-left text-sm font-semibold sm:px-6"
                >{item.value}</th
              >
            {/each}
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-6 bg-gray-3">
          {#each tbody as row}
            <tr class="divide-x divide-gray-6">
              {#each row.body as cell}
                <td
                  class="text-gray-900 min-w-[160px] whitespace-nowrap px-12 py-4 text-sm font-medium sm:px-6"
                >
                  {#if cell.type === 'image'}
                    <img src={cell.value} alt="company logo" class="w-20" />
                  {:else}
                    <span>{cell.value}</span>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
