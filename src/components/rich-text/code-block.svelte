<script lang="ts">
  import type { ISbRichtext } from '@storyblok/js';
  import Code from '$components/code-block/highlighted-code.svelte';
  export let content: ISbRichtext;
</script>

{#if content.content && content?.content[0] && content?.content[0].text}
  <div class="overflow-hidden rounded-2xl border border-gray-1" style="color-scheme: dark;">
    <Code language={content?.attrs.class.split('language-')[1]} code={content?.content[0]?.text} />
  </div>
{/if}
