<script>
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container pxEnabled={false} pyEnabled={false}>
    <div class=" ">
      <div
        class=" mb-[40px] flex max-h-[640px] w-full flex-col items-center justify-between gap-12 px-[20px] pt-[48px] lg:flex-row lg:pl-[120px] lg:pr-[64px]"
      >
        <!-- Left: Text Content -->

        <div class="flex max-w-[528px] shrink-0 flex-col items-start gap-4">
          <h2 class="text-sans text-3xl font-semibold leading-tighter tracking-none text-white">
            Everything your agent needs to go from prototype to product – fixed.
          </h2>
          <p class=" text-xl font-medium text-gray-11">
            Modular when you want control. All-in-one when you just need to launch.
          </p>
        </div>

        <!-- Right: PNG Image -->
        <div class="">
          <img
            src="/agent_lp_images/Collaborative_Whiteboard.png"
            alt="Comparison boxes"
            class="py-auto mx-auto w-full max-w-[600px]"
          />
        </div>
      </div>
    </div>
  </Container>
</Section>
