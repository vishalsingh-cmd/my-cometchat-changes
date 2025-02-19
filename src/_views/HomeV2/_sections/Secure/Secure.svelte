<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import Awards from './_comp/Awards.svelte';
  import LockVector from './_comp/LockVector.svelte';
  import Network from './_comp/Network.svelte';
  import Reach from './_comp/Reach.svelte';
  import StepBorderBeam from './_comp/SecureBorderBeam.svelte';
  import type { SecureStoryblok } from '$src/types/bloks';

  export let block: SecureStoryblok;
</script>

<Section>
  <Container className="flex flex-col gap-5 lg:gap-14">
    <LockVector />
    <div class="mx-auto mt-8 flex max-w-3xl flex-col sm:mt-0">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">
        {block.tagline}
      </HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2 text-center'], ['lg:mt-3'])}>
        {block.title}
      </HeadingLatest>
      <ParahLates class={cn(['mt-3 text-center'], ['lg:mt-4'])}>
        {block.description}
      </ParahLates>
    </div>

    <div
      class={cn(
        ['relative', 'mx-auto mt-10 grid max-w-[1100px] grid-cols-1'],
        ['lg:grid-cols-[0.4fr_0.2_0.4fr]']
      )}
    >
      <Network block={block.secure_network[0]} />
      <div class={cn(['flex w-full'], ['sm:col-span-2'], ['lg:col-span-1 lg:flex-col'])}>
        <Reach block={block.uptime[0]} />
        <Reach block={block.scalable[0]} />
      </div>
      <Awards
        block={block.award[0]}
        className={cn(['sm:row-start-1 sm:col-start-2'], ['lg:col-start-3'])}
      />

      <StepBorderBeam position="top" />
      <StepBorderBeam position="bottom" />
    </div>
  </Container>
</Section>
