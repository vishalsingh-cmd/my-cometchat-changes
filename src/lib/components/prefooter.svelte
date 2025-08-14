<script>
  import Button from '$src/components/buttons/button.svelte';
</script>

<div
  class="relative mx-auto my-[80px] flex h-[647px] w-full flex-col items-center justify-center overflow-hidden text-center"
>
  <!-- CometChat logo -->
  <img
    src="/agent_lp_images/cometchat_logo.png"
    alt="CometChat Logo"
    class=" absolute top-[40px] -translate-x-10"
  />

  <!-- Ellipse background -->
  <img
    src="/agent_lp_images/big_ellipse.png"
    alt="Ellipse"
    class="pointer-events-none absolute bottom-[50px] left-1/2 w-full -translate-x-1/2 select-none opacity-80"
  />

  <!-- Heading + Text -->
  <div class="absolute top-[320px] z-10 flex max-w-[640px] flex-col items-center gap-[16px] px-4">
    <p class="text-3xl font-semibold leading-tight text-white">
      You don’t need to build it<br />all to ship it all
    </p>

    <p
      class="text-center text-xl font-medium leading-snug tracking-[0.11px] text-gray-11 opacity-74"
    >
      Focus on what your agent does. We’ll handle the rest — with chat infra trusted by global teams
      for years.
    </p>

    <!-- Buttons -->
    <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm">
      <Button variant="secondary" as="a" href="https://www.cometchat.com/ai-agent-offer"
        >Talk to Us</Button
      >
      <Button as="a" href="https://app.cometchat.com/signup">Start Building Today</Button>
    </div>
  </div>
</div>
