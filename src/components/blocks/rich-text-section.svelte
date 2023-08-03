<script lang="ts">
  import type { RichTextSectionStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  export let block: RichTextSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1 py-20 text-gray-12">
    <div class="container mx-auto px-container">
      {#if block.body.content}
        <div class="mx-auto w-full max-w-[640px]">
          {#each block.body.content as b}
            <RichTextRenderer block={b} />
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}
