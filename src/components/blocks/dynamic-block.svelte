<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import ChatAndMessagingHero from './chat-and-messaging-hero.svelte';
  import CustomerStoriesSection from './customer-stories-section.svelte';
  import DevelopersSection from './developers-section.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import ImplementationSection from './implementation-section.svelte';
  import ListSection from './list-section.svelte';
  import Metrics from './metrics.svelte';
  import Page from './page.svelte';
  import PlatformSection from './platform-section.svelte';
  import SocialProofs from '$components/social-proofs.svelte';
  import SolutionsSection from './solutions-section.svelte';
  import SyncedBlock from './synced-block.svelte';
  import TechnologiesSection from './technologies-section.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    'chat-and-messaging-hero': ChatAndMessagingHero,
    'customer-stories-section': CustomerStoriesSection,
    'developers-section': DevelopersSection,
    'homepage-hero': HomepageHero,
    'implementation-section': ImplementationSection,
    'list-section': ListSection,
    metrics: Metrics,
    page: Page,
    'platform-section': PlatformSection,
    'social-proofs': SocialProofs,
    'solutions-section': SolutionsSection,
    'synced-block': SyncedBlock,
    'technologies-section': TechnologiesSection
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
