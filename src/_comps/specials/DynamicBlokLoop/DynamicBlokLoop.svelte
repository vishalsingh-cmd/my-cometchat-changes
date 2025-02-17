<script lang="ts">
  import DynamicBlock from '$src/components/blocks/dynamic-block.svelte';
  import type { PageStoryblok } from '$src/types/bloks';

  export let block: PageStoryblok;
</script>

{#if block.content.body}
  {#each block.content.body as b}
    <DynamicBlock block={b} />
  {/each}
{/if}
