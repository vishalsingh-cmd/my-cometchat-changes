<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { cn } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import video0 from './_assets/vid0.mp4';
  import video1 from './_assets/vid1.mp4';
  import video2 from './_assets/vid2.mp4';

  const tabHeaders = ['Visualize & Build', 'Live in Minutes', 'Moderate & Scale'];
  let container: HTMLDivElement;
  let videoElem0: HTMLVideoElement;
  let videoElem1: HTMLVideoElement;
  let videoElem2: HTMLVideoElement;
  let activeTabIndex = 0;
  let tabProgress = 0;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    [videoElem0, videoElem1, videoElem2].forEach((video) => {
      video.currentTime = 0;
      video.pause();
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: 'top 10%',
        scrub: 1,

        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.floor(progress * 3);
          if (newIndex !== activeTabIndex) {
            activeTabIndex = newIndex;
          }

          tabProgress = (progress * 3) % 1;

          const activeVideo = [videoElem0, videoElem1, videoElem2][activeTabIndex];
          if (activeVideo) {
            const targetTime = activeVideo.duration * tabProgress;
            if (Math.abs(activeVideo.currentTime - targetTime) > 0.01) {
              activeVideo.currentTime = targetTime;
            }
          }
        }
      }
    });

    timeline
      .fromTo(videoElem0, { opacity: 1 }, { opacity: 0, duration: 1 })
      .fromTo(videoElem1, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1')
      .fromTo(videoElem1, { opacity: 1 }, { opacity: 0, duration: 1 })
      .fromTo(videoElem2, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');

    return () => {
      timeline.scrollTrigger?.kill();
    };
  });
</script>

<Section class="relative isolate">
  <Container pyEnabled={false}>
    <div class="flex flex-col text-center" bind:this={container}>
      <div>
        <div
          class={cn(
            [
              'relative isolate',
              'flex items-center justify-start gap-5',
              'overflow-x-auto overflow-y-clip'
            ],
            ['sm:justify-center'],
            ['lg:gap-8']
          )}
        >
          {#each tabHeaders as tabHeader, index}
            <div
              class={cn(
                [
                  'relative isolate py-6',
                  'whitespace-nowrap font-sans text-md font-semibold text-[#FAFAFF]',
                  'transition-opacity duration-300 hover:opacity-100'
                ],
                ['lg:text-[22px]']
              )}
              data-state={index === activeTabIndex ? 'active' : ''}
              style:opacity={index === activeTabIndex ? '1' : '0.54'}
            >
              {tabHeader}
              <div
                class="absolute bottom-0 left-0 h-[1px] bg-[#6958BE]"
                style:width={index === activeTabIndex ? `${tabProgress * 100}%` : '0%'}
                style:opacity={index === activeTabIndex ? '1' : '0'}
                style:transition="width 0.1s linear"
              />
              <div
                class={cn([
                  'pointer-events-none absolute bottom-0 left-1/2 -z-[1]',
                  'h-[135px] w-[203px] -translate-x-1/2 translate-y-3/4',
                  'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(104,_82,_214,_0.12)_0%,_rgba(104,_82,_214,_0)_100%)]'
                ])}
                style:opacity={index === activeTabIndex ? '1' : '0'}
              />
            </div>
          {/each}

          <div
            class={cn([
              'absolute bottom-0 left-0 right-0 h-[1px]',
              'bg-[linear-gradient(90deg,_rgba(250,_250,_255,_0)_0%,_rgba(250,_250,_255,_0.1)_5%,_rgba(250,_250,_255,_0.1)_95%,_rgba(250,_250,_255,_0)_100%)]'
            ])}
          />
        </div>

        <div class="relative">
          <div class={cn(['flex flex-col'])}>
            <video src={video0} muted bind:this={videoElem0} />
          </div>

          <div class={cn(['absolute left-0 top-0 flex w-full flex-col'])}>
            <video src={video1} muted bind:this={videoElem1} />
          </div>

          <div class={cn(['absolute left-0 top-0 flex w-full flex-col'])}>
            <video src={video2} muted bind:this={videoElem2} />
          </div>
        </div>

        <div
          class={cn([
            'absolute bottom-0 left-0 right-0 h-28',
            'bg-[linear-gradient(180deg,_rgba(10,_9,_20,_0)_0%,_rgba(10,_9,_20,_0.8)_44%,_#0A0914_100%)]'
          ])}
        />
      </div>
    </div>
  </Container>
</Section>
