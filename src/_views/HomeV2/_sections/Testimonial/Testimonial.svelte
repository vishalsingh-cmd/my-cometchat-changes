<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import TmolsCard from './_comp/TmolsCard.svelte';
  import { tmolDatas } from './_data/tmols.data';
  import EmblaCarousel from 'embla-carousel';
  import { onMount } from 'svelte';
  import type { EmblaCarouselType } from 'embla-carousel';

  let emblaNode: HTMLElement;
  let viewportNode: HTMLElement;
  let dotsNode: HTMLElement;
  let emblaApi: EmblaCarouselType;
  let embalaContainer: HTMLElement;
  const addDotBtnsAndClickHandlers = (
    emblaApi: EmblaCarouselType,
    dotsNode: HTMLElement
  ): (() => void) => {
    let dotNodes: HTMLElement[] = [];

    const addDotBtnsWithClickHandlers = (): void => {
      dotsNode.innerHTML = emblaApi
        .scrollSnapList()
        .map(() => '<button class="embla__dot" type="button"></button>')
        .join('');

      const scrollTo = (index: number): void => {
        emblaApi.scrollTo(index);
      };

      dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'));
      dotNodes.forEach((dotNode, index) => {
        dotNode.addEventListener('click', () => scrollTo(index), false);
      });
    };

    const toggleDotBtnsActive = (): void => {
      const previous = emblaApi.previousScrollSnap();
      const selected = emblaApi.selectedScrollSnap();
      dotNodes[previous]?.classList.remove('embla__dot--selected');
      dotNodes[selected]?.classList.add('embla__dot--selected');
    };

    emblaApi
      .on('init', addDotBtnsWithClickHandlers)
      .on('reInit', addDotBtnsWithClickHandlers)
      .on('init', toggleDotBtnsActive)
      .on('reInit', toggleDotBtnsActive)
      .on('select', toggleDotBtnsActive);

    return (): void => {
      dotsNode.innerHTML = '';
    };
  };

  let cleanup: (() => void) | null = null;

  const initializeCarousel = () => {
    if (!viewportNode) return;

    emblaApi = EmblaCarousel(viewportNode, {
      align: 'start',
      containScroll: 'trimSnaps'
    });

    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode);
    emblaApi.on('destroy', removeDotBtnsAndClickHandlers);

    cleanup = () => {
      removeDotBtnsAndClickHandlers();
      emblaApi.destroy();
    };
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      // lg breakpoint
      if (cleanup) {
        cleanup();
        cleanup = null;
      }
    } else if (!cleanup) {
      initializeCarousel();
    }
  };

  onMount(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanup) {
        cleanup();
      }
    };
  });
</script>

<Section>
  <Container className="overflow-hidden">
    <div class="flex flex-col items-center">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">
        Testimonial
      </HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mx-auto mt-2 max-w-[710px] text-center'], ['lg:mt-3'])}>
        Meet the teams building big with CometChat
      </HeadingLatest>
    </div>

    <div class="mt-10 lg:mt-[88px]" bind:this={emblaNode}>
      <div class="embla__viewport lg:overflow-visible" bind:this={viewportNode}>
        <div
          class="embla__container flex gap-5 lg:grid lg:grid-cols-3 lg:gap-8"
          bind:this={embalaContainer}
        >
          {#each tmolDatas as data, i}
            <div
              class={cn(
                ['embla__slide min-w-0 max-w-[340px]'],
                ['flex-shrink-0 flex-grow-0 basis-full'],
                ['lg:max-w-none lg:basis-auto']
              )}
            >
              {#if i == 3}
                <TmolsCard content={data} class="lg:-translate-y-16" />
              {:else if i == 5}
                <TmolsCard content={data} class="lg:-translate-y-24" />
              {:else}
                <TmolsCard content={data} />
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <div class="mt-4 flex justify-center lg:hidden">
        <div class="embla__dots" bind:this={dotsNode} />
      </div>
    </div>
  </Container>
</Section>

<style>
  :global(.embla__dots) {
    @apply flex items-center justify-center gap-2;
  }

  :global(.embla__dot) {
    @apply h-1.5 w-1.5 cursor-pointer rounded-full bg-[#FAFAFF]/40 transition-colors;
    @apply transition-all duration-700;
  }

  :global(.embla__dot--selected) {
    @apply w-4 bg-[#FAFAFF];
  }

  @media (min-width: 1024px) {
    :global(.embla__container) {
      display: grid;
      transform: none !important;
    }
  }
</style>
