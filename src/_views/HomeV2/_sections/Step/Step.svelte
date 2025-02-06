<script>
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import StepAnimatedBeam from './_comp/StepAnimatedBeam.svelte';
  import StepBorderBeam from './_comp/StepBorderBeam.svelte';
  import StepCircle from './_comp/StepCircle.svelte';
  import StepContentImg from './_comp/StepContentImg.svelte';
  import StepContentWrap from './_comp/StepContentWrap.svelte';
  import { stepDatas } from './_data/step.data';
</script>

<Section>
  <Container>
    <div class="flex flex-col">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#FF7F3E]">
        Implementation
      </HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2 text-center'], ['lg:mt-3'])}>
        Integrate today, live tomorrow
      </HeadingLatest>
      <ParahLates class={cn(['mt-3 text-center'], ['lg:mt-4'])}>
        Why spend months with SDKs when you can ship in minutes?
      </ParahLates>
    </div>

    <div class={cn(['mx-auto mt-10 flex max-w-[1086px] flex-col'], ['lg:mt-[88px]'])}>
      {#each stepDatas as stepData, i}
        <div
          class={cn(
            [
              'group/step',
              'relative isolate grid grid-cols-1',
              'border-x border-[#FAFAFF] border-opacity-10'
            ],
            ['lg:grid-cols-2']
          )}
        >
          <StepAnimatedBeam />
          <StepBorderBeam />
          <StepCircle position="topLeft" />
          <StepCircle position="topMiddle" className="hidden lg:block" />
          <StepCircle position="topRight" />

          <StepContentImg
            img={stepData.img}
            class={cn([i != 1 && 'lg:order-1'], ['lg:flex-[50]'])}
          />
          <StepContentWrap content={stepData.content} class={cn(['lg:flex-[50] '])} />
          {#if i === stepDatas.length - 1}
            <StepBorderBeam position="bottom" />
            <StepCircle position="bottomLeft" />
            <StepCircle position="bottomMiddle" className="hidden lg:block" />
            <StepCircle position="bottomRight" />
          {/if}
        </div>
      {/each}
    </div>
  </Container>
</Section>
