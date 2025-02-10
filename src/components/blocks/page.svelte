<script lang="ts">
  import type { PageStoryblok } from '$types/bloks';
  import DynamicBlock from './dynamic-block.svelte';

  export let block: PageStoryblok;
</script>

{#if block.content.body}
  {#each block.content.body as b}
    <DynamicBlock block={b} />
  {/each}
{/if}
