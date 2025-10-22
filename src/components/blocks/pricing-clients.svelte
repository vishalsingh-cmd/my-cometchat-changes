<script lang="ts">
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import type { PricingClientsStoryblok } from '$types/bloks';
  export let block: PricingClientsStoryblok;
  import Clients from '$src/_views/HomeV2/_sections/Clients/Clients2.svelte';
  import Compliance from '$components/blocks/compliance.svelte';
</script>

{#if block}
  <Section>
    <Container>
      {#if block.clients && block.clients[0]}
        <Clients block={block.clients[0]} />
      {/if}
      {#if block.compliance && block.compliance[0]}
        <Compliance block={block.compliance[0]} />
      {/if}
    </Container>
  </Section>
{/if}
