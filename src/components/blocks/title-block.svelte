<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import type { TitleBlockStoryblok } from '$src/types/bloks';

  export let block: TitleBlockStoryblok | undefined = undefined;
</script>

{#if block}
  <Section>
    <Container pyEnabled={false}>
      <section class="flex flex-col items-center pt-[100px] lg:px-[64px]">
        <div class="flex max-w-[720px] flex-col items-center gap-[16px]">
          <!-- Small heading -->
          <div class="flex flex-col items-center gap-[12px]">
            <p class="text-center text-xl font-medium text-brand-9">{block.title}</p>

            <!-- Main heading -->

            <div class="self-stretch text-center font-sans text-3xl font-semibold leading-snug">
              {@html block?.subtitle?.content[0]?.content[0]?.text ?? ''}
            </div>
          </div>

          <!-- Sub text -->
          <p
            class="self-start text-center font-sans text-xl font-medium leading-snug tracking-[0.11px] text-gray-12 opacity-74"
          >
            {block.description}
          </p>
        </div>
      </section>
    </Container>
  </Section>
{/if}
