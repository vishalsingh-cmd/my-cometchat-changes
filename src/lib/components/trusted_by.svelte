<script>
  const logos = [
    '/agent_lp_images/trusted-by-logos/logo1.png',
    '/agent_lp_images/trusted-by-logos/logo2.png',
    '/agent_lp_images/trusted-by-logos/logo3.png',
    '/agent_lp_images/trusted-by-logos/logo4.png',
    '/agent_lp_images/trusted-by-logos/logo5.png',
    '/agent_lp_images/trusted-by-logos/logo6.png',
    '/agent_lp_images/trusted-by-logos/logo7.png',
    '/agent_lp_images/trusted-by-logos/logo8.png',
    '/agent_lp_images/trusted-by-logos/logo9.png',
    '/agent_lp_images/trusted-by-logos/logo10.png'
  ];
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  // import SectionInfo from '$src/_views/Templates/_blocks/SectionInfo.svelte';
</script>

<Section>
  <Container>
    <div class="h-[136px]">
      <div class="relative z-40 flex h-full items-center justify-center">
        <div
          class="absolute top-0 z-30 h-[2px] w-0 lg:w-[1312px]"
          style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
        />
        <div
          class="absolute bottom-0 z-30 h-[2px] lg:w-[1312px]"
          style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
        />

        <div class="relative top-0 h-full w-[100px]">
          <SecureDecCircle position="topRight" className="z-50" />

          <SecureDecCircle position="bottomRight" className="z-50" />
        </div>

        <!-- Title -->
        <div
          class="relative hidden h-0 w-0 items-center justify-center border border-b-0 border-r-0 border-t-0 border-gray-5 px-6 text-[16px] font-semibold leading-tight tracking-[0.08px] text-gray-12 opacity-54 lg:flex lg:h-full lg:w-max"
        >
          Global trust, proven at scale
          <SecureDecCircle position="topLeft" className="z-100" />

          <SecureDecCircle position="bottomLeft" className="z-50" />
        </div>

        <div
          class="group relative flex h-full w-full items-center border border-b-0 border-l border-t-0 border-gray-5 bg-[#0A0914] lg:border-l-0"
        >
          <!-- Marquee row -->
          <div
            class="relative flex h-full w-full items-center justify-center overflow-hidden border-b border-t border-gray-5 lg:border-b-0 lg:border-t-0"
          >
            <!-- Gradient overlays -->
            <div
              class="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A0914]/100 to-transparent"
            />
            <div
              class="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A0914]/100 to-transparent"
            />

            <!-- Track -->
            <div class="marquee-track flex items-center justify-between">
              {#each [...logos, ...logos] as logo}
                <img src={logo} alt="Logo" class="h-10 object-contain px-3 grayscale" />
              {/each}
            </div>
          </div>

          <!-- Hover text (appears in center on hover)
      <div
        class=" absolute inset-0 flex items-center justify-center text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:backdrop-blur-md"
      >
        <Button as="a" variant="secondary" href="/customer-stories"
          >Checkout our amazing customer stories</Button
        >
      </div> -->

          <SecureDecCircle position="topRight" className="z-50" />

          <SecureDecCircle position="bottomRight" className="z-50" />
        </div>

        <div class="from-h-full w-[120px]" />
      </div>
    </div>
  </Container>
</Section>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-250%);
    }
  }

  .marquee-track {
    display: flex;
    gap: 20px;
    animation: marquee 15s linear infinite;
  }
</style>
