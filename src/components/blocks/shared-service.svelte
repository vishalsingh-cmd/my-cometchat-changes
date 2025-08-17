<script lang="ts">
  import type { SharedServiceStoryblok } from '$types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';

  export let block: SharedServiceStoryblok;
</script>

<Section>
  <Container>
    {#if block}
      <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-3">
        {#each block?.cards ?? [] as card}
          <div
            class={`border-gray-800 border border-gray-5 p-6 ${card.colSpan || ''} ${
              card.rowSpan || ''
            } ${card.extraClasses || ''}`}
          >
            {#if card.icon?.filename}
              <img src={card.icon.filename} alt={card.icon.alt || ''} class="mb-4 h-8 w-8" />
            {/if}

            {#if card.heading}
              <h3 class="text-lg font-semibold text-white">{card.heading}</h3>
            {/if}

            {#if card.subheading}
              <p class="text-gray-400 mt-2 text-sm">{card.subheading}</p>
            {/if}

            {#if card.link}
              <a href={card.link} class="text-indigo-400 mt-4 block text-sm hover:underline">
                Learn more
              </a>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </Container>
</Section>
