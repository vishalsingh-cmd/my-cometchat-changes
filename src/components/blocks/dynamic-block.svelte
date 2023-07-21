<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import AwardsSection from './awards-section.svelte';
  import ChatAndMessagingHero from './chat-and-messaging-hero.svelte';
  import ChatFeaturesSection from './chat-features-section.svelte';
  import CustomersHero from './customers-hero.svelte';
  import CustomerStory from './customer-story.svelte';
  import CustomerStoriesSection from './customer-stories-section.svelte';
  import DevelopersSection from './developers-section.svelte';
  import FeaturedStorySection from './featured-story-section.svelte';
  import FeaturesListSection from './features-list-section.svelte';
  import FeaturesSection from './features-section.svelte';
  import HeaderAndListSection from './header-and-list-section.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import ImplementationSection from './implementation-section.svelte';
  import InDepthAnalyticsSection from './in-depth-analytics-section.svelte';
  import ListSection from './list-section.svelte';
  import Metrics from './metrics.svelte';
  import Page from './page.svelte';
  import PlatformSection from './platform-section.svelte';
  import SocialProofs from './social-proofs.svelte';
  import SolutionsSection from './solutions-section.svelte';
  import SyncedBlock from './synced-block.svelte';
  import TechnologiesSection from './technologies-section.svelte';
  import VoiceAndVideoCallsHero from './voice-and-video-calls-hero.svelte';
  import WebhooksSection from './webhooks-section.svelte';
  import PreFooter from './pre-footer.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    'awards-section': AwardsSection,
    'chat-and-messaging-hero': ChatAndMessagingHero,
    'chat-features-section': ChatFeaturesSection,
    'customers-hero': CustomersHero,
    'customer-story': CustomerStory,
    'customer-stories-section': CustomerStoriesSection,
    'developers-section': DevelopersSection,
    'featured-story-section': FeaturedStorySection,
    'features-section': FeaturesSection,
    'features-list-section': FeaturesListSection,
    'header-and-list-section': HeaderAndListSection,
    'homepage-hero': HomepageHero,
    'implementation-section': ImplementationSection,
    'in-depth-analytics-section': InDepthAnalyticsSection,
    'list-section': ListSection,
    metrics: Metrics,
    page: Page,
    'platform-section': PlatformSection,
    'pre-footer': PreFooter,
    'social-proofs': SocialProofs,
    'solutions-section': SolutionsSection,
    'synced-block': SyncedBlock,
    'technologies-section': TechnologiesSection,
    'voice-and-video-calls-hero': VoiceAndVideoCallsHero,
    'webhooks-section': WebhooksSection
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
