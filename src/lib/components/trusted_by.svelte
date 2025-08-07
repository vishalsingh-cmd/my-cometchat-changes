<script>
  const logos = [
    '/agent_lp_images/trusted-by-logos/logo1.png',
    '/agent_lp_images/trusted-by-logos/logo2.png',
    '/agent_lp_images/trusted-by-logos/logo3.png',
    '/agent_lp_images/trusted-by-logos/logo4.png',
    '/agent_lp_images/trusted-by-logos/logo5.png',
    '/agent_lp_images/trusted-by-logos/logo6.png'
  ];
</script>

<div class="relative mt-6 w-full overflow-hidden py-9">
  <!-- Horizontal line -->
  <img
    src="/agent_lp_images/trusted-by-logos/horizontal_line.png"
    alt="Line"
    class="pointer-events-none absolute top-0 z-50 w-full -translate-y-1/2"
  />

  <!-- Vertical lines -->
  <img
    src="/agent_lp_images/trusted-by-logos/vertical_line.png"
    alt="Vertical Left"
    class="pointer-events-none absolute left-[144px] top-0"
  />
  <!-- Vertical lines -->
  <img
    src="/agent_lp_images/trusted-by-logos/vertical_line.png"
    alt="Vertical Right"
    class="pointer-events-none absolute right-[144px] top-0"
  />

  <!-- Horizontal line -->
  <img
    src="/agent_lp_images/trusted-by-logos/horizontal_line.png"
    alt="Line"
    class="pointer-events-none absolute bottom-0 left-0 w-full -translate-y-1/2"
  />

  <div class="relative z-10 flex flex-col items-center">
    <!-- Title -->
    <div class="flex max-w-6xl">
      <p class="mb-6 font-inter text-sm text-white/60">
        Trusted by fast-growing companies around the world.
      </p>

      <!-- Scrolling logo container -->
      <div class="overflow-hidden">
        <div class="animate-marquee flex gap-16 whitespace-nowrap">
          {#each [...logos] as logo}
            <img src={logo} alt="Logo" class="h-10 object-contain grayscale" />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 5s linear infinite;
  }
</style>
