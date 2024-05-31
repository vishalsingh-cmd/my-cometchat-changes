<script lang="ts">
  import type { BlogChecklistTableStoryblok } from '$types/bloks';
  import Icon from './icon/icon.svelte';

  export let block: BlogChecklistTableStoryblok;
</script>

{#if block.table}
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table
          class="divide-gray-300 min-w-full divide-y divide-gray-6 overflow-hidden rounded-3xl border border-gray-6"
        >
          <thead>
            <tr class="divide-x divide-gray-6 bg-gray-4">
              {#each block?.table.thead as item, i}
                <th
                  scope="col"
                  class="text-gray-900 max-w-[160px] px-12 py-3.5 text-left text-sm font-semibold sm:px-6"
                  >{item.value}</th
                >
              {/each}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-6 bg-gray-3">
            {#each block?.table.tbody as row, i}
              <tr class="divide-x divide-gray-6">
                {#each row.body as col, i}
                  <td class="text-gray-900 max-w-[160px] px-12 py-4 text-sm font-medium sm:px-6">
                    {#if col.value === 'Yes'}
                      <div class="flex w-full items-center justify-center">
                        <div class="h-6 w-6">
                          <Icon icon="check-verified-01" size="sm" class="h-3 w-3 text-brand-10" />
                        </div>
                      </div>
                    {:else if col.value === 'No'}
                      <div class="flex w-full items-center justify-center">
                        <div class="h-6 w-6">
                          <Icon icon="x-circle" size="sm" class="h-5 w-5 text-brand-12" />
                        </div>
                      </div>
                    {:else}
                      <div class="flex w-full items-start justify-start">
                        {col.value}
                      </div>
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
{/if}
