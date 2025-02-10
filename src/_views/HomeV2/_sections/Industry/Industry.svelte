<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { ComplexRollerStoryblok } from '$types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import IndustriesAnimated from './IndustriesAnimated.svelte';

  export let block: ComplexRollerStoryblok;
</script>

<Section>
  <Container>
    <div class="flex max-w-3xl flex-col">
      <HeadingLatest as="h2" varient="h6" class="text-[#6852D6]">{block.tagline}</HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2'], ['lg:mt-3'])}>
        {block.title}
      </HeadingLatest>
      <ParahLates class={cn(['mt-3'], ['lg:mt-4'])}>
        {block.description}
      </ParahLates>
    </div>
    <IndustriesAnimated industryPointBlocks={block.roller_points} />
  </Container>
</Section>
