<script lang="ts">
  import { cn } from '$lib/utils';
  import { page } from '$app/stores';
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  import Breadcumbs from '$components/breadcumbs.svelte';
  import TemplatesSidebar from './templates-sidebar.svelte';
  export let block;
</script>

<div class={'h-20'} />
<div class={cn(['grid-col-1 grid', 'relative w-full bg-white'], ['md:grid-cols-[0.2fr_0.8fr]'])}>
  <TemplatesSidebar />
  <div class="relative flex w-full flex-col">
    <section data-theme="light" class="mx-auto flex flex-col text-gray-12">
      {#if block.content.body}
        <Breadcumbs slug={$page.url.pathname} current_page_title={block.name} />
        <div class="h-10" />
        {#each block.content.body as b}
          <DynamicBlock block={b} />
        {/each}
      {/if}
    </section>
  </div>
</div>
