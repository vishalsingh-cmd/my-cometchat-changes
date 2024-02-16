<script lang="ts">
  import type { ISbRichtext } from '@storyblok/js';
  import Code from '$components/code-block/highlighted-code.svelte';
  export let content: ISbRichtext;

  async function copyCode() {
    if (content?.content[0]?.text) {
      await navigator.clipboard.writeText(content.content[0].text);
    }
  }
</script>

{#if content.content && content?.content[0] && content?.content[0].text}
  <div
    class="relative my-1 max-h-96 overflow-auto rounded-2xl bg-gray-12/95 p-px"
    style="color-scheme: dark;"
  >
    <div class="absolute sticky right-3 top-3 z-10 flex justify-end">
      <button
        id="copy-code-button"
        type="button"
        class="text-gray-900 ring-gray-300 hover:bg-gray-50 sticky right-2 top-0 z-10 flex flex-row gap-3 rounded-full bg-white px-2.5 py-2.5 text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-8"
        on:click={copyCode}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-copy"
          ><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path
            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          /></svg
        >
        <span class="text-sm font-medium">Copy</span>
      </button>
    </div>
    <div class="-mt-10 overflow-hidden rounded-[15.5px]">
      <Code
        language={content?.attrs.class.split('language-')[1]}
        code={content?.content[0]?.text}
      />
    </div>
  </div>
{/if}
