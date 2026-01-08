<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import AgentsHero from './agents-hero.svelte';
  import AgentsHeroV2 from './agents-hero-v2.svelte';
  import AwardsSection from './awards-section.svelte';
  import BlogStoriesSlider from './blog-stories-slider.svelte';
  import ChatAndMessagingHero from './chat-and-messaging-hero.svelte';
  import ChatFeaturesSection from './chat-features-section.svelte';
  import ChatIntegration from './chat-integration.svelte';
  import CometCreditsSection from './comet-credits-section.svelte';
  import ComparisonTable from './comparison-table.svelte';
  import CoreFeaturesPricingSection from './core-features-pricing-section.svelte';
  import CustomersHero from './customers-hero.svelte';
  import CustomerHeroAnimated from './customer-hero-animated.svelte';
  import CustomerStats from './customer-stats.svelte';
  import CustomerStory from './customer-story.svelte';
  import CustomerStoriesSection from './customer-stories-section.svelte';
  import CustomerStoriesSlider from './customer-stories-slider.svelte';
  import DevelopersSection from './developers-section.svelte';
  import DirectorySection from './directory-section.svelte';
  import DoublePanelSection from './double-panel-section.svelte';
  import FaqSection from './faq-section.svelte';
  import FaqSectionV2 from './faq-section-v2.svelte';
  import FeaturedStorySection from './featured-story-section.svelte';
  import FeatureShowcase from './feature-showcase.svelte';
  import FeaturesAtGlanceSection from './features-at-glance-section.svelte';
  import FeaturesListSection from './features-list-section.svelte';
  import FeaturesSection from './features-section.svelte';
  import HeaderAndListSection from './header-and-list-section.svelte';
  import HeroForm from './hero-form.svelte';
  import HeroFormV2 from './hero-form-v2.svelte';
  import HomepageHero from './homepage-hero.svelte';
  import Image from './image-only.svelte';
  import ImplementationSection from './implementation-section.svelte';
  import ImplementationSectionV2 from './implementation-section-v2.svelte';
  import ImplementationSectionV3 from './implementation-section-v3.svelte';
  import ImplementationListSection from './implementation-list-section.svelte';
  import IndustryCarousel from './industry-carousel.svelte';
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
  import PathSelector from './path-selector.svelte';
  import PathSelectorV2 from './path-selector-v2.svelte';
  import PreFooter from './pre-footer.svelte';
  import PricingClients from './pricing-clients.svelte';
  import PricingComparison from './pricing-comparison.svelte';
  import PricingHero from './pricing-hero.svelte';
  import PricingHeroEnhancements from './pricing-hero-enhancements.svelte';
  import PricingBetaHero from './pricing-beta-hero.svelte';
  import PricingTable from './pricing-table.svelte';
  import PricingTableEnhanced from './pricing-table-enhanced.svelte';
  import PricingTableSection from './pricing-table-section.svelte';
  import PlatformSection from './platform-section.svelte';
  import ResourcesHero from './resources-hero.svelte';
  import ResourcesHeroV2 from './resources-hero-v2.svelte';
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
  import Testimonials from './testimonials.svelte';
  import TitleFeaturesSection from './title-features-section.svelte';
  import TitleImageSection from './title-image-section.svelte';
  import TitleImageSectionV2 from './title-image-section-v2.svelte';
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
  import PricingHeroQ3Y24V2 from './pricing-hero-Q3Y24-v2.svelte';
  import PricingHeroQ3Y24V3 from './pricing-hero-Q3Y24-v3.svelte';
  import PricingTableQ3Y24 from './pricing-table-Q3Y24.svelte';
  import PricingTableQ3Y24V2 from './pricing-table-Q3Y24-v2.svelte';
  import PricingTableQ3Y24V2Voice from './pricing-table-Q3Y24-v2-voice.svelte';
  import PricingTableQ3Y24V2ai from './pricing-table-Q3Y24-v2-ai.svelte';
  import PricingTableQ3Y24V2BYOA from './pricing-table-Q3Y24-v2-byoa.svelte';

  import ConnectedSteps from './connected-steps/connected-steps.svelte';
  import ConnectedStep from './connected-steps/connected-step.svelte';
  import MarketplaceBanner from './pages/marketplace/marketplace-banner.svelte';
  import ImageCarousal from './carousals/image-carousal.svelte';
  import TitleAndDescription from './titles/title-and-description.svelte';
  import TitleAndIcons from './titles/title-and-icons.svelte';
  import MarketplaceBannerInfo from './pages/marketplace/marketplace-banner-info.svelte';
  import Emptyspace from './pages/emptyspace.svelte';
  import ComplexRoller from '$src/_views/HomeV2/_sections/Industry/ComplexRoller.svelte';
  import Homev2Banner from '$src/_views/HomeV2/_sections/Banner/Banner.svelte';
  import Homev3Banner from '$src/_views/HomeV2/_sections/Banner/Banner2.svelte';
  import Homev4Banner from '$src/_views/HomeV2/_sections/Banner/Banner3.svelte';
  import Homev5Banner from '$src/_views/HomeV2/_sections/Banner/Banner4.svelte';
  import FeatureTabs from '$src/_views/HomeV2/_sections/FeatureTabs/FeatureTabs.svelte';
  import CoreFeatures from './core-features.svelte';
  import SecureSection from './secure-section.svelte';
  import ServiceCard from './service-card.svelte';
  import SharedService from './shared-service.svelte';

  import ClientsV2 from '$src/_views/HomeV2/_sections/Clients/Clients2.svelte';
  import Clients from '$src/_views/HomeV2/_sections/Clients/Clients.svelte';
  import Step from '$src/_views/HomeV2/_sections/Step/Step.svelte';

  import Technologies from '$src/_views/HomeV2/_sections/Technologies/Technologies.svelte';
  import PreFooter2 from '$src/components/blocks/pre-footer-2.svelte';
  import Platform from '$src/_views/HomeV2/_sections/Platform/Platform.svelte';
  import Secure from '$src/_views/HomeV2/_sections/Secure/Secure.svelte';
  import Testimonial from '$src/_comps/specials/SpecialTestimonial/SpecialTestimonial.svelte';
  import TitleBlock from '$src/components/blocks/title-block.svelte';
  import TitleBlockLeft from '$src/components/blocks/title-block-left.svelte';

  // templates
  import TemplatesBanner from '$src/_views/Templates/Banner/Banner.svelte';
  import TemplatesListing from '$src/_views/Templates/Listing/Listing.svelte';
  import TemplatesFilterableListing from '$src/_views/Templates/Listing/FilterableListing.svelte';
  import TemplatesSectionInfo from '$src/_views/Templates/_blocks/SectionInfo.svelte';
  import TemplatesPlatformSection from '$src/_views/Templates/_blocks/TemplatesPlatformSection.svelte';
  import RelatedTemplates from '$src/_views/Templates/_blocks/RelatedTemplates.svelte';
  import CtaBlockWithImage from './cta-block-with-image.svelte';

  export let block: SbBlokData;
  const map: Record<string, ComponentType> = {
    'core-features': CoreFeatures,
    'agents-hero': AgentsHero,
    'agents-hero-v2': AgentsHeroV2,
    'awards-section': AwardsSection,

    'blog-stories-slider': BlogStoriesSlider,

    'chat-and-messaging-hero': ChatAndMessagingHero,
    'chat-integrations': ChatIntegration,
    'chat-features-section': ChatFeaturesSection,
    'comet-credits-section': CometCreditsSection,
    complex_roller: ComplexRoller,
    'core-features-pricing-section': CoreFeaturesPricingSection,
    'customer-stats': CustomerStats,
    'testimonial-section': TestimonialSection,
    'features-auto-scroll-section': FeaturesAutoScrollSection,
    'comparison-table': ComparisonTable,
    'cta-block-with-image': CtaBlockWithImage,

    'customers-hero': CustomersHero,
    'customers-hero-animated': CustomerHeroAnimated,
    'customer-story': CustomerStory,
    'customer-stories-section': CustomerStoriesSection,
    'customer-stories-slider': CustomerStoriesSlider,
    'center-static-banner-v03': CenterStaticBannerV03,

    'connected-step': ConnectedStep,
    'connected-steps': ConnectedSteps,
    'path-selectors': PathSelector,
    'path-selectors-v2': PathSelectorV2,
    'developers-section': DevelopersSection,
    'directory-section': DirectorySection,
    'double-panel-section': DoublePanelSection,

    emptyspace: Emptyspace,

    'faq-section': FaqSection,
    'faq-section-v2': FaqSectionV2,
    'featured-story-section': FeaturedStorySection,
    'features-at-glance-section': FeaturesAtGlanceSection,
    'features-section': FeaturesSection,
    'feature-showcase': FeatureShowcase,
    'features-with-navbar-section': FeaturesWithNavbarSection,
    'features-list-section': FeaturesListSection,
    'header-and-list-section': HeaderAndListSection,
    'hero-form': HeroForm,
    'hero-form-v2': HeroFormV2,
    'homepage-hero': HomepageHero,

    'industry-carousel': IndustryCarousel,
    'image-only': Image,
    'implementation-section': ImplementationSection,
    'implementation-section-v2': ImplementationSectionV2,
    'implementation-section-v3': ImplementationSectionV3,
    'implementation-list-section': ImplementationListSection,
    'in-depth-analytics-section': InDepthAnalyticsSection,
    'infrastructure-section': InfrastructureSection,
    'ipad-iframe': IpadIframe,
    'image-carousal': ImageCarousal,

    'media-tabs-section': MediaTabsSection,
    'media-with-list-section': MediaWithListSection,
    'legal-hero': LegalHero,
    'list-section': ListSection,
    'lists-section': ListsSection,
    'logo-showcase': LogoShowcase,
    metrics: Metrics,

    'marketplace-banner-info': MarketplaceBannerInfo,
    'marketplace-banner': MarketplaceBanner,
    'moderation-features': ModerationFeatures,
    'moderation-features-section': ModerationFeaturesSection,
    'newsletter-section': NewsletterSection,

    page: Page,
    'platform-section': PlatformSection,
    'pre-footer': PreFooter,
    'pre-footer-2': PreFooter2,
    'pricing-clients': PricingClients,
    'pricing-comparison': PricingComparison,
    'pricing-hero': PricingHero,
    'pricing-beta-hero': PricingBetaHero,
    'pricing-hero-enhancements': PricingHeroEnhancements,
    'pricing-hero-revamp': PricingHeroRevamp,
    'pricing-hero-Q3Y24': PricingHeroQ3Y24,
    'pricing-hero-Q3Y24-v2': PricingHeroQ3Y24V2,
    'pricing-hero-Q3Y24-v3': PricingHeroQ3Y24V3,
    'pricing-table': PricingTable,
    'pricing-table-enhanced': PricingTableEnhanced,
    'pricing-table-section': PricingTableSection,
    'pricing-table-revamp': PricingTableRevamp,
    'pricing-table-Q3Y24': PricingTableQ3Y24,
    'pricing-table-Q3Y24-v2': PricingTableQ3Y24V2,
    'pricing-table-Q3Y24-v2-voice': PricingTableQ3Y24V2Voice,
    'pricing-table-Q3Y24-v2-ai': PricingTableQ3Y24V2ai,
    'pricing-table-Q3Y24-v2-byoa': PricingTableQ3Y24V2BYOA,
    'resources-hero': ResourcesHero,
    'resources-hero-v2': ResourcesHeroV2,
    'related-stories-section': RelatedStoriesSection,
    'rich-text-section': RichTextSection,
    'secure-section': SecureSection,
    'service-cards': ServiceCard,
    'shared-service': SharedService,
    'social-proofs': SocialProofs,
    'solutions-hero': SolutionsHero,
    'solutions-section': SolutionsSection,
    'standard-hero': StandardHero,
    'synced-block': SyncedBlock,
    'technologies-section': TechnologiesSection,
    'technologies-section_copy': TechnologiesSectionCopy,
    'technology-hero': TechnologyHero,
    testimonials: Testimonials,

    'title-block': TitleBlock,
    'title-block-left': TitleBlockLeft,
    'title-features-section': TitleFeaturesSection,
    'title-image-section': TitleImageSection,
    'title-image-section-v2': TitleImageSectionV2,
    'title-media-section': TitleMediaSection,
    'title-section': TitleSection,
    'title-and-description': TitleAndDescription,
    'title-and-icons': TitleAndIcons,

    'voice-and-video-calls-hero': VoiceAndVideoCallsHero,
    'webhooks-hero': WebhooksHero,
    'webhooks-section': WebhooksSection,

    /* --------------------------------- homev2 --------------------------------- */
    home__banner: Homev2Banner,
    home_banner_v2: Homev3Banner,
    home_banner_v3: Homev4Banner,
    home_banner_v4: Homev5Banner,
    home__video_tabs: FeatureTabs,
    home_clients: Clients,
    home_clients_v2: ClientsV2,
    home_implementation: Step,
    home_technologies: Technologies,
    home__our_platform: Platform,
    home__secure: Secure,
    special_testimonials: Testimonial,

    /* -------------------------------- templates ------------------------------- */
    templates_banner: TemplatesBanner,
    templates_listing: TemplatesListing,
    templates_filterable_listing: TemplatesFilterableListing,
    templates_section_info: TemplatesSectionInfo,
    templates_platform_section: TemplatesPlatformSection,
    related_templates: RelatedTemplates
  };
</script>

{#if block?.component && typeof block?.component === 'string' && map[block?.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
