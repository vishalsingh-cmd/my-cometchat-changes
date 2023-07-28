<script lang="ts">
  import { RichTextResolver, type ISbRichtext } from '@storyblok/js';

  export let content: ISbRichtext;

  const resolver = new RichTextResolver();
</script>

{#if content.content}
  <ol class="pl-4">
    {#each content.content as item}
      <li class="mb-3 text-lg-richtext font-medium leading-snug tracking-wide">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html resolver.render(item)}
      </li>
    {/each}
  </ol>
{/if}
