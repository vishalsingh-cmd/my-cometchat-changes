<script lang="ts">
  import { industriesData } from '../_datas/Industries.data';
  import EmblaCarousal from '$src/_comps/layouts/EmblaCarousal/EmblaCarousal.svelte';
  import EmblaContainer from '$src/_comps/layouts/EmblaCarousal/EmblaContainer.svelte';
  import EmblaSlide from '$src/_comps/layouts/EmblaCarousal/EmblaSlide.svelte';
  import { type EmblaCarouselType } from 'embla-carousel';
  import { getIndustryContect } from '../_context/IndustryContext';

  const industryContect = getIndustryContect();

  const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
    const emblaApi = event.detail;
    industryContect.onChange((index) => {
      emblaApi.scrollTo(index);
    });
  };
</script>

<EmblaCarousal onInit={onEmblaInit} emblaOptions={{ watchDrag: false }}>
  <EmblaContainer>
    {#each industriesData as industry}
      <EmblaSlide className="flex-[0_0_100%]">
        <img src={industry.imgSrc} alt={industry.title} />
      </EmblaSlide>
    {/each}
  </EmblaContainer>
</EmblaCarousal>
