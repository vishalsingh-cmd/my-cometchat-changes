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
        @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/idle-fingers.css');
          .gist .gist-data {
            background-color:hsla(246, 21%, 9%, 1) !important;
            border-bottom: 1px solid hsla(240, 100%, 99%, 0.08) !important;
          }

          .gist .gist-file {
            border: 1px solid hsla(240, 100%, 99%, 0.08) !important;
            border-radius: 16px;
          }

          .gist .blob-num {
            color: hsla(240, 100%, 99%, 0.64) !important;
          }
          
          .gist .blob-code-inner {
            color: hsla(240, 100%, 99%, 1) !important;
          }

          .gist .blob-code-content {
            padding: 20px 10px !important;
          }

          .gist .highlight {
            background: transparent !important;
            
          }

          .gist-meta {
            color: hsla(240, 100%, 99%, 0.64) !important;as
            border-radius: 0px 0px 16px 16px !important;
            background-color: hsla(246, 21%, 9%, 1) !important;
          }

          .gist-meta a {
            color: #6852D6 !important;
          }

          .gist-meta a:first-child {
            color: #FAFAFF !important;
          }

          body .gist .gist-data .pl-s .pl-s1 {
            color: #a5c261
        }
        </style>
      `;
    });
  });
</script>

{#if block}
  <div use:storyblokEditable={block} class="my-8">
    <iframe class="container w-full" src="about:blank" bind:this={frame} title="Gist" />
  </div>
{/if}
