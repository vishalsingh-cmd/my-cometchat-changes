<script lang="ts">
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  import { startStoryblokBridge } from '$lib/storyblok.js';

  export let data;

  startStoryblokBridge(data.page.id, (newStory) => {
    data.page = newStory;
  });
</script>

{#key data.page.id}
  <!-- TODO: remove this after we have heroes -->
  <div class="container mx-auto mt-16 px-container py-8">
    <h1 class="text-3xl">{data.page.name}</h1>
  </div>
  <DynamicBlock block={data.page.content} />
{/key}
