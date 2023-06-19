<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import HomepageHero from './homepage-hero.svelte';
  import ListSection from './list-section.svelte';
  import Metrics from './metrics.svelte';
  import Page from './page.svelte';
  import PlatformSection from './platform-section.svelte';
  import TechnologiesSection from './technologies-section.svelte';
  import SocialProofs from '$components/social-proofs.svelte';
  import SyncedBlock from './synced-block.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    metrics: Metrics,
    page: Page,
    'homepage-hero': HomepageHero,
    'list-section': ListSection,
    'platform-section': PlatformSection,
    'social-proofs': SocialProofs,
    'synced-block': SyncedBlock,
    'technologies-section': TechnologiesSection
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
