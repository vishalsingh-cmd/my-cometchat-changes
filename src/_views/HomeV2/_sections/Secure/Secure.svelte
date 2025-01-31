<script>
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import Network from './_comp/Network.svelte';
  import Reach from './_comp/Reach.svelte';
</script>

<Section>
  <Container>
    <div class="mx-auto flex max-w-3xl flex-col">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">Secure</HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2 text-center'], ['lg:mt-3'])}
        >Security and scale you can trust</HeadingLatest
      >
      <ParahLates class={cn(['mt-3 text-center'], ['lg:mt-4'])}
        >Global edge network, iron-clad security, and 99.99% uptime. Battle-tested infrastructure
        that scales to billions of users.</ParahLates
      >
    </div>

    <div class="mt-10 grid grid-cols-1">
      <Network />
      <div class="flex w-full">
        <Reach title="Uptime SLA" des="99.999% " />
        <Reach title="Scalable" des="5B+ users" />
      </div>
    </div>
  </Container>
</Section>
