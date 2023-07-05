<script lang="ts">
  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { BlogPostStoryblok } from '$types/bloks';

  export let block: BlogPostStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 px-container text-gray-12"
  >
    {#if block.body && block.body.content}
      <div class="mx-auto w-full max-w-[640px]">
        {#each block.body.content as b}
          <RichTextRenderer block={b} />
        {/each}
      </div>
    {/if}
  </section>
{/if}
