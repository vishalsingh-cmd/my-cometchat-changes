<script>
  import AgentsHero from '$lib/components/agents_hero.svelte';
  import TrustedBy from '$src/lib/components/trusted_by.svelte';
  import ShowCase from '$src/lib/components/agent_platform_showcase.svelte';
  import ScrollInfo from '$src/lib/components/scroll_info.svelte';
  import PathSelector from '$src/lib/components/path_selector.svelte';
  import TitleBlock from '$src/lib/components/title_block.svelte';
  import AgentRole from '$src/lib/components/agent_role.svelte';
  import TitleBlock2 from '$src/lib/components/title_blok_2.svelte';
  import Cards from '$src/lib/components/card.svelte';
  import Prefooter from '$src/lib/components/prefooter.svelte';
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="container mx-auto">
  <AgentsHero />
  <TrustedBy />
  <ShowCase />
  <ScrollInfo />
  <img src="/agent_lp_images/AI_Chip.png" alt="" class="mx-auto" />
  <PathSelector />
  <TitleBlock />
  <AgentRole />
  <TitleBlock2 />
  <Cards />
  <img src="/agent_lp_images/lock.png" alt="" srcset="" class="mx-auto mt-6" />
  <Prefooter />
</div>
