<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { IpadIframeStoryblok } from '$types/bloks';
  import Frame from '$components/ipad-iframe/assets/ipad-frame.png';

  export let block: IpadIframeStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="container mx-auto">
    <div class="overflow-hidden px-container">
      <div class="relative">
        <!-- eslint-disable-next-line -->
        {@html block.iframe}
        <img src={Frame} class="h-full w-full" alt="IPad Frame" />
      </div>
    </div>
  </section>
{/if}

<style>
  :global(iframe) {
    @apply absolute left-[12px] top-[12px] z-0 h-[calc(100%-22px)] w-[calc(100%-22px)] rounded-3xl;
  }
</style>
