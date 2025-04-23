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
  import DynamicCallout from './_comps/DynamicCallout.svelte';

  export let block: home__video_tabsStoryblok;
  let emblaApi: EmblaCarouselType | null = null;
  let tabsElem: HTMLDivElement;
  let selectedIndex = 0;

  function updateSelectedIndex() {
    if (emblaApi) {
      selectedIndex = emblaApi.selectedScrollSnap();
    }
  }
  interface EmblaInitEvent extends Event {
    detail: EmblaCarouselType;
  }
  function onInit(event: EmblaInitEvent) {
    if (typeof window !== 'undefined') {
      emblaApi = event.detail;
      new FeatureTabsClass(tabsElem, emblaApi);

      updateSelectedIndex();
      emblaApi.on('select', updateSelectedIndex);
    }
  }
</script>

<Section class="relative isolate">
  <Container pyEnabled={false} pxEnabled={false} expand="full">
    <div class="relative" data-name="tabs" bind:this={tabsElem}>
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
          {#each block.featureTabs as featureTab, index}
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
                  playsinline
                />
                <img
                  class={cn(['mx-auto h-auto w-4/5 object-contain', 'sm:hidden'])}
                  src={featureTab.mobileImg.filename}
                  alt="mobile feature"
                />
                {#if featureTab.callout && featureTab.callout.length > 0}
                  <DynamicCallout
                    text={featureTab.callout[0].CalloutText}
                    icon={featureTab.callout[0].Icon}
                    visible={selectedIndex === index}
                  />
                {/if}
              </div>
            </div>
          {/each}
        </div>
        <FeatureTabOverlay />
      </div>
    </div>
  </Container>
</Section>
