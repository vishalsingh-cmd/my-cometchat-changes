<script lang="ts">
  import { cn } from '$lib/utils';
  import { type EmblaCarouselType } from 'embla-carousel';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import type { ImageCarousalStoryblok } from '$types/bloks';
  import Media from '$components/media.svelte';
  export let block: ImageCarousalStoryblok;

  let emblaApi: EmblaCarouselType;
  let emblaThumbApi: EmblaCarouselType;
  let prevIndex = 0;
  let slidesThumbs: HTMLElement[] = [];
  const options = { loop: false, watchDrag: false };

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
  };

  const onThumbInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaThumbApi = event.detail;
    slidesThumbs = emblaThumbApi.slideNodes();

    slidesThumbs.forEach((slideNode, index) => {
      slideNode.addEventListener(
        'click',
        () => {
          emblaApi.scrollTo(index);
          slidesThumbs[prevIndex].setAttribute('data-state', 'inactive');
          slidesThumbs[index].setAttribute('data-state', 'active');
          prevIndex = index;
        },
        false
      );
    });
  };

  const onPrevClick = () => {
    if (prevIndex - 1 < 0) return;
    emblaApi.scrollPrev();
    emblaThumbApi.scrollPrev();

    slidesThumbs[prevIndex].setAttribute('data-state', 'inactive');
    slidesThumbs[prevIndex - 1].setAttribute('data-state', 'active');
    prevIndex = prevIndex - 1;
  };
  const onNextClick = () => {
    if (prevIndex + 1 >= slidesThumbs.length) return;
    emblaApi.scrollNext();
    emblaThumbApi.scrollNext();

    slidesThumbs[prevIndex].setAttribute('data-state', 'inactive');
    slidesThumbs[prevIndex + 1].setAttribute('data-state', 'active');
    prevIndex = prevIndex + 1;
  };
</script>

<div class={cn(['embla'])}>
  <div
    class="embla__viewport overflow-hidden"
    use:emblaCarouselSvelte={{ options, plugins: [] }}
    on:emblaInit={onInit}
  >
    <div class={cn(['embla__container'], ['flex'])}>
      {#each block.images as image}
        <div class={cn(['embla__slide'], ['min-w-0 flex-[0_0_100%]'])}>
          <Media imageTransformOptions={{ size: [1200, 0] }} media={image} enableZoom />
        </div>
      {/each}
    </div>
  </div>

  <div class={cn(['embla-thumbs'], ['relative mt-6'])}>
    <div
      class="embla-thumbs__viewport overflow-hidden"
      use:emblaCarouselSvelte={{ options: {}, plugins: [] }}
      on:emblaInit={onThumbInit}
    >
      <div class={cn(['embla-thumbs__container'], ['flex items-start'])}>
        {#each block.images as image, i}
          <button
            class={cn(
              ['embla-thumbs__slide'],
              ['mr-4 min-w-0 flex-[0_0_30%]'],
              ['max-h-44 rounded-lg border border-[#E8E8E8]'],
              ['data-[state=active]:border-[#6852D6]']
            )}
            data-index={i}
            data-state={i === 0 ? 'active' : 'inactive'}
          >
            <img
              class="h-full w-full rounded-lg object-cover"
              src={image.filename}
              alt={image.alt}
            />
          </button>
        {/each}
      </div>
    </div>

    <button
      class={cn(
        ['embla__prev'],
        [
          'absolute bottom-0 left-0 -translate-x-4',
          'flex items-center justify-start',
          'h-full w-[80px]',
          'bg-gradient-to-tr from-white  to-50%',
          'transition-[transform,opacity] duration-300 hover:scale-105 active:scale-100'
        ],
        [prevIndex === 0 && 'pointer-events-none opacity-40']
      )}
      on:click={onPrevClick}
    >
      <div
        class={cn(
          ['h-10 w-10 rounded-full border-[#c2bfbf] bg-white shadow-md'],
          ['flex rotate-180 items-center justify-center']
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
        >
      </div>
    </button>

    <button
      class={cn(
        ['embla__next'],
        [
          'absolute bottom-0 right-0 translate-x-4',
          'flex items-center justify-end',
          'h-full w-[80px]',
          'bg-gradient-to-tr from-transparent to-white',
          'transition-[transform,opacity] duration-300 hover:scale-105 active:scale-100'
        ],
        [prevIndex === slidesThumbs.length - 1 && 'pointer-events-none opacity-40']
      )}
      on:click={onNextClick}
    >
      <div
        class={cn(
          ['h-10 w-10 rounded-full border-[#c2bfbf] bg-white shadow-md'],
          ['flex items-center justify-center']
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
        >
      </div>
    </button>
  </div>
</div>
