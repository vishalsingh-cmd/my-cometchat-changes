<script lang="ts">
  import type { ImageOnlyStoryblok } from '$src/types/bloks';
  import { getImageSrc } from '$lib/image-helper';
  export let block: ImageOnlyStoryblok;
</script>

{#if block && block.image}
  <div class="w-full">
    <img
      src={getImageSrc(block, 'image')}
      alt={block.alt_text ?? 'Image'}
      class="mx-auto w-auto"
      loading="lazy"
    />
  </div>
{/if}
