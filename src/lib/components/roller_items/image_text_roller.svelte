<!-- <script lang="ts">
  import EmblaCarousal from '$src/_comps/layouts/EmblaCarousal/EmblaCarousal.svelte';
  import EmblaContainer from '$src/_comps/layouts/EmblaCarousal/EmblaContainer.svelte';
  import EmblaSlide from '$src/_comps/layouts/EmblaCarousal/EmblaSlide.svelte';
  import { type EmblaCarouselType } from 'embla-carousel';
  //   import { createEventDispatcher } from 'svelte';

  // import { onDestroy } from 'svelte';

  export let industryPointBlocks = [];
  export let currentIndex = 0;

  let emblaApi: EmblaCarouselType;
  //   const dispatch = createEventDispatcher();

  const industryContext = getIndustryContect();
  const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
    const emblaApi = event.detail;
    industryContext.onChange((index) => {
      emblaApi.scrollTo(index);
    });
  };

  // Whenever currentIndex changes, scroll Embla
  $: if (emblaApi && currentIndex !== undefined) {
    emblaApi.scrollTo(currentIndex);
  }
</script>

<EmblaCarousal onInit={onEmblaInit} emblaOptions={{ watchDrag: false }}>
  <EmblaContainer>
    {#each industryPointBlocks as block}
      <EmblaSlide class="flex flex-[0_0_100%] flex-col gap-5">
        <img src={block.imageAd} alt={block.imageAlt} class="h-auto w-full object-cover" />
      </EmblaSlide>
    {/each}
  </EmblaContainer>
</EmblaCarousal> -->
