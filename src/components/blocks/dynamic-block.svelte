<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import ChatAndMessagingHero from './chat-and-messaging-hero.svelte';
  import ChatFeaturesSection from './chat-features-section.svelte';
  import DevelopersSection from './developers-section.svelte';
  import ImplementationSection from './implementation-section.svelte';
  import Metrics from './metrics.svelte';
  import Page from './page.svelte';
  import ListSection from './list-section.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import PlatformSection from './platform-section.svelte';
  import TechnologiesSection from './technologies-section.svelte';
  import CustomerStoriesSection from './customer-stories-section.svelte';
  import SocialProofs from '$components/social-proofs.svelte';
  import SyncedBlock from './synced-block.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    'chat-and-messaging-hero': ChatAndMessagingHero,
    'chat-features-section': ChatFeaturesSection,
    'customer-stories-section': CustomerStoriesSection,
    'developers-section': DevelopersSection,
    'homepage-hero': HomepageHero,
    'implementation-section': ImplementationSection,
    'list-section': ListSection,
    'platform-section': PlatformSection,
    'social-proofs': SocialProofs,
    'synced-block': SyncedBlock,
    'technologies-section': TechnologiesSection,
    metrics: Metrics,
    page: Page
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
