<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { home__video_tabsStoryblok } from '$src/types/bloks';
  import type { EmblaCarouselType } from 'embla-carousel';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import FeatureTabTrigger from './FeatureTabTrigger.svelte';
  import FeatureTabsUnderline from './FeatureTabsUnderline.svelte';
  import FeatureTabsNav from './_comps/FeatureTabsNav.svelte';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import FeatureTabOverlay from './_comps/FeatureTabOverlay.svelte';
  import FeatureTabsClass from './_helpers/FeatureTabsClass';

  export let block: home__video_tabsStoryblok;
  let emblaApi;
  let tabsElem: HTMLDivElement;

  function onInit(event: CustomEvent<EmblaCarouselType>) {
    emblaApi = event.detail;
    new FeatureTabsClass(tabsElem, emblaApi);
  }
</script>

<Section class="relative isolate">
  <Container pyEnabled={false} pxEnabled={false} expand="full">
    <div data-name="tabs" bind:this={tabsElem}>
      <div class="relative">
        <FeatureTabsNav>
          {#each block.featureTabs as featureTab}
            <FeatureTabTrigger tabHeader={featureTab.triggerName} />
          {/each}
        </FeatureTabsNav>
        <FeatureTabsUnderline />
      </div>

      <div
        data-name="feature-tabs-container"
        class={cn(['overflow-hidden'])}
        use:emblaCarouselSvelte={{ options: {}, plugins: [] }}
        on:emblaInit={onInit}
      >
        <div class={cn(['flex'])}>
          {#each block.featureTabs as featureTab}
            <div class={cn(['min-w-0 flex-[0_0_100%]'])}>
              <div
                class={cn(['flex flex-col', 'h-[90svh] justify-center'])}
                data-name="feature-tabs-cnt"
              >
                <video
                  data-name="feature-tabs-cnt-video"
                  class={cn(['mx-auto h-full w-4/5 object-contain', 'max-sm:hidden'])}
                  src={featureTab.video.filename}
                  muted
                />
                <img
                  class={cn(['mx-auto h-auto w-4/5 object-contain', 'sm:hidden'])}
                  src={featureTab.mobileImg.filename}
                  alt="mobile feature"
                />
              </div>
            </div>
          {/each}
        </div>
        <FeatureTabOverlay />
      </div>
    </div>
  </Container>
</Section>
