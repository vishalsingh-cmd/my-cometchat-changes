<script>
  // No interactivity for now
  import Button from '$src/components/buttons/button.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container>
    <section
      class="top-[75px] flex max-w-[1440px] flex-col items-center justify-center gap-8 pt-16 font-sans text-white lg:flex-row lg:py-20"
    >
      <!-- Left Content -->
      <div class="flex max-w-[538px] flex-col items-start justify-center gap-8">
        <div class="flex flex-col items-start gap-6 self-stretch">
          <div class="flex flex-col items-start gap-4 self-stretch">
            <!-- Badge -->
            <div class="flex h-[48px] items-center justify-center">
              <img src="/agent_lp_images/Profile.png" alt="icon" class="" />
              <div
                class="rounded-[50px] border border-purple-11 bg-transparent bg-gradient-purple bg-clip-text px-[16px] py-[8px] text-center text-[18px] font-semibold leading-snug tracking-none text-transparent"
              >
                Full Stack AI Agent Platform
              </div>
            </div>

            <!-- Heading -->
            <h1 class="text-4xl font-medium leading-snug">
              Ship the
              <span class=" bg-gradient-purple bg-clip-text text-transparent">agent.</span>
              <br />

              Skip the
              <span class="bg-gradient-purple bg-clip-text text-transparent">plumbing. </span>
            </h1>
          </div>

          <!-- Description -->
          <div class="text-sans flex flex-col items-start gap-[12px]">
            <div class="text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-74">
              Shipping an agent shouldn’t mean building chat UIs, retries, moderation,
              notifications, and analytics from scratch.
            </div>
            <div class="text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-74">
              CometChat gives you the entire frontend + infra layer.
            </div>
            <div class="text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-74">
              Full stack. Modular. Production-ready.
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <Button as="a" href="https://www.cometchat.com/ai-agent-free-offer" variant="secondary"
            >Schedule a Demo</Button
          >
          <Button as="a" href="https://app.cometchat.com/signup">Start Building Today</Button>
        </div>
      </div>

      <!-- Right Content -->
      <div class="relative">
        <img
          src="/agent_lp_images/Hero.png"
          alt="Agent Platform UI Preview"
          class="aspect-[109/90] w-[350px] flex-shrink-0 rounded-xl shadow-xl lg:h-[475px] lg:w-[575.76px]"
          loading="lazy"
        />
      </div>
    </section>
  </Container>
</Section>
