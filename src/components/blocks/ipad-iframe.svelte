<script lang="ts">
  import type { IpadIframeStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Frame from '$components/ipad-iframe/assets/ipad-frame.png';

  export let block: IpadIframeStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="container mx-auto my-12">
    <div class="flex items-center justify-center overflow-hidden px-container">
      <div class="relative max-w-[1200px]">
        <!-- eslint-disable-next-line -->
        {@html block.iframe}
        <img src={Frame} class="h-full w-full" alt="IPad Frame" />
      </div>
    </div>
  </section>
{/if}

<style>
  section :global(iframe) {
    position: absolute;
    left: 22px;
    top: 22px;
    z-index: 0;
    height: calc(100% - 44px);
    width: calc(100% - 44px);
    border-radius: 12px;
  }

  @media only screen and (max-width: 600px) {
    section :global(iframe) {
      height: calc(100% - 24px);
      width: calc(100% - 24px);
      left: 12px;
      top: 12px;
    }
  }
</style>
