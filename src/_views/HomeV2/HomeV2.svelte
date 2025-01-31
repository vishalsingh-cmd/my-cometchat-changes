<script lang="ts">
  import Page from '$src/_comps/layouts/Page.svelte';
  import Banner from './_sections/Banner/Banner.svelte';
  import Secure from './_sections/Secure/Secure.svelte';
  import Step from './_sections/Step/Step.svelte';
  import FeatureTabs from './_sections/FeatureTabs/FeatureTabs.svelte';
  import Clients from './_sections/Clients/Clients.svelte';
  import Technologies from './_sections/Technologies/Technologies.svelte';
  import Platform from './_sections/Platform/Platform.svelte';
</script>

<Page>
  <Banner />
  <FeatureTabs />
  <Clients />
  <Step />
  <Technologies />
  <Platform />
  <Secure />
</Page>
