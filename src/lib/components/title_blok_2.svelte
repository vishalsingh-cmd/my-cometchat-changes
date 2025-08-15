<script>
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container pyEnabled={false}>
    <section
      class="flex flex-col items-center gap-[8px] px-[64px] pb-[40px] pt-[48px] lg:w-[858px] lg:gap-[18px] lg:pt-[100px]"
    >
      <div class="flex flex-col items-center gap-3 self-stretch">
        <!-- Small heading -->
        <p class="text-lg-richtext font-medium text-brand-9">Chat integration options</p>

        <!-- Main heading -->
        <p class=" mx-auto max-w-4xl text-center text-[32px] font-semibold leading-tight">
          Your launch, your way. Done right.
        </p>
      </div>

      <!-- Sub text -->
      <p
        class="text-center text-xl font-medium leading-snug tracking-[0.11px] text-gray-12 opacity-74"
      >
        Start with what gets you to production fastest – or matches your needs the best. Swap it out
        or level it up later.
      </p>
    </section>
  </Container>
</Section>
