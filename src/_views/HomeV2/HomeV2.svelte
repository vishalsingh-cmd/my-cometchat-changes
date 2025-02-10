<script lang="ts">
  import Page from '$src/_comps/layouts/Page.svelte';
  import Banner from './_sections/Banner/Banner.svelte';
  import FeatureTabs from './_sections/FeatureTabs/FeatureTabs.svelte';
  import Secure from './_sections/Secure/Secure.svelte';
  import Step from './_sections/Step/Step.svelte';
  import Clients from './_sections/Clients/Clients.svelte';
  import Technologies from './_sections/Technologies/Technologies.svelte';
  import Platform from './_sections/Platform/Platform.svelte';
  import Testimonial from './_sections/Testimonial/Testimonial.svelte';
  import type { PageStoryblok } from '$types/bloks';
  import DynamicBlock from '$src/components/blocks/dynamic-block.svelte';

  export let block: PageStoryblok;
</script>

<Page className="bg-[#0A0915]">
  <Banner />
  <FeatureTabs />
  <Clients />
  <Step />
  <Technologies />

  {#if block.body && block.body[0]}
    <DynamicBlock block={block.body[0]} />
  {/if}

  <Platform />
  <Secure />
  <Testimonial />
</Page>
