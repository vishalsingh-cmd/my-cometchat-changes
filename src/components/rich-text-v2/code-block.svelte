<script lang="ts">
  import { toast } from 'svelte-french-toast';
  import type { ISbRichtext } from '@storyblok/js';
  import Code from '$components/code-block/highlighted-code.svelte';
  // import Icon from '../icon/icon.svelte';
  export let content: ISbRichtext;

  async function copyCode() {
    if (content?.content[0]?.text) {
      await navigator.clipboard.writeText(content.content[0].text).then(() => {
        toast.success('Code copied to clipboard');
      });
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
        class="text-gray-900 ring-gray-300 hover:bg-gray-50 sticky right-2 top-0 z-10 flex flex-row gap-3 rounded-[7px] bg-[#14131D] px-2.5 py-2.5 text-xs font-semibold shadow-sm"
        on:click={copyCode}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g opacity="0.4">
            <path
              d="M13.75 2.5H7.83333C5.96649 2.5 5.03307 2.5 4.32003 2.86331C3.69283 3.18289 3.18289 3.69282 2.86331 4.32003C2.5 5.03307 2.5 5.96649 2.5 7.83333V13.75M14.8333 17.5H8.08333C7.14991 17.5 6.6832 17.5 6.32668 17.3183C6.01308 17.1586 5.75811 16.9036 5.59832 16.59C5.41667 16.2335 5.41667 15.7668 5.41667 14.8333V8.08333C5.41667 7.14991 5.41667 6.6832 5.59832 6.32668C5.75811 6.01308 6.01308 5.75811 6.32668 5.59832C6.6832 5.41667 7.14991 5.41667 8.08333 5.41667H14.8333C15.7668 5.41667 16.2335 5.41667 16.59 5.59832C16.9036 5.75811 17.1586 6.01308 17.3183 6.32668C17.5 6.6832 17.5 7.14991 17.5 8.08333V14.8333C17.5 15.7668 17.5 16.2335 17.3183 16.59C17.1586 16.9036 16.9036 17.1586 16.59 17.3183C16.2335 17.5 15.7668 17.5 14.8333 17.5Z"
              stroke="#FAFAFF"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
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
