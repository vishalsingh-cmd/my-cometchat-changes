<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';

  import type { AssetStoryblok } from '$types/bloks';

  let className = '';

  export { className as class };
  export let media: AssetStoryblok;
  export let options = {};
</script>

{#if media.filename}
  {@const mediaFile = media.filename.toLowerCase()}
  {#if mediaFile.includes('mp4') || mediaFile.includes('mov')}
    <video class={className} loop muted autoplay playsinline controlsList="nodownload">
      <source src={media.filename} type="video/mp4" />
    </video>
  {:else if mediaFile.includes('webm')}
    <video class={className} loop muted autoplay playsinline controlsList="nodownload">
      <source src={media.filename} type="video/webm" />
    </video>
  {:else if mediaFile.includes('jpg') || mediaFile.includes('jpeg') || mediaFile.includes('png') || mediaFile.includes('webp') || mediaFile.includes('gif')}
    {@const { src, alt, width, height } = getImageAttributes(media, options)}
    <img class={className} {src} {alt} {width} {height} />
  {/if}
{/if}
