<script lang="ts">
  import type { IntegrationsStoryblok, AssetStoryblok } from '$types/bloks';
  import { getResolvedAsset } from '$lib/image-helper';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';

  export let block: IntegrationsStoryblok;

  // Resolve images for external URL support
  $: resolvedImage = getResolvedAsset(block, 'image') as AssetStoryblok | undefined;
  $: resolvedMobileImage = getResolvedAsset(block, 'mobileImage') as AssetStoryblok | undefined;
</script>

{#if block}
  <Section>
    <Container>
      <div class="w-full">
        {#if resolvedImage?.filename}
          <img
            src={resolvedImage.filename}
            alt={block.alt_text ?? 'Image'}
            class="mx-auto hidden w-auto lg:block"
            loading="lazy"
          />
        {/if}
        {#if resolvedMobileImage?.filename}
          <img
            src={resolvedMobileImage.filename}
            alt={block.alt_text ?? 'Image'}
            class="mx-auto block w-auto lg:hidden"
            loading="lazy"
          />
        {/if}
      </div>
    </Container>
  </Section>
{/if}
