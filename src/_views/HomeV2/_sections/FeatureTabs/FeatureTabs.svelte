<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';
  import type { home__video_tabsStoryblok } from '$src/types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import FeatureTabTrigger from './FeatureTabTrigger.svelte';
  import FeatureTabsUnderline from './FeatureTabsUnderline.svelte';
  import FeatureTabsNav from './_comps/FeatureTabsNav.svelte';
  import FeatureTabsCnt from './_comps/FeatureTabsCnt.svelte';
  import FeatureTabOverlay from './_comps/FeatureTabOverlay.svelte';
  import FeatureTabsClass from './_helpers/FeatureTabsClass';

  export let block: home__video_tabsStoryblok;
  let tabsElem: HTMLDivElement;
  onMount(() => {
    if (!tabsElem) return;
    const featureTabsClass = new FeatureTabsClass(tabsElem);

    return () => {
      featureTabsClass.destroy();
    };
  });
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

      <div class="flex flex-col overflow-hidden" data-name="feature-tabs-container">
        <div
          class={cn(['flex w-full flex-nowrap items-center'])}
          data-name="feature-tabs-container-scroll"
        >
          {#each block.featureTabs as featureTab}
            <FeatureTabsCnt videoSrc={featureTab.video} mobileImgSrc={featureTab.mobileImg} />
          {/each}
        </div>

        <FeatureTabOverlay />
      </div>
    </div>
  </Container>
</Section>
