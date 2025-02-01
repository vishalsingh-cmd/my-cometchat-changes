<script>
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';
  import ChipFlow from './_comps/ChipFlow.svelte';
  import ChipFlowMobile from './_comps/ChipFlowMobile.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col items-center">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">
        Technologies
      </HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2 text-center'], ['lg:mt-3'])}>
        Framework-agnostic. <br /> Developer-approved
      </HeadingLatest>
      <Button class={cn(['mt-5 w-max'], ['lg:mt-8'])} variant="secondary">See documentation</Button>
    </div>
    <div class="mt-8">
      <ChipFlow />
      <ChipFlowMobile />
    </div>
  </Container>
</Section>
