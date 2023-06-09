<script lang="ts">
  import type { PageStoryblok } from '$types/bloks';
  import DynamicBlock from './dynamic-block.svelte';

  export let block: PageStoryblok;
</script>

{#if block.body}
  {#each block.body as b}
    <DynamicBlock block={b} />
  {/each}
{/if}
