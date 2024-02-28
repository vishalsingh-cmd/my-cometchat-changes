<script lang="ts">
  import type { BlogTextTableStoryblok } from '$types/bloks';

  export let block: BlogTextTableStoryblok;
</script>

{#if block.table}
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table
            class="divide-gray-300 mx-auto min-w-full max-w-screen-xl divide-y divide-gray-6 overflow-hidden rounded-3xl border border-gray-6"
          >
            <thead>
              <tr class="divide-x divide-gray-6 bg-gray-4">
                {#each block?.table.thead as item}
                  <th
                    scope="col"
                    class="text-gray-900 min-w-[200px] max-w-full whitespace-normal px-12 py-3.5 text-left text-sm font-semibold sm:px-6"
                    >{item.value}</th
                  >
                {/each}
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-6 bg-gray-3">
              {#each block?.table.tbody as row}
                <tr class="divide-x divide-gray-6">
                  {#each row.body as col}
                    <td
                      class="text-gray-900 min-w-[200px] max-w-full items-start justify-start whitespace-normal px-12 py-4 text-sm font-medium sm:px-6"
                      >{col.value}</td
                    >
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
{/if}
