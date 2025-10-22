<script lang="ts">
  import type { PricingComparisonStoryblok } from '$types/bloks';
  import handsvg from '$components/pricing/assets/hand.svg';
  import Button from '../buttons/button.svelte';
  export let block: PricingComparisonStoryblok;
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
</script>

<Section className="h-[278px] w-[1088px] mx-auto mt-[65px]">
  <Container
    pyEnabled={false}
    pxEnabled={false}
    className="relative   flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-gray-12/[0.1]  pl-[39px] py-[47px]  font-sans text-white"
  >
    <!-- Left Content -->
    <div class="z-10 flex max-w-[600px] flex-1 flex-col gap-6">
      <div class="flex flex-col items-start gap-4 self-stretch">
        {#if block.title}
          <h2 class="text-2xl font-semibold leading-tighter">
            {block.title}
          </h2>
        {/if}

        {#if block.description}
          <p
            class="leading-relaxed text-xl font-medium leading-snug tracking-[0.11px] text-gray-12 opacity-74"
          >
            {block.description}
          </p>
        {/if}
      </div>

      {#if block.button_text}
        <div>
          <Button href={block.button_url} variant="secondary">
            {block.button_text}
          </Button>
        </div>
      {/if}
    </div>

    <!-- Right Illustration -->
    <div class=" flex flex-1 shrink-0 items-center justify-center">
      <img src={handsvg} alt="icon" class="absolute bottom-0 right-0" />
    </div>
  </Container>
</Section>
