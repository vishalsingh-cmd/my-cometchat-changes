<script lang="ts">
  import type { MediaWithListSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import MediaWithList from '$components/media-with-list.svelte';

  export let block: MediaWithListSectionStoryblok;
</script>

<div
  use:storyblokEditable={block}
  class="container mx-auto px-container pb-8 md:pb-12 md:pt-12"
  data-theme={block?.theme ? block.theme : 'light'}
>
  <MediaWithList
    media={block?.media}
    items={block?.items}
    accentColour={block?.accent_colour || 'brand'}
  />
</div>
