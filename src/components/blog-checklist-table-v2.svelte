<script lang="ts">
  import type { BlogChecklistTableStoryblok } from '$types/bloks';
  import Icon from './icon/icon.svelte';

  export let block: BlogChecklistTableStoryblok;
</script>

{#if block.table}
  <div class="overflow-hidden rounded-3xl border border-gray-1/10">
    <table class="min-w-full border-collapse">
      <thead class=" divide-y divide-gray-1/10">
        <tr class="divide-x divide-y divide-gray-1/10 border-b border-gray-1/10 bg-gray-1/5">
          {#each block?.table.thead as item}
            <th
              scope="col"
              class="text-gray-900 max-w-[160px] px-[16px] py-3.5 text-left text-sm font-semibold"
            >
              {item.value}
            </th>
          {/each}
        </tr>
      </thead>

      <tbody class=" divide-y divide-gray-1/10 bg-[#FAFAFF]/2">
        {#each block?.table.tbody as row}
          <tr class=" divide-x divide-gray-1/10">
            {#each row.body as col}
              <td
                class="text-gray-900 max-w-[160px] px-12 py-[12px] text-left align-top text-sm font-medium sm:px-[16px]"
              >
                {#if col.value === 'Yes'}
                  <div class="flex w-full">
                    <Icon icon="check-verified-01" size="sm" class="h-3 w-3 text-brand-10" />
                  </div>
                {:else if col.value === 'No'}
                  <div class="flex w-full items-center justify-center">
                    <Icon icon="x-circle" size="sm" class="h-5 w-5 text-brand-12" />
                  </div>
                {:else}
                  <div class="text-sm font-normal leading-[130%] tracking-[0.28px] text-gray-1">
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
{/if}
