<script lang="ts">
  import type { PageStoryblok } from '$types/bloks';
  import DynamicBlock from './dynamic-block.svelte';
  import ModalBlock from './popup-modal.svelte';

  export let block: PageStoryblok;
</script>

{#if block.content.body}
  {#each block.content.body as b}
    <DynamicBlock block={b} />
  {/each}
{/if}

{#if block.content.popup}
  {#each block.content.popup as b}
    <ModalBlock block={b} />
  {/each}
{/if}
