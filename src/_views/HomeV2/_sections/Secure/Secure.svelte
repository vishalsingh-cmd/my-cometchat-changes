<script>
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
  import ScaleIcon from './_icons/ScaleIcon.svelte';
  import UpTimeIcon from './_icons/UpTimeIcon.svelte';
</script>

<Section>
  <Container>
    <LockVector />
    <div class="mx-auto flex max-w-3xl flex-col">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">Secure</HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2 text-center'], ['lg:mt-3'])}>
        Security and scale you can trust
      </HeadingLatest>
      <ParahLates class={cn(['mt-3 text-center'], ['lg:mt-4'])}>
        Global edge network, iron-clad security, and 99.99% uptime. Battle-tested infrastructure
        that scales to billions of users.
      </ParahLates>
    </div>

    <div
      class={cn(
        ['relative', 'mx-auto mt-10 grid max-w-[1100px] grid-cols-1'],
        ['lg:grid-cols-[0.4fr_0.2_0.4fr]']
      )}
    >
      <Network />
      <div class={cn(['flex w-full'], ['sm:col-span-2'], ['lg:col-span-1 lg:flex-col'])}>
        <Reach title="Uptime SLA" des="99.999%" icon={UpTimeIcon} />
        <Reach title="Scalable" des="5B+ users" icon={ScaleIcon} />
      </div>
      <Awards className={cn(['sm:row-start-1 sm:col-start-2'], ['lg:col-start-3'])} />

      <StepBorderBeam position="top" />
      <StepBorderBeam position="bottom" />
    </div>
  </Container>
</Section>
