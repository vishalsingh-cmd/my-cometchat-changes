<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import TmolsCard from './_comp/TmolsCard.svelte';
  import EmblaCarousel from 'embla-carousel';
  import type { EmblaCarouselType } from 'embla-carousel';
  import type { SpecialTestimonialsStoryblok } from '$src/types/bloks';
  import Button from '$src/components/buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

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

  export let block: SpecialTestimonialsStoryblok | undefined = undefined;
</script>

<Section className="tmols">
  <Container className="overflow-hidden relative">
    <div class="flex flex-col items-center">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">
        {block?.tagline}
      </HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mx-auto mt-2 max-w-[710px] text-center'], ['lg:mt-3'])}>
        {block?.title}
      </HeadingLatest>
    </div>

    <div class="mt-10 lg:mt-[88px]" bind:this={emblaNode}>
      <div class="embla__viewport lg:overflow-visible" bind:this={viewportNode}>
        <div
          class={cn(['embla__container flex gap-5'], ['lg:grid lg:grid-cols-3 lg:gap-8'])}
          bind:this={embalaContainer}
        >
          {#if block}
            {#each block.testimonials as data, i}
              <div
                class={cn(
                  ['embla__slide min-w-0 max-w-[340px]'],
                  ['flex-shrink-0 flex-grow-0 basis-full'],
                  ['lg:max-w-none lg:basis-auto']
                )}
              >
                <TmolsCard block={data} />
              </div>
            {/each}
          {/if}
        </div>
      </div>

      <div class="mt-4 flex justify-center lg:hidden">
        <div class="embla__dots" bind:this={dotsNode} />
      </div>
    </div>

    <div
      class={cn(
        [
          'hidden py-10',
          'bg-[linear-gradient(180deg,_rgba(11,9,20,0)_0%,rgba(11,9,20,0.4)_25%,rgba(11,9,20,0.9)_50%,#0B0914_93%)]'
        ],
        ['lg:flex lg:items-center lg:justify-center']
      )}
    >
      {#if block?.viewmore}
        {@const { href, target, rel } = getAnchorFromCmsLink(block.viewmore[0].link)}
        <Button as="a" variant={block.viewmore[0].variant} {href} {target} {rel}>
          {block.viewmore[0].label}
        </Button>
      {/if}
    </div>
  </Container>
</Section>

<style>
  :global(.tmols .embla__dots) {
    @apply flex items-center justify-center gap-2;
  }

  :global(.tmols .embla__dot) {
    @apply h-1.5 w-1.5 cursor-pointer rounded-full bg-[#FAFAFF]/40 transition-colors;
    @apply transition-all duration-700;
  }

  :global(.tmols .embla__dot--selected) {
    @apply w-4 bg-[#FAFAFF];
  }

  @media (min-width: 1024px) {
    :global(.tmols .embla__container) {
      display: grid;
      transform: none !important;
    }
  }
</style>
