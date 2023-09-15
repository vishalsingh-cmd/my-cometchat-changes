<script lang="ts">
  import type { ISbRichtext } from '@storyblok/js';
  import Code from '$components/code-block/highlighted-code.svelte';
  export let content: ISbRichtext;
</script>

{#if content.content && content?.content[0] && content?.content[0].text}
  <div class="my-1 overflow-hidden rounded-2xl bg-gray-12/95 p-px" style="color-scheme: dark;">
    <div class="overflow-hidden rounded-[15.5px]">
      <Code
        language={content?.attrs.class.split('language-')[1]}
        code={content?.content[0]?.text}
      />
    </div>
  </div>
{/if}
