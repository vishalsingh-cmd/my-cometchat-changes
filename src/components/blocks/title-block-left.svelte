<script lang="ts">
  import type { TitleBlockLeftStoryblok } from '$src/types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';

  export let block: TitleBlockLeftStoryblok;
</script>

{#if block}
  <Section>
    <Container pyEnabled={false}>
      <section
        class="relative flex max-w-[720px] flex-col gap-4 py-[48px] pb-[48px] pr-[64px] leading-tighter lg:pt-[100px]"
      >
        <div class="flex flex-col gap-3">
          {#if block.heading}
            <p class="text-xl font-medium text-brand-9">{block.heading}</p>
          {/if}

          {#if block.subheading}
            <h1 class="font-sans text-3xl font-semibold leading-tight tracking-none text-gray-12">
              {block.subheading}
            </h1>
          {/if}
        </div>

        {#if block.description}
          <p class="font-sans text-xl leading-snug tracking-[0.11px] text-gray-11 opacity-74">
            {block.description}
          </p>
        {/if}
      </section>
    </Container>
  </Section>
{/if}
