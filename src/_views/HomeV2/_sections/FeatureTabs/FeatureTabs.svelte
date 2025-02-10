<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
  import { cn } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';

  import video0 from './_assets/vid0.mp4';
  import video1 from './_assets/vid1.mp4';
  import video2 from './_assets/vid2.mp4';

  import Sticky from '$src/components/sticky.svelte';
  import FeatureTabTrigger from './FeatureTabTrigger.svelte';
  import FeatureTabsUnderline from './FeatureTabsUnderline.svelte';

  const tabHeaders = ['Visualize & Build', 'Live in Minutes', 'Moderate & Scale'];
  let container: HTMLDivElement;
  let videoElem0: HTMLVideoElement;
  let videoElem1: HTMLVideoElement;
  let videoElem2: HTMLVideoElement;

  let activeTabIndex = 0;
  let tabProgress = 0;
  let scrollTriggerInstance: ScrollTrigger;

  onMount(() => {
    if (!container || !videoElem0 || !videoElem1 || !videoElem2) return;

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    const videoElems = [videoElem0, videoElem1, videoElem2];
    const numPanels = videoElems.length;

    videoElems.forEach((video, index) => {
      video.addEventListener('ended', () => {
        if (index < numPanels - 1) {
          handleTabClick(index + 1);
        } else {
          const currentSection = container.closest('section');
          const nextSection = currentSection?.nextElementSibling as HTMLElement;

          if (nextSection) {
            const offset = nextSection.offsetTop;
            gsap.to(window, {
              scrollTo: {
                y: offset,
                autoKill: false
              },
              duration: 1,
              ease: 'power2.inOut'
            });
          }
        }
      });
    });

    const tween = gsap.to(videoElems, {
      x: () => -1 * (container.scrollWidth - innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: 'top 20%',
        scrub: 1,
        end: () => '+=' + (container.scrollWidth - innerWidth),
        onUpdate: (self) => {
          const progress = self.progress;
          const newPanelIndex = Math.floor(progress * numPanels);
          activeTabIndex = Math.min(newPanelIndex, numPanels - 1);

          const panelProgress = (progress * numPanels) % 1;
          tabProgress = panelProgress;

          videoElems.forEach((video, index) => {
            if (index === activeTabIndex) {
              video.play();
            } else {
              video.pause();
              video.currentTime = 0;
            }
          });
        }
      }
    });

    if (!tween.scrollTrigger) return;
    scrollTriggerInstance = tween.scrollTrigger;

    const handleTabClick = (index: number) => {
      const targetElem = document.querySelector(`#video${index}`) as HTMLDivElement;
      if (!targetElem || !scrollTriggerInstance) return;

      const totalScroll = scrollTriggerInstance.end - scrollTriggerInstance.start;
      const totalMovement = container.scrollWidth - innerWidth;

      const y = Math.round(
        scrollTriggerInstance.start + (targetElem.offsetLeft / totalMovement) * totalScroll
      );

      gsap.to(window, {
        scrollTo: {
          y: y,
          autoKill: false
        },
        duration: 1
      });
    };

    const anchorElems = [
      ...document.querySelectorAll('[data-name="home-banner-tab-anchor"]')
    ] as HTMLAnchorElement[];

    anchorElems.forEach((anchorElem, index) => {
      anchorElem.addEventListener('click', (e) => {
        e.preventDefault();
        handleTabClick(index);
      });
    });

    return () => {
      ScrollTrigger.refresh();
    };
  });
</script>

<Section class="relative isolate">
  <Container pyEnabled={false} pxEnabled={false} expand="full">
    <Sticky translateOnDesktop>
      <div
        data-scrollbar="hide"
        class={cn(
          ['flex items-center justify-start gap-5 px-4', 'overflow-x-auto overflow-y-clip'],
          ['sm:justify-center'],
          ['lg:gap-8']
        )}
      >
        {#each tabHeaders as tabHeader, index}
          <FeatureTabTrigger
            targetId={`video${index}`}
            isActive={index === activeTabIndex}
            {tabHeader}
            {tabProgress}
          />
        {/each}
      </div>
      <FeatureTabsUnderline />
    </Sticky>
    <div class="flex flex-col overflow-hidden" bind:this={container}>
      <div class={cn(['flex h-[80vh] w-[300%] flex-nowrap items-center'])}>
        <div class={cn(['flex w-screen flex-col'])} id="video0">
          <video
            class="mx-auto h-full w-4/5 object-contain"
            src={video0}
            muted
            bind:this={videoElem0}
          />
        </div>

        <div class={cn(['flex w-screen flex-col'])} id="video1">
          <video
            class="mx-auto h-full w-4/5 scale-125 object-contain"
            src={video1}
            muted
            bind:this={videoElem1}
          />
        </div>

        <div class={cn(['flex w-screen flex-col'])} id="video2">
          <video
            class="mx-auto h-full w-4/5 scale-125 object-contain"
            src={video2}
            muted
            bind:this={videoElem2}
          />
        </div>
      </div>

      <div
        data-name="black-mask-overlay"
        class={cn([
          'absolute bottom-0 left-0 right-0 h-28',
          'bg-[linear-gradient(180deg,_rgba(10,_9,_20,_0)_0%,_rgba(10,_9,_20,_0.8)_44%,_#0A0914_100%)]'
        ])}
      />
    </div>
  </Container>
</Section>
