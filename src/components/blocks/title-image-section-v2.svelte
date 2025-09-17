<script lang="ts">
  import type { TitleImageSectionV2Storyblok } from '$src/types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';

  export let block: TitleImageSectionV2Storyblok;
</script>

{#if block}
  <Section>
    <Container pxEnabled={false} pyEnabled={false}>
      <div>
        <div
          class="mb-[40px] flex max-h-[640px] w-full flex-col items-center justify-between gap-12 px-[20px] pt-[48px] lg:flex-row lg:pl-[120px] lg:pr-[64px]"
        >
          <!-- Left: Text Content -->
          <div class="flex max-w-[528px] shrink-0 flex-col items-start gap-4">
            {#if block.heading}
              <h2 class="text-sans text-3xl font-semibold leading-tighter tracking-none text-white">
                {block.heading}
              </h2>
            {/if}
            {#if block.description}
              <p class="text-xl font-medium text-gray-11">
                {block.description}
              </p>
            {/if}
          </div>

          <!-- Right: CMS-driven Image -->
          {#if block.image?.filename}
            <div>
              <img
                src={block.image.filename}
                alt={'Agent feature visual'}
                class="py-auto mx-auto w-full max-w-[600px]"
                loading="lazy"
              />
            </div>
          {/if}
        </div>
      </div>
    </Container>
  </Section>
{/if}
