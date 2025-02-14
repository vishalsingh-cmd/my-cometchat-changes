<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Button from '$src/components/buttons/button.svelte';
  import { cn } from '$src/lib/utils';
  import { clientsData } from './_datas/clients.data';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import AutoScroll from 'embla-carousel-auto-scroll';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  let emblaApi: any;
  let cleanup: (() => void) | null = null;

  const initializeCarousel = (node: HTMLElement) => {
    const options = {
      loop: true,
      watchDrag: false,
      watchFocus: false
    };

    const plugins = [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false })];

    const carousel = emblaCarouselSvelte(node, { options, plugins });
    emblaApi = carousel;

    return {
      destroy() {
        if (emblaApi) {
          emblaApi.destroy();
        }
      }
    };
  };

  const handleResize = () => {
    if (!browser) return;

    const isMobile = window.innerWidth < 640; // sm breakpoint
    const carouselElement = document.querySelector('.embla') as HTMLElement;

    if (!carouselElement) return;

    if (isMobile && !cleanup) {
      cleanup = initializeCarousel(carouselElement).destroy;
    } else if (!isMobile && cleanup) {
      cleanup();
      cleanup = null;
    }
  };

  onMount(() => {
    if (browser) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('resize', handleResize);
      if (cleanup) {
        cleanup();
      }
    }
  });
</script>

<Section className="relative isolate group/clients overflow-hidden">
  <Container>
    <h2
      class={cn(
        ['text-center font-sans text-[16px] font-semibold text-[#FAFAFF] text-opacity-54'],
        ['lg:text-[18px]']
      )}
    >
      Trusted by
    </h2>
    <div class="embla">
      <div
        class={cn(
          ['embla__container mt-6 flex items-center'],
          ['sm:grid sm:transform-none sm:grid-cols-5 sm:justify-center sm:gap-y-8'],
          ['lg:mt-8']
        )}
        data-scrollbar="hidden"
      >
        {#each clientsData as data}
          <div class={cn('embla__slide mx-4 min-w-0 max-w-full flex-[0_0_auto]', '')}>
            <img class="w-max" src={data.src} alt={data.alt} />
          </div>
        {/each}
      </div>
    </div>
  </Container>
  <div
    class={cn([
      'absolute inset-0 h-full w-full',
      'bg-[#0A0914] bg-opacity-30 backdrop-blur',
      'flex items-center justify-center',
      'transition duration-300',
      'scale-0 px-10 py-10 opacity-0',
      'group-hover/clients:scale-100 group-hover/clients:opacity-100'
    ])}
  >
    <Button variant="secondary" as="a" href="/customer-stories" target="_blank">
      Checkout our amazing customer stories
    </Button>
  </div>
</Section>
