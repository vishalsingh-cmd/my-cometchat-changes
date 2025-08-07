<script>
  const logos = [
    '/agent_lp_images/trusted-by-logos/logo1.png',
    '/agent_lp_images/trusted-by-logos/logo3.png',
    '/agent_lp_images/trusted-by-logos/logo4.png',
    '/agent_lp_images/trusted-by-logos/logo5.png'
  ];
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
</script>

<div class="mt-6 h-[136px] w-full">
  <div class="relative z-10 flex h-full items-center justify-center">
    <!-- Title -->
    <div
      class="relative flex h-full w-max items-center justify-center border border-gray-5 px-6 text-lg text-white"
    >
      Trusted by fast-growing companies around the world.
      <SecureDecCircle position="topLeft" className="z-30" />
      <SecureDecCircle position="topRight" className="z-30" />
      <SecureDecCircle position="bottomLeft" className="z-30" />
      <SecureDecCircle position="bottomRight" className="z-30" />
    </div>

    <!-- Scrolling logo container -->
    <div class="group relative h-full w-full border border-gray-5">
      <!-- Marquee row -->
      <div class="h-full w-full overflow-hidden">
        <div class="animate-marquee flex h-full items-center gap-16 whitespace-nowrap">
          {#each [...logos, ...logos] as logo}
            <img src={logo} alt="Logo" class="h-10 object-contain grayscale" />
          {/each}
        </div>
      </div>

      <!-- Hover text (appears in center on hover) -->
      <div
        class="absolute inset-0 flex items-center justify-center text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:backdrop-blur-md"
      >
        <button
          class="rounded-xl border border-gray-8 p-2 transition-colors duration-300 hover:border-brand-9"
          >Checkout our amazing stories</button
        >
      </div>

      <SecureDecCircle position="topLeft" className="z-30" />
      <SecureDecCircle position="topRight" className="z-30" />
      <SecureDecCircle position="bottomLeft" className="z-30" />
      <SecureDecCircle position="bottomRight" className="z-30" />
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
