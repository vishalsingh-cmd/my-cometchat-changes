<script lang="ts">
  import type { IntegrationsStoryblok } from '$types/bloks';
  export let block: IntegrationsStoryblok;
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
</script>

{#if block}
  <Section>
    <Container>
      <div class="w-full">
        {#if block.image.filename}
          <img
            src={block.image.filename}
            alt={block.alt_text ?? 'Image'}
            class="mx-auto hidden w-auto lg:block"
            loading="lazy"
          />
        {/if}
        {#if block.mobileImage.filename}
          <img
            src={block.mobileImage.filename}
            alt={block.alt_text ?? 'Image'}
            class="mx-auto block w-auto lg:hidden"
            loading="lazy"
          />
        {/if}
      </div>
    </Container>
  </Section>
{/if}
