<script lang="ts">
  import { page } from '$app/stores';
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  import Breadcumbs from '$components/breadcumbs.svelte';
  export let block;
</script>

<div class={'h-20'} />
<section data-theme="light" class="mx-auto flex flex-col bg-white text-gray-12">
  {#if block.content.body}
    <Breadcumbs slug={$page.url.pathname} current_page_title={block.name} />
    <div class="h-10" />
    {#each block.content.body as b}
      <DynamicBlock block={b} />
    {/each}
  {/if}
</section>
