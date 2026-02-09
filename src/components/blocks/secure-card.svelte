<script lang="ts">
  import { getResolvedAsset } from '$lib/image-helper';
  import type { AssetStoryblok } from '$types/bloks';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';

  export let blok;
  export let desktop = false;

  // Resolve image for external URL support
  $: resolvedImage = getResolvedAsset(blok, 'image') as AssetStoryblok | undefined;

  const decorations = blok.decorations || [];
</script>

<div class={`relative border border-gray-5 ${blok.layout || ''}`}>
  <div class="p-6">
    {#if blok.title}
      <h3 class="font-sans text-[18px] font-semibold text-gray-12 lg:text-[22px]">
        {blok.title}
      </h3>
    {/if}

    {#if blok.subtitle}
      <p class="text-lg font-medium text-gray-12 opacity-74">{blok.subtitle}</p>
    {/if}

    {#if resolvedImage?.filename}
      <img src={resolvedImage.filename} alt={resolvedImage.alt || ''} class="mt-4" />
    {/if}
  </div>

  <!-- Decorations dynamically -->
  {#if decorations.includes('topLeft')}
    <SecureDecCircle position="topLeft" className="z-40" />
  {/if}
  {#if decorations.includes('topRight')}
    <SecureDecCircle position="topRight" className="z-40" />
  {/if}
  {#if decorations.includes('bottomLeft')}
    <SecureDecCircle position="bottomLeft" className="z-40" />
  {/if}
  {#if decorations.includes('bottomRight')}
    <SecureDecCircle position="bottomRight" className="z-40" />
  {/if}
</div>
