<script lang="ts">
  import ImageWithList from '$components/image-with-list.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { ImageWithListSectionStoryblok } from '$types/bloks';

  let className: undefined | string = undefined;
  export { className as class };

  export let block: ImageWithListSectionStoryblok;
</script>

<div
  use:storyblokEditable={block}
  class={className}
  data-theme={block?.theme ? block.theme : 'light'}
>
  <ImageWithList
    image={block?.image}
    items={block?.items}
    accentColour={block?.accent_colour || 'brand'}
  />
</div>
