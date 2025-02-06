<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import { cn } from '$src/_utils/tailwind.utils';

  import TmolsCard from './_comp/TmolsCard.svelte';
  import { tmolDatas } from './_data/tmols.data';
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  import { type EmblaCarouselType } from 'embla-carousel';

  export const addDotBtnsAndClickHandlers = (
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
      dotNodes[previous].classList.remove('embla__dot--selected');
      dotNodes[selected].classList.add('embla__dot--selected');
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
    <div class="embla mt-10" use:emblaCarouselSvelte>
      <div class="embla__container flex gap-5">
        {#each tmolDatas as data}
          <div
            class={cn(
              ['embla__slide min-w-0 max-w-[340px] '],
              ['flex-shrink-0 flex-grow-0 basis-full']
            )}
          >
            <TmolsCard content={data} />
          </div>
        {/each}
        <div class="embla__controls mt-4 flex justify-center gap-2">
          <div class="embla__dots">
            <div class="embla__dot" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</Section>

<style>
  .embla__dots {
    @apply flex;
    margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
  }

  .embla__dot {
    @apply inline-flex cursor-pointer appearance-none outline-none;
    @apply h-1.5 w-1.5 touch-manipulation rounded-xl bg-[#FAFAFF]/40;
    @apply m-0 items-center justify-center p-0;
  }
</style>
