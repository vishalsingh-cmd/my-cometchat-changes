<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import IndustryPoints from './_comps/IndustryPoints.svelte';
  import IndustryRoller from './_comps/IndustryRoller.svelte';
</script>

<Section>
  <Container>
    <div class="flex max-w-3xl flex-col">
      <HeadingLatest as="h2" varient="h6" class="text-[#6852D6]">Industry</HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2'], ['lg:mt-3'])}>
        Purpose-built chat for every industry
      </HeadingLatest>
      <ParahLates class={cn(['mt-3'], ['lg:mt-4'])}>
        Proven solutions that drive business growth across verticals. Battle-tested features
        engineered for your specific needs.
      </ParahLates>
    </div>

    <div class={cn(['mt-10 grid grid-cols-1 gap-10'], ['lg:mt-14 lg:grid-cols-2 lg:gap-20'])}>
      <IndustryRoller />
      <IndustryPoints />
    </div>
  </Container>
</Section>
