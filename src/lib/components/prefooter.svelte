<script>
  import Button from '$src/components/buttons/button.svelte';
</script>

<div
  class="relative mx-auto flex h-[647px] w-full flex-col items-center justify-center overflow-hidden text-center"
>
  <!-- CometChat logo -->
  <img
    src="/agent_lp_images/cometchat_logo.png"
    alt="CometChat Logo"
    class="mb-6 w-auto max-w-[180px] -translate-x-6"
  />

  <!-- Ellipse background -->
  <img
    src="/agent_lp_images/big_ellipse.png"
    alt="Ellipse"
    class="pointer-events-none absolute bottom-[50px] left-1/2 w-full -translate-x-1/2 select-none opacity-80"
  />

  <!-- Heading + Text -->
  <div class="z-10 flex max-w-[640px] flex-col items-center px-4">
    <p class="text-3xl font-semibold leading-tight text-white">
      You don’t need to build it<br />all to ship it all
    </p>

    <p class="text-gray-300 mt-4 text-sm">
      Focus on what your agent does. We’ll handle the rest — with chat infra trusted by global teams
      for years.
    </p>

    <!-- Buttons -->
    <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm">
      <Button variant="secondary">Talk to Us</Button>
      <Button>Try the Agent Builder</Button>
    </div>
  </div>
</div>
