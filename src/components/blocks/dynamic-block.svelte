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
  import DirectorySection from './directory-section.svelte';
  import DoublePanelSection from './double-panel-section.svelte';
  import FaqSection from './faq-section.svelte';
  import FeaturedStorySection from './featured-story-section.svelte';
  import FeaturesAtGlanceSection from './features-at-glance-section.svelte';
  import FeaturesListSection from './features-list-section.svelte';
  import FeaturesSection from './features-section.svelte';
  import HeaderAndListSection from './header-and-list-section.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import ImplementationSection from './implementation-section.svelte';
  import ImplementationSectionV2 from './implementation-section-v2.svelte';
  import ImplementationSectionV3 from './implementation-section-v3.svelte';
  import ImplementationListSection from './implementation-list-section.svelte';
  import InDepthAnalyticsSection from './in-depth-analytics-section.svelte';
  import InfrastructureSection from './infrastructure-section.svelte';
  import MediaWithListSection from './media-with-list-section.svelte';
  import LegalHero from './legal-hero.svelte';
  import ListSection from './list-section.svelte';
  import ListsSection from './lists-section.svelte';
  import LogoShowcase from './logo-showcase.svelte';
  import Metrics from './metrics.svelte';
  import ModerationFeatures from './moderation-features.svelte';
  import NewsletterSection from './newsletter-section.svelte';
  import Page from './page.svelte';
  import PreFooter from './pre-footer.svelte';
  import PlatformSection from './platform-section.svelte';
  import ResourcesHero from './resources-hero.svelte';
  import RelatedStoriesSection from './related-stories-section.svelte';
  import RichTextSection from './rich-text-section.svelte';
  import SocialProofs from './social-proofs.svelte';
  import SolutionsHero from './solutions-hero.svelte';
  import SolutionsSection from './solutions-section.svelte';
  import StandardHero from './standard-hero.svelte';
  import SyncedBlock from './synced-block.svelte';
  import TechnologiesSection from './technologies-section.svelte';
  import TechnologiesSectionCopy from './technologies-section-copy.svelte';
  import TechnologyHero from './technology-hero.svelte';
  import TitleFeaturesSection from './title-features-section.svelte';
  import TitleImageSection from './title-image-section.svelte';
  import TitleSection from './title-section.svelte';
  import VoiceAndVideoCallsHero from './voice-and-video-calls-hero.svelte';
  import WebhooksHero from './webhooks-hero.svelte';
  import WebhooksSection from './webhooks-section.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    'awards-section': AwardsSection,
    'chat-and-messaging-hero': ChatAndMessagingHero,
    'chat-features-section': ChatFeaturesSection,
    'customers-hero': CustomersHero,
    'customer-story': CustomerStory,
    'customer-stories-section': CustomerStoriesSection,
    'developers-section': DevelopersSection,
    'directory-section': DirectorySection,
    'double-panel-section': DoublePanelSection,
    'faq-section': FaqSection,
    'featured-story-section': FeaturedStorySection,
    'features-at-glance-section': FeaturesAtGlanceSection,
    'features-section': FeaturesSection,
    'features-list-section': FeaturesListSection,
    'header-and-list-section': HeaderAndListSection,
    'homepage-hero': HomepageHero,
    'implementation-section': ImplementationSection,
    'implementation-section-v2': ImplementationSectionV2,
    'implementation-section-v3': ImplementationSectionV3,
    'implementation-list-section': ImplementationListSection,
    'in-depth-analytics-section': InDepthAnalyticsSection,
    'infrastructure-section': InfrastructureSection,
    'media-with-list-section': MediaWithListSection,
    'legal-hero': LegalHero,
    'list-section': ListSection,
    'lists-section': ListsSection,
    'logo-showcase': LogoShowcase,
    metrics: Metrics,
    'moderation-features': ModerationFeatures,
    'newsletter-section': NewsletterSection,
    page: Page,
    'platform-section': PlatformSection,
    'pre-footer': PreFooter,
    'resources-hero': ResourcesHero,
    'related-stories-section': RelatedStoriesSection,
    'rich-text-section': RichTextSection,
    'social-proofs': SocialProofs,
    'solutions-hero': SolutionsHero,
    'solutions-section': SolutionsSection,
    'standard-hero': StandardHero,
    'synced-block': SyncedBlock,
    'technologies-section': TechnologiesSection,
    'technologies-section_copy': TechnologiesSectionCopy,
    'technology-hero': TechnologyHero,
    'title-features-section': TitleFeaturesSection,
    'title-image-section': TitleImageSection,
    'title-section': TitleSection,
    'voice-and-video-calls-hero': VoiceAndVideoCallsHero,
    'webhooks-hero': WebhooksHero,
    'webhooks-section': WebhooksSection
  };
</script>

{#if block?.component && typeof block?.component === 'string' && map[block?.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
