<script lang="ts">
  import { getResolvedAsset } from '$lib/image-helper';
  import Media from '$src/components/media.svelte';
  import type { AssetStoryblok } from '$types/bloks';

  // Block data from Storyblok
  export let block: {
    _uid: string;
    component: string;
    title?: string;
    description?: string;
    image?: AssetStoryblok;
    image_external_url?: string; // External URL field
  };

  // Resolve the image - will use external URL if provided, otherwise falls back to Storyblok asset
  $: resolvedImage = getResolvedAsset(block, 'image') as AssetStoryblok | undefined;
</script>

<div class="test-external-image-block">
  <div class="container">
    <h2 class="title">{block.title || 'External Image Test'}</h2>

    {#if block.description}
      <p class="description">{block.description}</p>
    {/if}

    <div class="image-container">
      {#if resolvedImage}
        <Media media={resolvedImage} class="test-image" />
        <p class="image-source">
          {#if block.image_external_url}
            ✅ Using External URL
          {:else}
            📦 Using Storyblok Asset
          {/if}
        </p>
      {:else}
        <div class="placeholder">No image provided</div>
      {/if}
    </div>

    <div class="debug-info">
      <details>
        <summary>Debug Info</summary>
        <pre>{JSON.stringify(
            {
              hasExternalUrl: !!block.image_external_url,
              externalUrl: block.image_external_url || '(empty)',
              resolvedFilename: resolvedImage?.filename || '(none)'
            },
            null,
            2
          )}</pre>
      </details>
    </div>
  </div>
</div>

<style>
  .test-external-image-block {
    padding: 3rem 1rem;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border-radius: 1rem;
    margin: 2rem 0;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #a0a0a0;
    margin-bottom: 1.5rem;
  }

  .image-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .image-container :global(.test-image) {
    max-width: 300px;
    max-height: 300px;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .image-source {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #10b981;
    font-weight: 500;
  }

  .placeholder {
    padding: 3rem;
    color: #666;
    border: 2px dashed #333;
    border-radius: 0.5rem;
  }

  .debug-info {
    text-align: left;
    margin-top: 1rem;
  }

  .debug-info summary {
    color: #666;
    cursor: pointer;
    font-size: 0.75rem;
  }

  .debug-info pre {
    background: #0a0a0a;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.7rem;
    color: #888;
    overflow-x: auto;
  }
</style>
