<script lang="ts">
  import type { SyncedBlockStoryblok } from '$types/bloks';
  import DynamicBlock from './dynamic-block.svelte';

  export let block: SyncedBlockStoryblok;
</script>

{#if block.synced_block && typeof block.synced_block !== 'string'}
  {#if block.synced_block.content.body}
    {#each block.synced_block.content.body as b}
      <DynamicBlock block={b} />
    {/each}
  {/if}
{/if}
