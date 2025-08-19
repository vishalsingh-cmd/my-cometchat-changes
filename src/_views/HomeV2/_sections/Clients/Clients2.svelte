<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  //   import Button from '$src/components/buttons/button.svelte';
  //   import { cn } from '$src/lib/utils';
  //   import emblaCarouselSvelte from 'embla-carousel-svelte';
  //   import AutoScroll from 'embla-carousel-auto-scroll';
  //   import { onMount, onDestroy } from 'svelte';
  //   import { browser } from '$app/environment';
  import type { HomeClientsV2Storyblok } from '$src/types/bloks';
  //   import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import SecureDecCircle from '../Secure/_comp/SecureDecCircle.svelte';

  //   let emblaApi: any;
  // let cleanup: (() => void) | null = null;

  // const initializeCarousel = (node: HTMLElement) => {
  //   const options = {
  //     loop: true,
  //     watchDrag: false,
  //     watchFocus: false
  //   };

  //   const plugins = [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false })];

  //   const carousel = emblaCarouselSvelte(node, { options, plugins });
  //   emblaApi = carousel;

  //   return {
  //     destroy() {
  //       if (emblaApi) {
  //         emblaApi.destroy();
  //       }
  //     }
  //   };
  // };

  // const handleResize = () => {
  //   if (!browser) return;

  //   const isMobile = window.innerWidth < 640; // sm breakpoint
  //   const carouselElement = document.querySelector('.embla') as HTMLElement;

  //   if (!carouselElement) return;

  //   if (isMobile && !cleanup) {
  //     cleanup = initializeCarousel(carouselElement).destroy;
  //   } else if (!isMobile && cleanup) {
  //     cleanup();
  //     cleanup = null;
  //   }
  // };

  // onMount(() => {
  //   if (browser) {
  //     handleResize();
  //     window.addEventListener('resize', handleResize);
  //   }
  // });

  // onDestroy(() => {
  //   if (browser) {
  //     window.removeEventListener('resize', handleResize);
  //     if (cleanup) {
  //       cleanup();
  //     }
  //   }
  // });

  export let block: HomeClientsV2Storyblok;
</script>

<Section className="relative isolate group/clients overflow-hidden">
  <Container>
    <div class="h-[136px]">
      <div class="relative z-40 flex h-full items-center justify-center">
        <!-- Top gradient line -->
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
        <!-- Bottom gradient line -->
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

        <!-- Left SecureDecCircles -->
        <div class="relative top-0 h-full w-[100px]">
          <SecureDecCircle position="topRight" className="z-50" />
          <SecureDecCircle position="bottomRight" className="z-50" />
        </div>

        <!-- Title -->
        <div
          class="relative hidden h-0 w-0 items-center justify-center border border-b-0 border-r-0 border-t-0 border-gray-5 px-6 text-[16px] font-semibold leading-tight tracking-[0.08px] text-gray-12 opacity-54 lg:flex lg:h-full lg:w-max"
        >
          {block.tagname}
          <SecureDecCircle position="topLeft" className="z-100" />
          <SecureDecCircle position="bottomLeft" className="z-50" />
        </div>

        <!-- Marquee container -->
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

            <!-- Marquee Track -->
            <div class="marquee-track flex items-center gap-8">
              {#if block}
                {#each [...block.clients, ...block.clients] as data}
                  <img
                    class="h-10 object-contain px-3 grayscale"
                    src={data.client_img.filename}
                    alt={data.client_img.alt}
                  />
                {/each}
              {/if}
            </div>
          </div>

          <!-- Right SecureDecCircles -->
          <SecureDecCircle position="topRight" className="z-50" />
          <SecureDecCircle position="bottomRight" className="z-50" />
        </div>

        <div class="from-h-full w-[120px]" />
      </div>
    </div>
  </Container>
</Section>

<style>
  .marquee-track {
    animation: marquee 20s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>
