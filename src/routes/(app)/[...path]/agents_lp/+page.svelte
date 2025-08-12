<script>
  import AgentsHero from '$lib/components/agents_hero.svelte';
  import TrustedBy from '$src/lib/components/trusted_by.svelte';
  import ShowCase from '$src/lib/components/agent_platform_showcase.svelte';
  import ScrollInfo from '$src/lib/components/scroll_info.svelte';
  import PathSelector from '$src/lib/components/path_selector.svelte';
  import TitleBlock from '$src/lib/components/title_block.svelte';
  // import AgentRole from '$src/lib/components/agent_role.svelte';
  import AgentRoleTest from '$src/lib/components/agent_role_test.svelte';
  import TitleBlock2 from '$src/lib/components/title_blok_2.svelte';
  import Cards from '$src/lib/components/card.svelte';
  import Prefooter from '$src/lib/components/prefooter.svelte';
  import TitleBlock3 from '$src/lib/components/title_block3.svelte';
  import LockVector from '$src/_views/HomeV2/_sections/Secure/_comp/LockVector.svelte';
  import Card2 from '$src/lib/components/card2.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import TitleBlocknew from '$src/lib/components/title_blocknew.svelte';
  // import Title from '$src/components/title.svelte';
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<Section>
  <Container>
    <AgentsHero />
    <TrustedBy />
    <ShowCase />
    <ScrollInfo />
    <img src="/agent_lp_images/AI_Chip.png" alt="" class="mx-auto mt-[100px]" />
    <TitleBlocknew />
    <PathSelector />
    <TitleBlock />
    <!-- <AgentRole /> -->
    <AgentRoleTest />
    <TitleBlock2 />
    <Cards />
    <LockVector />
    <TitleBlock3 />
    <Card2 />
    <Prefooter />
  </Container>
</Section>
