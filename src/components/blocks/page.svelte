<script lang="ts">
  import type { PageStoryblok } from '$types/bloks';
  import DynamicBlock from './dynamic-block.svelte';
  import HomeV2 from '$src/_views/HomeV2/HomeV2.svelte';

  export let block: PageStoryblok;
</script>

{#if block?.slug === 'home-v2'}
  <HomeV2 />
{/if}

{#if block.content.body}
  {#each block.content.body as b}
    <DynamicBlock block={b} />
  {/each}
{/if}
