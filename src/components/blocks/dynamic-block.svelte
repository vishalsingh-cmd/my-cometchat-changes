<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import AwardsSection from './awards-section.svelte';
  import ChatAndMessagingHero from './chat-and-messaging-hero.svelte';
  import ChatFeaturesSection from './chat-features-section.svelte';
  import CometCreditsSection from './comet-credits-section.svelte';
  import CoreFeaturesPricingSection from './core-features-pricing-section.svelte';
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
  import HeroForm from './hero-form.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import ImplementationSection from './implementation-section.svelte';
  import ImplementationSectionV2 from './implementation-section-v2.svelte';
  import ImplementationSectionV3 from './implementation-section-v3.svelte';
  import ImplementationListSection from './implementation-list-section.svelte';
  import InDepthAnalyticsSection from './in-depth-analytics-section.svelte';
  import InfrastructureSection from './infrastructure-section.svelte';
  import IpadIframe from './ipad-iframe.svelte';
  import MediaTabsSection from './media-tabs-section.svelte';
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
  import PricingHero from './pricing-hero.svelte';
  import PricingHeroEnhancements from './pricing-hero-enhancements.svelte';
  import PricingBetaHero from './pricing-beta-hero.svelte';
  import PricingTable from './pricing-table.svelte';
  import PricingTableEnhanced from './pricing-table-enhanced.svelte';
  import PricingTableSection from './pricing-table-section.svelte';
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
  import PricingHeroRevamp from './pricing-hero-revamp.svelte';
  import PricingTableRevamp from './pricing-table-revamp.svelte';
  import FeaturesWithNavbarSection from './features-with-navbar-section.svelte';
  import TitleMediaSection from './title-media-section.svelte';
  import FeaturesAutoScrollSection from './features-auto-scroll-section.svelte';
  import TestimonialSection from './testimonial-section.svelte';
  import CenterStaticBannerV03 from '$components/center-static-banner-v03.svelte';
  import ModerationFeaturesSection from './moderation-features-section.svelte';
  import PricingHeroQ3Y24 from './pricing-hero-Q3Y24.svelte';
  import PricingTableQ3Y24 from './pricing-table-Q3Y24.svelte';

  export let block: SbBlokData;
  const map: Record<string, ComponentType> = {
    'awards-section': AwardsSection,
    'chat-and-messaging-hero': ChatAndMessagingHero,
    'chat-features-section': ChatFeaturesSection,
    'comet-credits-section': CometCreditsSection,
    'core-features-pricing-section': CoreFeaturesPricingSection,
    'testimonial-section': TestimonialSection,
    'features-auto-scroll-section': FeaturesAutoScrollSection,
    'customers-hero': CustomersHero,
    'customer-story': CustomerStory,
    'customer-stories-section': CustomerStoriesSection,
    'center-static-banner-v03': CenterStaticBannerV03,
    'developers-section': DevelopersSection,
    'directory-section': DirectorySection,
    'double-panel-section': DoublePanelSection,
    'faq-section': FaqSection,
    'featured-story-section': FeaturedStorySection,
    'features-at-glance-section': FeaturesAtGlanceSection,
    'features-section': FeaturesSection,
    'features-with-navbar-section': FeaturesWithNavbarSection,
    'features-list-section': FeaturesListSection,
    'header-and-list-section': HeaderAndListSection,
    'hero-form': HeroForm,
    'homepage-hero': HomepageHero,
    'implementation-section': ImplementationSection,
    'implementation-section-v2': ImplementationSectionV2,
    'implementation-section-v3': ImplementationSectionV3,
    'implementation-list-section': ImplementationListSection,
    'in-depth-analytics-section': InDepthAnalyticsSection,
    'infrastructure-section': InfrastructureSection,
    'ipad-iframe': IpadIframe,
    'media-tabs-section': MediaTabsSection,
    'media-with-list-section': MediaWithListSection,
    'legal-hero': LegalHero,
    'list-section': ListSection,
    'lists-section': ListsSection,
    'logo-showcase': LogoShowcase,
    metrics: Metrics,
    'moderation-features': ModerationFeatures,
    'moderation-features-section': ModerationFeaturesSection,
    'newsletter-section': NewsletterSection,
    page: Page,
    'platform-section': PlatformSection,
    'pre-footer': PreFooter,
    'pricing-hero': PricingHero,
    'pricing-beta-hero': PricingBetaHero,
    'pricing-hero-enhancements': PricingHeroEnhancements,
    'pricing-hero-revamp': PricingHeroRevamp,
    'pricing-hero-Q3Y24': PricingHeroQ3Y24,
    'pricing-table': PricingTable,
    'pricing-table-enhanced': PricingTableEnhanced,
    'pricing-table-section': PricingTableSection,
    'pricing-table-revamp': PricingTableRevamp,
    'pricing-table-Q3Y24': PricingTableQ3Y24,
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
    'title-media-section': TitleMediaSection,
    'title-section': TitleSection,
    'voice-and-video-calls-hero': VoiceAndVideoCallsHero,
    'webhooks-hero': WebhooksHero,
    'webhooks-section': WebhooksSection
  };
</script>

{#if block?.component && typeof block?.component === 'string' && map[block?.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
