<script lang="ts">
  import type { ImageOnlyStoryblok } from '$src/types/bloks';
  export let block: ImageOnlyStoryblok;
</script>

{#if block && block.image}
  <div class="w-full">
    <img
      src={block.image.filename}
      alt={block.alt_text ?? 'Image'}
      class="mx-auto w-auto"
      loading="lazy"
    />
  </div>
{/if}
