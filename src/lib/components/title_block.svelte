<script>
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container pyEnabled={false}>
    <section
      class="relative flex max-w-[720px] flex-col gap-4 py-[48px] pb-[48px] pr-[64px] leading-tighter lg:pt-[100px]"
    >
      <div class="flex flex-col gap-3 pb-[16px]">
        <p class="text-xl font-medium text-brand-9">What teams are building with CometChat</p>

        <h1 class="font-sans text-3xl font-semibold leading-tight tracking-none text-gray-12">
          From FAQs to frontline copilots and everything in between
        </h1>
      </div>

      <p class=" font-sans text-xl leading-snug tracking-[0.11px] text-gray-11 opacity-74">
        You're not just building ‘AI chat’. You're building trust, workflows, and real product
        value.
      </p>
    </section>
  </Container>
</Section>
