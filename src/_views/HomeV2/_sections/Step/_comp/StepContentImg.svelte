<script lang="ts">
  import Media from '$src/components/media.svelte';
  import type { AssetStoryblok } from '$src/types/bloks';

  export let image: AssetStoryblok;
  export let className = '';
</script>

<div class={className}>
  <Media media={image} />
</div>
