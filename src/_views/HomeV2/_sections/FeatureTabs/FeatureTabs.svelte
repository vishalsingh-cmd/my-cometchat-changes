<script lang="ts">
  // import { gsap } from 'gsap';
  import { cn } from '$src/_utils/tailwind.utils';
  // import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import FeatureTabCnt from './FeatureTabCnt.svelte';
  import video0 from './_assets/vid0.mp4';
  import video1 from './_assets/vid1.mp4';
  import video2 from './_assets/vid2.mp4';

  const tabHeaders = ['Visualize & Build', 'Live in Minutes', 'Moderate & Scale'];

  // gsap.registerPlugin(ScrollTrigger);

  let container;
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container,
  //     pin: true,
  //     start: 'top top',
  //     end: '+=500',
  //     scrub: 1,
  //     markers: true
  //   }
  // });
</script>

<Section className="relative isolate">
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
                  'whitespace-nowrap font-sans text-md font-semibold text-[#FAFAFF] opacity-54',
                  'border-b border-b-[#6958BE] border-opacity-0',
                  'hover:opacity-100',
                  'data-[state="active"]:border-opacity-100 data-[state="active"]:opacity-100',
                  'transition-[border-bottom-color,opacity] duration-300'
                ],
                ['lg:text-[22px]']
              )}
            >
              {tabHeader}
              <div
                class={cn([
                  'group-data-[state="active"]/tabsTrigger:opacity-100',
                  'pointer-events-none absolute bottom-0 left-1/2 -z-[1] opacity-0',
                  'h-[135px] w-[203px] -translate-x-1/2 translate-y-3/4',
                  'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(104,_82,_214,_0.12)_0%,_rgba(104,_82,_214,_0)_100%)]'
                ])}
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

        <div>
          <FeatureTabCnt videoSrc={video0} />
        </div>

        <div>
          <FeatureTabCnt videoSrc={video1} />
        </div>

        <div>
          <FeatureTabCnt videoSrc={video2} />
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
