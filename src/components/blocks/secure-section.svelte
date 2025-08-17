<script lang="ts">
  import type { SecureSectionStoryblok, SecureCardStoryblok } from '$src/types/bloks';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  export let block: SecureSectionStoryblok;
</script>

<Section>
  <Container>
    {#if block}
      <div
        class="relative grid grid-cols-2 text-white lg:grid-cols-[repeat(14,1fr)] lg:grid-rows-4"
      >
        {#each block?.cards ?? [] as card}
          <div
            class={`relative border border-gray-5 ${card.colSpan} ${card.rowSpan} ${
              card.extraClasses || ''
            }`}
          >
            {#if card.title}
              <h3 class="p-4 font-sans text-[18px] font-semibold text-gray-12">{card.title}</h3>
            {/if}

            {#if card.subtitle}
              <p class="p-4 text-gray-12 opacity-75">{card.subtitle}</p>
            {/if}

            {#if card.image?.filename}
              <img
                src={card.image.filename}
                alt={card.image.alt || ''}
                class="relative bottom-0 right-0"
              />
            {/if}

            {#each card.decorations || [] as pos}
              <SecureDecCircle position={pos} className="z-40" />
            {/each}
          </div>
        {/each}
      </div>
    {/if}
  </Container>
</Section>
