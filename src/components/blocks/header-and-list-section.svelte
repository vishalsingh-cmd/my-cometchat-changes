<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Title from '$components/title.svelte';
  import ListSection from './list-section.svelte';

  import type { HeaderAndListSectionStoryblok } from '$types/bloks';

  export let block: HeaderAndListSectionStoryblok;

  console.log(block);
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1">
    {#if block.header && block.header[0]}
      {@const header = block.header[0]}
      <Title
        alignment="center"
        label={{ content: header.label, color: 'orange' }}
        title={header.title}
      />
    {/if}
    {#if block.items}
      <ListSection block={block.items[0]} />
    {/if}
  </section>
{/if}
