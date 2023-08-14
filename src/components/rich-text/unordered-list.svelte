<script lang="ts">
  import type { ISbRichtext } from '@storyblok/js';

  import Paragraph from './paragraph.svelte';

  export let content: ISbRichtext;
</script>

{#if content.content}
  <ul class="pl-4">
    {#each content.content as item}
      <li class="mb-3 text-lg-richtext font-medium leading-snug tracking-wide">
        <Paragraph content={item} />
      </li>
    {/each}
  </ul>
{/if}
