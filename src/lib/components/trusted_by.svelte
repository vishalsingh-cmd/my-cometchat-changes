<script>
  const logos = [
    '/agent_lp_images/trusted-by-logos/logo1.png',
    '/agent_lp_images/trusted-by-logos/logo3.png',
    '/agent_lp_images/trusted-by-logos/logo4.png',
    '/agent_lp_images/trusted-by-logos/logo5.png'
  ];
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  import Button from '$src/components/buttons/button.svelte';
</script>

<div class="h-[136px]">
  <div class="relative z-10 flex h-full items-center justify-center">
    <div class="h-full w-[100px] border-b border-t border-gray-5" />

    <!-- Title -->
    <div
      class="relative flex h-full w-max items-center justify-center border border-gray-5 px-6 text-lg text-white"
    >
      Global trust, proven at scale
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
        <Button as="a" variant="secondary" href="/customer-stories"
          >Checkout our amazing customer stories</Button
        >
      </div>

      <SecureDecCircle position="topLeft" className="z-30" />
      <SecureDecCircle position="topRight" className="z-30" />
      <SecureDecCircle position="bottomLeft" className="z-30" />
      <SecureDecCircle position="bottomRight" className="z-30" />
    </div>

    <div class="h-full w-[120px] border-b border-t border-gray-5" />
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
