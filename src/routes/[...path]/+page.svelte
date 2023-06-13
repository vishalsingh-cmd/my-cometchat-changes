<script lang="ts">
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  import { startStoryblokBridge } from '$lib/storyblok.js';

  export let data;

  startStoryblokBridge(data.page.id, (newStory) => {
    data.page = newStory;
  });
</script>

{#key data.page.id}
  <DynamicBlock block={data.page.content} />
{/key}
