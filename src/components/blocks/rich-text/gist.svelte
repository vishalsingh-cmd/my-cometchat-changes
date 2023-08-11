<script lang="ts">
  import type { GistStoryblok } from '$types/bloks';
  import { onMount } from 'svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  export let block: GistStoryblok;

  let frame: HTMLIFrameElement;

  onMount(() => {
    frame.srcdoc = block.gist_script;

    frame.addEventListener('load', () => {
      if (!frame.contentWindow?.document.body) return;

      frame.style.height = `${frame.contentWindow?.document.body.scrollHeight + 24}px`;

      frame.contentWindow.document.body.style.margin = '0';

      frame.contentWindow.document.head.innerHTML += `
        <style>
          .gist .gist-data {
            background-color: hsla(246, 21%, 9%, 0.02) !important;
          }

          .gist .gist-file {
            border: 1px solid hsla(246, 21%, 9%, 0.04) !important;
            border-radius: 16px;
          }

          .gist .blob-code-content {
            padding: 20px 0px !important;
          }

          .gist .highlight {
            background: transparent !important;
          }

          .gist-meta {
            border-radius: 0px 0px 16px 16px !important;
            background-color: hsla(246, 21%, 9%, 0.02) !important;
          }

          .gist-meta a {
            color: #6852D6 !important;
          }
        </style>
      `;
    });
  });
</script>

{#if block}
  <div use:storyblokEditable={block} class="mb-5 mt-4">
    <iframe class="container w-full" src="about:blank" bind:this={frame} title="Gist" />
  </div>
{/if}
