<script lang="ts">
  import type { GistStoryblok } from '$types/bloks';
  import { onMount } from 'svelte';

  export let block: GistStoryblok;

  let frame: HTMLIFrameElement;

  onMount(() => {
    frame.srcdoc = block.gist_script;

    frame.addEventListener('load', () => {
      if (!frame.contentWindow?.document.body) return;

      frame.style.height = `${frame.contentWindow?.document.body.scrollHeight + 24}px`;

      frame.contentWindow.document.body.style.margin = '0';
    });
  });
</script>

{#if block}
  <div class="mb-5 mt-4">
    <iframe class="container w-full" src="about:blank" bind:this={frame} title="Gist" />
  </div>
{/if}

<style lang="postcss">
</style>
