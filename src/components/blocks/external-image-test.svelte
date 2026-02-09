<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getResolvedAsset } from '$lib/image-helper';
  import Media from '$components/media.svelte';
  import type { AssetStoryblok } from '$types/bloks';

  // Block data from Storyblok
  export let block: {
    _uid: string;
    component: string;
    title?: string;
    description?: string;
    image?: AssetStoryblok;
    image_external_url?: string;
    image_use_external_url?: boolean;
  };

  // Resolve the image - will use external URL if toggle is ON and URL provided
  $: resolvedImage = getResolvedAsset(block, 'image') as AssetStoryblok | undefined;

  // Check if using external URL (toggle ON + URL exists)
  $: isUsingExternalUrl = !!(
    block.image_use_external_url &&
    block.image_external_url &&
    block.image_external_url.trim() !== ''
  );
</script>

<section use:storyblokEditable={block} class="external-image-test">
  <div class="container">
    <div class="content">
      {#if block.title}
        <h2 class="title">{block.title}</h2>
      {/if}

      {#if block.description}
        <p class="description">{block.description}</p>
      {/if}
    </div>

    <div class="image-section">
      {#if resolvedImage}
        <div class="image-wrapper">
          <Media media={resolvedImage} class="main-image" />
        </div>
        <div class="image-status">
          {#if isUsingExternalUrl}
            <span class="status external">✅ Using External URL</span>
          {:else}
            <span class="status storyblok">📦 Using Storyblok Asset</span>
          {/if}
        </div>
      {:else}
        <div class="no-image">
          <p>No image provided</p>
        </div>
      {/if}
    </div>

    <!-- Debug Panel -->
    <details class="debug-panel">
      <summary>🔍 Debug Info</summary>
      <div class="debug-content">
        <p><strong>Toggle ON:</strong> {block.image_use_external_url || false}</p>
        <p><strong>External URL:</strong> {block.image_external_url || '(empty)'}</p>
        <p><strong>Storyblok Asset:</strong> {block.image?.filename || '(none)'}</p>
        <p><strong>Resolved URL:</strong> {resolvedImage?.filename || '(none)'}</p>
        <p><strong>Using External:</strong> {isUsingExternalUrl}</p>
      </div>
    </details>
  </div>
</section>

<style>
  .external-image-test {
    padding: 4rem 1.5rem;
    background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
    min-height: 400px;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .content {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.75rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .description {
    font-size: 1.125rem;
    color: #a0aec0;
    max-width: 600px;
    margin: 0 auto;
  }

  .image-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .image-wrapper {
    max-width: 500px;
    margin: 0 auto;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .image-wrapper :global(.main-image) {
    width: 100%;
    height: auto;
    display: block;
  }

  .image-status {
    margin-top: 1.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .status.external {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }

  .status.storyblok {
    background: rgba(99, 102, 241, 0.2);
    color: #818cf8;
    border: 1px solid rgba(99, 102, 241, 0.3);
  }

  .no-image {
    padding: 4rem 2rem;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: 0.75rem;
    color: #64748b;
  }

  .debug-panel {
    margin-top: 2rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
  }

  .debug-panel summary {
    color: #64748b;
    cursor: pointer;
    font-size: 0.75rem;
    user-select: none;
  }

  .debug-content {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.75rem;
    color: #94a3b8;
    text-align: left;
  }

  .debug-content p {
    margin: 0.25rem 0;
    word-break: break-all;
  }
</style>
