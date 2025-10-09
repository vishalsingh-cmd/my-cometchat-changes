import { StoryblokStory } from 'storyblok-generate-ts';

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface AccordionItemStoryblok {
  icon: number | string;
  title: string;
  brief?: string;
  detail?: RichtextStoryblok;
  media: AssetStoryblok;
  cta_slot?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'accordion-item';
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'story';
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      [k: string]: any;
    };

export interface AgentsHeroStoryblok {
  badge_text?: string;
  heading?: TitlleAndGradientTextStoryblok[];
  description?: string;
  description_2?: string;
  description_3?: string;
  primary_button_text?: string;
  primary_button_link?: MultilinkStoryblok;
  secondary_button_text?: string;
  secondary_button_link?: MultilinkStoryblok;
  hero_image?: AssetStoryblok;
  _uid: string;
  component: 'agents-hero';
  [k: string]: any;
}

export interface AgentsHeroV2Storyblok {
  badge_text?: string;
  gradient_title?: string;
  heading?: string;
  description?: string;
  description_2?: string;
  description_3?: string;
  primary_button_text?: string;
  primary_button_link?: MultilinkStoryblok;
  secondary_button_text?: string;
  secondary_button_link?: MultilinkStoryblok;
  hero_image?: AssetStoryblok;
  _uid: string;
  component: 'agents-hero-v2';
  [k: string]: any;
}

export interface AnimatedBannerBoxStoryblok {
  label?: string;
  icon?: AssetStoryblok;
  _uid: string;
  component: 'animated_banner_box';
  [k: string]: any;
}

export interface AuthorStoryblok {
  name: string;
  role?: string;
  company?: string;
  avatar: AssetStoryblok;
  description: string;
  _uid: string;
  component: 'author';
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface AwardsSectionStoryblok {
  theme: '' | 'light' | 'dark';
  title: string;
  awards: MultiassetStoryblok;
  _uid: string;
  component: 'awards-section';
  [k: string]: any;
}

export interface BlogAnnouncementSidebarCardStoryblok {
  title?: string;
  description?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'blog-announcement-sidebar-card';
  [k: string]: any;
}

export interface TableStoryblok {
  thead: {
    _uid: string;
    value?: string;
    component: number;
    [k: string]: any;
  }[];
  tbody: {
    _uid: string;
    body: {
      _uid?: string;
      value?: string;
      component?: number;
      [k: string]: any;
    }[];
    component: number;
    [k: string]: any;
  }[];
  [k: string]: any;
}

export interface BlogChecklistTableStoryblok {
  table?: TableStoryblok;
  _uid: string;
  component: 'blog-checklist-table';
  [k: string]: any;
}

export interface BlogComparisonTableStoryblok {
  column_slot?: BlogTableColumnStoryblok[];
  rows_slot?: BlogTableRowStoryblok[];
  _uid: string;
  component: 'blog-comparison-table';
  [k: string]: any;
}

export interface BlogPostStoryblok {
  cover?: AssetStoryblok;
  author?: StoryblokStory<AuthorStoryblok> | string;
  category:
    | ''
    | 'explorer'
    | 'video'
    | 'webinar'
    | 'how-to-guide'
    | 'chat'
    | 'calling'
    | 'insights'
    | 'industry'
    | 'best-practices';
  product_category: number | string;
  imported_from_old_site?: boolean;
  created_at: string;
  sidebar_right_slot?: (SideStaticBannerStoryblok | RelatedBlogsStoryblok)[];
  body: RichtextStoryblok;
  related?: RelatedStoriesSectionStoryblok[];
  pre_footer?: (PreFooterCopyStoryblok | SyncedBlockStoryblok)[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'blog-post';
  [k: string]: any;
}

export interface BlogTableCellImageStoryblok {
  image?: string;
  _uid: string;
  component: 'blog-table-cell-image';
  [k: string]: any;
}

export interface BlogTableCellTextStoryblok {
  text?: string;
  _uid: string;
  component: 'blog-table-cell-text';
  [k: string]: any;
}

export interface BlogTableColumnStoryblok {
  title?: string;
  _uid: string;
  component: 'blog-table-column';
  [k: string]: any;
}

export interface BlogTableRowStoryblok {
  cells?: (BlogTableCellTextStoryblok | BlogTableCellImageStoryblok)[];
  _uid: string;
  component: 'blog-table-row';
  [k: string]: any;
}

export interface BlogTextTableStoryblok {
  table?: TableStoryblok;
  _uid: string;
  component: 'blog-text-table';
  [k: string]: any;
}

export interface BreadcumbsStoryblok {
  name?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'breadcumbs';
  [k: string]: any;
}

export interface BulletPointStoryblok {
  item: RichtextStoryblok;
  coming_soon?: boolean;
  _uid: string;
  component: 'bullet-point';
  [k: string]: any;
}

export interface BulletPointsStoryblok {
  items: BulletPointStoryblok[];
  _uid: string;
  component: 'bullet-points';
  [k: string]: any;
}

export interface ButtonLinkStoryblok {
  variant: 'primary' | 'secondary';
  icon?: number | string;
  label: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'button-link';
  [k: string]: any;
}

export interface CardStoryblok {
  content: RichtextStoryblok;
  image: AssetStoryblok;
  name: string;
  designation: string;
  cta_slot?: ButtonLinkStoryblok[];
  bg?: AssetStoryblok;
  _uid: string;
  component: 'card';
  [k: string]: any;
}

export interface CenterStaticBannerV01Storyblok {
  title: string;
  description: string;
  image?: string;
  cta_slot: ButtonLinkStoryblok[];
  _uid: string;
  component: 'center-static-banner-v01';
  [k: string]: any;
}

export interface CenterStaticBannerV01CopyStoryblok {
  title: string;
  description: string;
  image?: string;
  cta_slot: ButtonLinkStoryblok[];
  _uid: string;
  component: 'center-static-banner-v01_copy';
  [k: string]: any;
}

export interface CenterStaticBannerV02Storyblok {
  title: string;
  cta_slot: ButtonLinkStoryblok[];
  _uid: string;
  component: 'center-static-banner-v02';
  [k: string]: any;
}

export interface CenterStaticBannerV03Storyblok {
  title: string;
  description: string;
  cta?: ButtonLinkStoryblok[];
  bg: AssetStoryblok;
  theme: '' | 'dark' | 'light';
  _uid: string;
  component: 'center-static-banner-v03';
  [k: string]: any;
}

export interface ChatAndMessagingHeroStoryblok {
  header: HeroHeaderStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'chat-and-messaging-hero';
  [k: string]: any;
}

export interface ChatFeaturesSectionStoryblok {
  items: HeaderWithImageStoryblok[];
  _uid: string;
  component: 'chat-features-section';
  [k: string]: any;
}

export interface ChatIntegrationStoryblok {
  title?: string;
  description?: string;
  hover_points?: SimpleTextStoryblok[];
  link_text?: string;
  link?: MultilinkStoryblok;
  Icon?: number | string;
  _uid: string;
  component: 'chat-integration';
  [k: string]: any;
}

export interface ChatIntegrationsStoryblok {
  cards?: ChatIntegrationStoryblok[];
  _uid: string;
  component: 'chat-integrations';
  [k: string]: any;
}

export interface CodeBlockItemStoryblok {
  illustration: AssetStoryblok;
  language_name: string;
  code_snippet_language:
    | ''
    | 'bash'
    | 'elixir'
    | 'javascript'
    | 'swift'
    | 'typescript'
    | 'yaml'
    | 'go';
  code_snippet_to_show: string;
  code_snippet_to_copy: string;
  _uid: string;
  component: 'code-block-item';
  [k: string]: any;
}

export interface CodeBlockItemCopyStoryblok {
  illustration: AssetStoryblok;
  language_name: string;
  code_snippet_language:
    | ''
    | 'bash'
    | 'elixir'
    | 'javascript'
    | 'swift'
    | 'typescript'
    | 'yaml'
    | 'go';
  code_snippet_to_show: string;
  code_snippet_to_copy: string;
  _uid: string;
  component: 'code-block-item_copy';
  [k: string]: any;
}

export interface CometCreditsSectionStoryblok {
  title: TitleSectionStoryblok[];
  panels_title: string;
  panels_description: string;
  panels: PanelItemStoryblok[];
  _uid: string;
  component: 'comet-credits-section';
  [k: string]: any;
}

export interface ComplexRollerStoryblok {
  tagline: string;
  title: string;
  description: string;
  roller_points: RollerPointStoryblok[];
  _uid: string;
  component: 'complex_roller';
  [k: string]: any;
}

export interface ConnectedStepStoryblok {
  icon?: AssetStoryblok;
  title?: string;
  description?: string;
  _uid: string;
  component: 'connected-step';
  [k: string]: any;
}

export interface ConnectedStepsStoryblok {
  title?: string;
  description?: string;
  steps: ConnectedStepStoryblok[];
  richDescription?: RichtextStoryblok;
  _uid: string;
  component: 'connected-steps';
  [k: string]: any;
}

export interface CoreFeatureItemStoryblok {
  is_top?: boolean;
  heading?: string;
  subheading?: string;
  subheading2?: string;
  items?: TextStoryblok[];
  footer?: MultilinkStoryblok;
  image?: AssetStoryblok;
  link_text?: string;
  description?: string;
  listheading?: string;
  footer_text?: string;
  _uid: string;
  component: 'core-feature-item';
  [k: string]: any;
}

export interface CoreFeaturesStoryblok {
  title?: string;
  subtitle?: string;
  gradient_title?: string;
  features?: CoreFeatureItemStoryblok[];
  _uid: string;
  component: 'core-features';
  [k: string]: any;
}

export interface CoreFeaturesPricingSectionStoryblok {
  title: TitleSectionStoryblok[];
  items: ListsSectionItemStoryblok[];
  _uid: string;
  component: 'core-features-pricing-section';
  [k: string]: any;
}

export interface CustomerStoryblok {
  logo: AssetStoryblok;
  industry: StoryblokStory<IndustryStoryblok> | string;
  _uid: string;
  component: 'customer';
  [k: string]: any;
}

export interface CustomersHeroStoryblok {
  title: string;
  customers?: SocialProofsStoryblok[];
  _uid: string;
  component: 'customers-hero';
  [k: string]: any;
}

export interface CustomersHeroAnimatedStoryblok {
  title1: string;
  title2?: string;
  background?: AssetStoryblok;
  _uid: string;
  component: 'customers-hero-animated';
  [k: string]: any;
}

export interface CustomerStatsStoryblok {
  cards?: ValueAndDescriptionStoryblok[];
  _uid: string;
  component: 'customer-stats';
  [k: string]: any;
}

export interface CustomerStoriesSectionStoryblok {
  title: TitleStoryblok[];
  testimonials: (StoryblokStory<TestimonialStoryblok> | string)[];
  _uid: string;
  component: 'customer-stories-section';
  [k: string]: any;
}

export interface CustomerStoryStoryblok {
  Quote?: any;
  quote: string;
  metrics?: MetricsStoryblok[];
  sidebar_right_slot?: (SideStaticBannerStoryblok | RelatedBlogsStoryblok)[];
  body: RichtextStoryblok;
  related: RelatedStoriesSectionStoryblok[];
  pre_footer?: PreFooterCopyStoryblok[];
  cover: AssetStoryblok;
  customer: StoryblokStory<CustomerStoryblok> | string;
  author?: StoryblokStory<AuthorStoryblok> | string;
  industry: number | string;
  imported_from_old_site?: boolean;
  created_at?: string;
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'customer-story';
  [k: string]: any;
}

export interface DevelopersSectionStoryblok {
  header: TitleStoryblok[];
  code_blocks: CodeBlockItemStoryblok[];
  _uid: string;
  component: 'developers-section';
  [k: string]: any;
}

export interface DirectorySectionStoryblok {
  label?: string;
  title?: string;
  content_type: '' | 'blog-post' | 'customer-story' | 'tutorial' | 'guide';
  _uid: string;
  component: 'directory-section';
  [k: string]: any;
}

export interface DisclaimerStoryblok {
  label?: string;
  description: string;
  _uid: string;
  component: 'disclaimer';
  [k: string]: any;
}

export interface DoublePanelSectionStoryblok {
  theme: '' | 'light' | 'dark';
  title?: TitleStoryblok[];
  panels?: PanelItemStoryblok[];
  _uid: string;
  component: 'double-panel-section';
  [k: string]: any;
}

export interface DynamicCalloutStoryblok {
  CalloutText: string;
  Icon: string;
  _uid: string;
  component: 'Dynamic Callout';
  [k: string]: any;
}

export interface EmptyspaceStoryblok {
  height_in_px?: number;
  _uid: string;
  component: 'emptyspace';
  [k: string]: any;
}

export interface ExperimentalTableStoryblok {
  _uid: string;
  component: 'experimental-table';
  [k: string]: any;
}

export interface FaqStoryblok {
  title: string;
  text: RichtextStoryblok;
  _uid: string;
  component: 'faq';
  [k: string]: any;
}

export interface FaqSectionStoryblok {
  title: TitleStoryblok[];
  faqs: FaqStoryblok[];
  _uid: string;
  component: 'faq-section';
  [k: string]: any;
}

export interface FeatureStoryblok {
  title?: string;
  feature_list?: FeatureItemStoryblok[];
  _uid: string;
  component: 'feature';
  [k: string]: any;
}

export interface FeaturedStorySectionStoryblok {
  theme: '' | 'light' | 'dark';
  featured_story:
    | StoryblokStory<CustomerStoryStoryblok>
    | StoryblokStory<BlogPostStoryblok>
    | StoryblokStory<TutorialStoryblok>
    | string;
  button_label: string;
  _uid: string;
  component: 'featured-story-section';
  [k: string]: any;
}

export interface FeatureItemStoryblok {
  title?: string;
  image: AssetStoryblok;
  items_right_of_image: ListItemStoryblok[];
  items?: ListSectionStoryblok[];
  _uid: string;
  component: 'feature-item';
  [k: string]: any;
}

export interface FeaturesAtGlanceSectionStoryblok {
  title?: string;
  features?: FeatureStoryblok[];
  _uid: string;
  component: 'features-at-glance-section';
  [k: string]: any;
}

export interface FeaturesAutoScrollSectionStoryblok {
  title: TitleSectionStoryblok[];
  items: AccordionItemStoryblok[];
  media_side: '' | 'left' | 'center' | 'right';
  _uid: string;
  component: 'features-auto-scroll-section';
  [k: string]: any;
}

export interface FeaturesListItemStoryblok {
  title: string;
  items: FeaturesListSubItemStoryblok[];
  _uid: string;
  component: 'features-list-item';
  [k: string]: any;
}

export interface FeaturesListSectionStoryblok {
  header: TitleStoryblok[];
  items: FeaturesListItemStoryblok[];
  _uid: string;
  component: 'features-list-section';
  [k: string]: any;
}

export interface FeaturesListSubItemStoryblok {
  title: string;
  content: (BulletPointsStoryblok | ImageStoryblok)[];
  _uid: string;
  component: 'features-list-sub-item';
  [k: string]: any;
}

export interface FeaturesSectionStoryblok {
  image_on_the_right?: boolean;
  image?: AssetStoryblok;
  title: TitleStoryblok[];
  tags?: TagStoryblok[];
  _uid: string;
  component: 'features-section';
  [k: string]: any;
}

export interface FeaturesWithNavbarSectionStoryblok {
  nav_theme?: '' | 'light' | 'dark';
  header?: TitleSectionStoryblok[];
  items: (TitleMediaSectionStoryblok | FaqSectionStoryblok)[];
  _uid: string;
  component: 'features-with-navbar-section';
  [k: string]: any;
}

export interface FeatureTabStoryblok {
  triggerName?: string;
  video?: AssetStoryblok;
  mobileImg?: AssetStoryblok;
  callout?: any[];
  _uid: string;
  component: 'feature_tab';
  [k: string]: any;
}

export interface FooterStoryblok {
  column_groups: FooterColumnGroupStoryblok[];
  subfooter?: any[];
  socials: LinkStoryblok[];
  prefooter_title: string;
  prefooter_description: string;
  prefooter_cta: ButtonLinkStoryblok[];
  _uid: string;
  component: 'footer';
  [k: string]: any;
}

export interface FooterColumnStoryblok {
  title: string;
  groups: (
    | FooterFolderLinkGroupStoryblok
    | FooterManualLinkGroupStoryblok
    | FooterTechnologyDocumentationLinkGroupStoryblok
  )[];
  _uid: string;
  component: 'footer-column';
  [k: string]: any;
}

export interface FooterColumnGroupStoryblok {
  columns: FooterColumnStoryblok[];
  _uid: string;
  component: 'footer-column-group';
  [k: string]: any;
}

export interface FooterFolderLinkGroupStoryblok {
  title: string;
  _uid: string;
  component: 'footer-folder-link-group';
  [k: string]: any;
}

export interface FooterManualLinkGroupStoryblok {
  title?: string;
  links: LinkStoryblok[];
  _uid: string;
  component: 'footer-manual-link-group';
  [k: string]: any;
}

export interface FooterTechnologyDocumentationLinkGroupStoryblok {
  title: string;
  links: (StoryblokStory<TechnologyStoryblok> | string)[];
  _uid: string;
  component: 'footer-technology-documentation-link-group';
  [k: string]: any;
}

export interface GistStoryblok {
  gist_script: string;
  _uid: string;
  component: 'gist';
  [k: string]: any;
}

export interface GuideStoryblok {
  cover?: AssetStoryblok;
  sidebar_right_slot?: (SideStaticBannerStoryblok | RelatedBlogsStoryblok)[];
  author?: StoryblokStory<AuthorStoryblok> | string;
  category:
    | ''
    | 'explorer'
    | 'video'
    | 'webinar'
    | 'how-to-guide'
    | 'chat'
    | 'calling'
    | 'insights'
    | 'industry'
    | 'best-practices';
  imported_from_old_site?: boolean;
  created_at?: string;
  body: RichtextStoryblok;
  related?: RelatedStoriesSectionStoryblok[];
  pre_footer?: (PreFooterCopyStoryblok | SyncedBlockStoryblok)[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'guide';
  [k: string]: any;
}

export interface Guide2Storyblok {
  cover?: AssetStoryblok;
  sidebar_right_slot?: (SideStaticBannerStoryblok | RelatedBlogsStoryblok)[];
  author?: StoryblokStory<AuthorStoryblok> | string;
  category:
    | ''
    | 'explorer'
    | 'video'
    | 'webinar'
    | 'how-to-guide'
    | 'chat'
    | 'calling'
    | 'insights'
    | 'industry'
    | 'best-practices';
  imported_from_old_site?: boolean;
  created_at?: string;
  body: RichtextStoryblok;
  related?: RelatedStoriesSectionStoryblok[];
  pre_footer?: (PreFooterCopyStoryblok | SyncedBlockStoryblok)[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'Guide2';
  [k: string]: any;
}

export interface HeaderAndListSectionStoryblok {
  theme?: '' | 'dark' | 'light';
  accent_colour?: '' | 'orange' | 'brand';
  title_alignment?: '' | 'center' | 'left';
  header?: TitleStoryblok[];
  items: ListItemStoryblok[];
  _uid: string;
  component: 'header-and-list-section';
  [k: string]: any;
}

export interface HeaderWithImageStoryblok {
  label: string;
  title: string;
  description: RichtextStoryblok;
  illustration: AssetStoryblok;
  _uid: string;
  component: 'header-with-image';
  [k: string]: any;
}

export interface HeroFormStoryblok {
  title: string;
  description?: string;
  form?: HubspotFormStoryblok[];
  subheading?: RichtextStoryblok;
  _uid: string;
  component: 'hero-form';
  [k: string]: any;
}

export interface HeroFormV2Storyblok {
  title: string;
  description?: string;
  subheading?: RichtextStoryblok;
  points?: TitleAndDescriptionStoryblok[];
  form?: HubspotFormStoryblok[];
  _uid: string;
  component: 'hero-form-v2';
  [k: string]: any;
}

export interface HeroHeaderStoryblok {
  title: RichtextStoryblok;
  description?: RichtextStoryblok;
  links: ButtonLinkStoryblok[];
  _uid: string;
  component: 'hero-header';
  [k: string]: any;
}

export interface HighlightsParagraphStoryblok {
  items: HighlightsParagraphItemStoryblok[];
  _uid: string;
  component: 'highlights-paragraph';
  [k: string]: any;
}

export interface HighlightsParagraphItemStoryblok {
  icon: number | string;
  title: string;
  subtitle: string;
  _uid: string;
  component: 'highlights-paragraph-item';
  [k: string]: any;
}

export interface Home_BannerStoryblok {
  beforeTitle?: string;
  animatedBoxes?: AnimatedBannerBoxStoryblok[];
  afterTitle?: string;
  description?: string;
  links?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'home__banner';
  [k: string]: any;
}

export interface HomeBannerV2Storyblok {
  beforeTitle?: string;
  afterTitle?: string;
  description?: string;
  links?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'home_banner_v2';
  [k: string]: any;
}

export interface HomeClientStoryblok {
  client_img?: AssetStoryblok;
  _uid: string;
  component: 'home_client';
  [k: string]: any;
}

export interface HomeClientsStoryblok {
  tagname?: string;
  clients?: HomeClientStoryblok[];
  link?: LinkStoryblok[];
  _uid: string;
  component: 'home_clients';
  [k: string]: any;
}

export interface HomeClientsV2Storyblok {
  tagname?: string;
  clients?: HomeClientStoryblok[];
  _uid: string;
  component: 'home_clients_v2';
  [k: string]: any;
}

export interface HomeImplementationStoryblok {
  tagline?: string;
  title?: string;
  description?: string;
  steps: HomeStepStoryblok[];
  _uid: string;
  component: 'home_implementation';
  [k: string]: any;
}

export interface Home_OurPlatformStoryblok {
  tagline?: string;
  title?: string;
  description?: string;
  cards?: HomeOurPlatformCardStoryblok[];
  _uid: string;
  component: 'home__our_platform';
  [k: string]: any;
}

export interface HomeOurPlatformCardStoryblok {
  icon?: AssetStoryblok;
  title?: string;
  description?: string;
  link?: LinkStoryblok[];
  image?: AssetStoryblok;
  _uid: string;
  component: 'home_our_platform_card';
  [k: string]: any;
}

export interface HomepageHeroStoryblok {
  title: RichtextStoryblok;
  links: ButtonLinkStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'homepage-hero';
  [k: string]: any;
}

export interface Home_SecureStoryblok {
  tagline?: string;
  title?: string;
  description?: string;
  secure_network?: SecureNetworkStoryblok[];
  uptime?: SecureReachStoryblok[];
  scalable?: SecureReachStoryblok[];
  award?: SecureAwardStoryblok[];
  _uid: string;
  component: 'home__secure';
  [k: string]: any;
}

export interface Home_StepStoryblok {
  image: AssetStoryblok;
  label?: string;
  title: string;
  description?: string;
  link?: LinkStoryblok[];
  _uid: string;
  component: 'home__step';
  [k: string]: any;
}

export interface HomeTechnologiesStoryblok {
  tagline?: string;
  title: string;
  link?: LinkStoryblok[];
  _uid: string;
  component: 'home_technologies';
  [k: string]: any;
}

export interface HomeTechnologyStoryblok {
  icon: AssetStoryblok;
  link: MultilinkStoryblok;
  _uid: string;
  component: 'home_technology';
  [k: string]: any;
}

export interface Home_VideoTabsStoryblok {
  featureTabs?: FeatureTabStoryblok[];
  _uid: string;
  component: 'home__video_tabs';
  [k: string]: any;
}

export interface HrefLangStoryblok {
  rel: string;
  href: string;
  hreflang: string;
  _uid: string;
  component: 'href-lang';
  [k: string]: any;
}

export interface HubspotFormStoryblok {
  form_title: string;
  api_region?: string;
  api_portal_id?: string;
  api_form_id: string;
  _uid: string;
  component: 'hubspot-form';
  [k: string]: any;
}

export interface ImageStoryblok {
  illustration: AssetStoryblok;
  _uid: string;
  component: 'image';
  [k: string]: any;
}

export interface ImageCarousalStoryblok {
  images: MultiassetStoryblok;
  _uid: string;
  component: 'image-carousal';
  [k: string]: any;
}

export interface ImageOnlyStoryblok {
  image?: AssetStoryblok;
  _uid: string;
  component: 'image-only';
  [k: string]: any;
}

export interface ImageTitleDescriptionTagsItemStoryblok {
  image: AssetStoryblok;
  tags: (TextStoryblok | TagStoryblok)[];
  title: string;
  description: RichtextStoryblok;
  _uid: string;
  component: 'image-title-description-tags-item';
  [k: string]: any;
}

export interface ImplementationListSectionStoryblok {
  label?: string;
  title?: string;
  items: PanelItemStoryblok[];
  _uid: string;
  component: 'implementation-list-section';
  [k: string]: any;
}

export interface ImplementationSectionStoryblok {
  header: TitleStoryblok[];
  items: PanelItemStoryblok[];
  _uid: string;
  component: 'implementation-section';
  [k: string]: any;
}

export interface ImplementationSectionV2Storyblok {
  accent_colour: '' | 'brand' | 'orange';
  header: TitleStoryblok[];
  items: PanelItemStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'implementation-section-v2';
  [k: string]: any;
}

export interface ImplementationSectionV3Storyblok {
  theme?: '' | 'dark' | 'light';
  accent_colour: '' | 'brand' | 'orange';
  header: TitleStoryblok[];
  items: PanelItemStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'implementation-section-v3';
  [k: string]: any;
}

export interface InDepthAnalyticsSectionStoryblok {
  header: TitleStoryblok[];
  _uid: string;
  component: 'in-depth-analytics-section';
  [k: string]: any;
}

export interface IndustryStoryblok {
  redirect_url?: MultilinkStoryblok;
  cover_image: AssetStoryblok;
  illustration: number | string;
  short_name: string;
  description: string;
  body?: (
    | AgentsHeroStoryblok
    | AgentsHeroV2Storyblok
    | AwardsSectionStoryblok
    | BlogAnnouncementSidebarCardStoryblok
    | BreadcumbsStoryblok
    | CardStoryblok
    | CenterStaticBannerV03Storyblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | ChatIntegrationStoryblok
    | ChatIntegrationsStoryblok
    | CometCreditsSectionStoryblok
    | ConnectedStepStoryblok
    | ConnectedStepsStoryblok
    | CoreFeaturesPricingSectionStoryblok
    | CustomersHeroStoryblok
    | CustomersHeroAnimatedStoryblok
    | CustomerStatsStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | EmptyspaceStoryblok
    | FaqSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesAtGlanceSectionStoryblok
    | FeaturesAutoScrollSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | FeaturesWithNavbarSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HeroFormStoryblok
    | HeroFormV2Storyblok
    | HomepageHeroStoryblok
    | ImageCarousalStoryblok
    | ImageOnlyStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | ImplementationSectionV3Storyblok
    | InDepthAnalyticsSectionStoryblok
    | IndustryCarouselStoryblok
    | IndustryCarouselItemStoryblok
    | InfrastructureSectionStoryblok
    | IpadIframeStoryblok
    | LegalHeroStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MediaTabsSectionStoryblok
    | MediaWithListSectionStoryblok
    | MetricsStoryblok
    | ModerationFeatureCardStoryblok
    | ModerationFeatureCardsRowStoryblok
    | ModerationFeaturesStoryblok
    | ModerationFeaturesSectionStoryblok
    | NewsletterSectionStoryblok
    | PathSelectorStoryblok
    | PathSelectorsStoryblok
    | PlatformSectionStoryblok
    | PopupStoryblok
    | PreFooterStoryblok
    | PricingBetaHeroStoryblok
    | PricingCardsStoryblok
    | PricingHeroStoryblok
    | PricingHeroEnhancementsStoryblok
    | PricingHeroQ3Y24Storyblok
    | PricingHeroQ3Y24CardStoryblok
    | PricingHeroQ3Y24CardV1Storyblok
    | PricingHeroRevampStoryblok
    | PricingPayAsYouGoHighlightsStoryblok
    | PricingPlanGrowSegmentStoryblok
    | PricingTableStoryblok
    | PricingTableCategoryEnhancedStoryblok
    | PricingTableEnhancedStoryblok
    | PricingTableGroupLineRevampStoryblok
    | PricingTableGroupRevampStoryblok
    | PricingTableHeaderColumnRevampStoryblok
    | PricingTableQ3Y24Storyblok
    | PricingTableQ3Y24V2Storyblok
    | PricingTableRevampStoryblok
    | PricingTableSectionStoryblok
    | PricingTitleQ3Y24Storyblok
    | RelatedBlogsStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SharedServiceCardStoryblok
    | SidebarSlotStoryblok
    | SideStaticBannerStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TechnologyHeroCopyStoryblok
    | TemplatesSidebarStoryblok
    | TestimonialSectionStoryblok
    | TitleBlockStoryblok
    | TitleBlockLeftStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleImageSectionV2Storyblok
    | TitleMediaSectionStoryblok
    | TitleSectionStoryblok
    | TitleWithCtaStoryblok
    | TitlleAndGradientTextStoryblok
    | ValueAndDescriptionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'industry';
  [k: string]: any;
}

export interface IndustryCarouselStoryblok {
  items?: IndustryCarouselItemStoryblok[];
  images?: MultiassetStoryblok;
  _uid: string;
  component: 'industry-carousel';
  [k: string]: any;
}

export interface IndustryCarouselItemStoryblok {
  title?: string;
  subheading?: string;
  description?: string;
  points?: SimpleTextStoryblok[];
  link_text?: string;
  link?: MultilinkStoryblok;
  icon?: number | string;
  image?: AssetStoryblok;
  _uid: string;
  component: 'industry-carousel-item';
  [k: string]: any;
}

export interface InfrastructureSectionStoryblok {
  accent_colour: '' | 'brand' | 'orange';
  header?: TitleStoryblok[];
  items?: BulletPointStoryblok[];
  _uid: string;
  component: 'infrastructure-section';
  [k: string]: any;
}

export interface IpadIframeStoryblok {
  iframe?: string;
  _uid: string;
  component: 'ipad-iframe';
  [k: string]: any;
}

export interface LegalHeroStoryblok {
  title: string;
  _uid: string;
  component: 'legal-hero';
  [k: string]: any;
}

export interface LinkStoryblok {
  label?: string;
  link: MultilinkStoryblok;
  icon?: number | string;
  _uid: string;
  component: 'link';
  [k: string]: any;
}

export interface ListItemStoryblok {
  icon: number | string;
  title: string;
  description: RichtextStoryblok;
  link?: LinkStoryblok[];
  _uid: string;
  component: 'list-item';
  [k: string]: any;
}

export interface ListSectionStoryblok {
  theme?: '' | 'light' | 'dark';
  items: ListItemStoryblok[];
  _uid: string;
  component: 'list-section';
  [k: string]: any;
}

export interface ListsSectionStoryblok {
  theme: '' | 'light' | 'dark';
  header?: TitleStoryblok[];
  items: ListsSectionItemStoryblok[];
  single_item_columns_count?: number;
  _uid: string;
  component: 'lists-section';
  [k: string]: any;
}

export interface ListsSectionItemStoryblok {
  title?: string;
  items: BulletPointsStoryblok[];
  _uid: string;
  component: 'lists-section-item';
  [k: string]: any;
}

export interface LogoShowcaseStoryblok {
  title?: string;
  logos: (number | string)[];
  _uid: string;
  component: 'logo-showcase';
  [k: string]: any;
}

export interface MarketplaceBannerStoryblok {
  carousal: any[];
  info: MarketplaceBannerInfoStoryblok[];
  _uid: string;
  component: 'marketplace-banner';
  [k: string]: any;
}

export interface MarketplaceBannerInfoStoryblok {
  info: (TitleAndDescriptionStoryblok | TitleAndIconsStoryblok)[];
  _uid: string;
  component: 'marketplace-banner-info';
  [k: string]: any;
}

export interface MarketplacesStoryblok {
  body?: any[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'marketplaces';
  [k: string]: any;
}

export interface MediaTabStoryblok {
  customer: StoryblokStory<CustomerStoryblok> | string;
  image: AssetStoryblok;
  _uid: string;
  component: 'media-tab';
  [k: string]: any;
}

export interface MediaTabsSectionStoryblok {
  accent_colour?: '' | 'brand' | 'orange';
  highlighted_story: StoryblokStory<CustomerStoryStoryblok> | string;
  button_label: string;
  tabs_side?: '' | 'left' | 'right';
  tabs: MediaTabStoryblok[];
  _uid: string;
  component: 'media-tabs-section';
  [k: string]: any;
}

export interface MediaWithListSectionStoryblok {
  theme?: '' | 'dark' | 'light';
  accent_colour?: '' | 'brand' | 'orange';
  media: AssetStoryblok;
  items: ListItemStoryblok[];
  _uid: string;
  component: 'media-with-list-section';
  [k: string]: any;
}

export interface MessageBoxWithLinkStoryblok {
  title: string;
  message: string;
  cta?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'message-box-with-link';
  [k: string]: any;
}

export interface MetricsStoryblok {
  metrics?: MetricsItemStoryblok[];
  _uid: string;
  component: 'metrics';
  [k: string]: any;
}

export interface MetricsItemStoryblok {
  metric: string;
  description: string;
  _uid: string;
  component: 'metrics-item';
  [k: string]: any;
}

export interface ModerationFeatureStoryblok {
  name: string;
  sub_features: PanelItemStoryblok[];
  images: MultiassetStoryblok;
  _uid: string;
  component: 'moderation-feature';
  [k: string]: any;
}

export interface ModerationFeatureCardStoryblok {
  image: AssetStoryblok;
  title: string;
  description: string;
  _uid: string;
  component: 'moderation-feature-card';
  [k: string]: any;
}

export interface ModerationFeatureCardsRowStoryblok {
  cards: ModerationFeatureCardStoryblok[];
  _uid: string;
  component: 'moderation-feature-cards-row';
  [k: string]: any;
}

export interface ModerationFeaturesStoryblok {
  title: TitleStoryblok[];
  features: ModerationFeatureStoryblok[];
  _uid: string;
  component: 'moderation-features';
  [k: string]: any;
}

export interface ModerationFeaturesSectionStoryblok {
  title: TitleSectionStoryblok[];
  rows: ModerationFeatureCardsRowStoryblok[];
  _uid: string;
  component: 'moderation-features-section';
  [k: string]: any;
}

export interface NavFeatureStoryblok {
  title: string;
  description: string;
  icon: number | string;
  link: MultilinkStoryblok;
  _uid: string;
  component: 'nav-feature';
  [k: string]: any;
}

export interface NavFeatureBigCardStoryblok {
  title: string;
  image: AssetStoryblok;
  link: MultilinkStoryblok;
  _uid: string;
  component: 'nav-feature-big-card';
  [k: string]: any;
}

export interface NavFeatureBigCardsStoryblok {
  title?: string;
  cards: NavFeatureBigCardStoryblok[];
  see_all_card: NavFeatureBigCardStoryblok[];
  _uid: string;
  component: 'nav-feature-big-cards';
  [k: string]: any;
}

export interface NavFeatureCardStoryblok {
  isNew?: boolean;
  title: string;
  description: string;
  icon: number | string;
  link: MultilinkStoryblok;
  _uid: string;
  component: 'nav-feature-card';
  [k: string]: any;
}

export interface NavFeatureCardsStoryblok {
  title?: string;
  columns?: '' | 'auto' | '1' | '2' | '3';
  cards: NavFeatureCardStoryblok[];
  _uid: string;
  component: 'nav-feature-cards';
  [k: string]: any;
}

export interface NavFeatureIconStoryblok {
  title?: string;
  icon: number | string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'nav-feature-icon';
  [k: string]: any;
}

export interface NavFeatureIconsStoryblok {
  title: string;
  icons: NavFeatureIconStoryblok[];
  ctas: LinkStoryblok[];
  _uid: string;
  component: 'nav-feature-icons';
  [k: string]: any;
}

export interface NavFeaturesStoryblok {
  title?: string;
  columns?: '' | 'auto' | '1' | '2' | '3';
  features: NavFeatureStoryblok[];
  _uid: string;
  component: 'nav-features';
  [k: string]: any;
}

export interface NavFeatureSideMenuStoryblok {
  items: NavFeatureSideMenuItemStoryblok[];
  _uid: string;
  component: 'nav-feature-side-menu';
  [k: string]: any;
}

export interface NavFeatureSideMenuItemStoryblok {
  title?: string;
  content: (
    | NavFeaturesStoryblok
    | NavFeatureIconsStoryblok
    | NavFeatureCardsStoryblok
    | NavFeatureBigCardsStoryblok
  )[];
  _uid: string;
  component: 'nav-feature-side-menu-item';
  [k: string]: any;
}

export interface NavItemStoryblok {
  title: string;
  isNew?: boolean;
  panel: (
    | NavFeatureIconsStoryblok
    | NavFeaturesStoryblok
    | NavFeatureCardsStoryblok
    | NavFeatureBigCardsStoryblok
    | NavFeatureSideMenuStoryblok
  )[];
  _uid: string;
  component: 'nav-item';
  [k: string]: any;
}

export interface NavLinkStoryblok {
  title?: string;
  isNew?: boolean;
  link: MultilinkStoryblok;
  _uid: string;
  component: 'nav-link';
  [k: string]: any;
}

export interface NewHeaderStoryblok {
  items: (NavItemStoryblok | NavLinkStoryblok)[];
  ctas: (LinkStoryblok | ButtonLinkStoryblok)[];
  _uid: string;
  component: 'new-header';
  [k: string]: any;
}

export interface NewHeaderV2Storyblok {
  items: (NavItemStoryblok | NavLinkStoryblok)[];
  ctas: (LinkStoryblok | ButtonLinkStoryblok)[];
  _uid: string;
  component: 'new-header-v2';
  [k: string]: any;
}

export interface NewsletterSectionStoryblok {
  label?: string;
  title: string;
  is_highlight?: boolean;
  _uid: string;
  component: 'newsletter-section';
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AgentsHeroStoryblok
    | AgentsHeroV2Storyblok
    | AwardsSectionStoryblok
    | BlogAnnouncementSidebarCardStoryblok
    | BreadcumbsStoryblok
    | CardStoryblok
    | CenterStaticBannerV03Storyblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | ChatIntegrationStoryblok
    | ChatIntegrationsStoryblok
    | CometCreditsSectionStoryblok
    | ConnectedStepStoryblok
    | ConnectedStepsStoryblok
    | CoreFeaturesPricingSectionStoryblok
    | CustomersHeroStoryblok
    | CustomersHeroAnimatedStoryblok
    | CustomerStatsStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | EmptyspaceStoryblok
    | FaqSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesAtGlanceSectionStoryblok
    | FeaturesAutoScrollSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | FeaturesWithNavbarSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HeroFormStoryblok
    | HeroFormV2Storyblok
    | HomepageHeroStoryblok
    | ImageCarousalStoryblok
    | ImageOnlyStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | ImplementationSectionV3Storyblok
    | InDepthAnalyticsSectionStoryblok
    | IndustryCarouselStoryblok
    | IndustryCarouselItemStoryblok
    | InfrastructureSectionStoryblok
    | IpadIframeStoryblok
    | LegalHeroStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MediaTabsSectionStoryblok
    | MediaWithListSectionStoryblok
    | MetricsStoryblok
    | ModerationFeatureCardStoryblok
    | ModerationFeatureCardsRowStoryblok
    | ModerationFeaturesStoryblok
    | ModerationFeaturesSectionStoryblok
    | NewsletterSectionStoryblok
    | PathSelectorStoryblok
    | PathSelectorsStoryblok
    | PlatformSectionStoryblok
    | PopupStoryblok
    | PreFooterStoryblok
    | PricingBetaHeroStoryblok
    | PricingCardsStoryblok
    | PricingHeroStoryblok
    | PricingHeroEnhancementsStoryblok
    | PricingHeroQ3Y24Storyblok
    | PricingHeroQ3Y24CardStoryblok
    | PricingHeroQ3Y24CardV1Storyblok
    | PricingHeroRevampStoryblok
    | PricingPayAsYouGoHighlightsStoryblok
    | PricingPlanGrowSegmentStoryblok
    | PricingTableStoryblok
    | PricingTableCategoryEnhancedStoryblok
    | PricingTableEnhancedStoryblok
    | PricingTableGroupLineRevampStoryblok
    | PricingTableGroupRevampStoryblok
    | PricingTableHeaderColumnRevampStoryblok
    | PricingTableQ3Y24Storyblok
    | PricingTableQ3Y24V2Storyblok
    | PricingTableRevampStoryblok
    | PricingTableSectionStoryblok
    | PricingTitleQ3Y24Storyblok
    | RelatedBlogsStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SharedServiceCardStoryblok
    | SidebarSlotStoryblok
    | SideStaticBannerStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TechnologyHeroCopyStoryblok
    | TemplatesSidebarStoryblok
    | TestimonialSectionStoryblok
    | TitleBlockStoryblok
    | TitleBlockLeftStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleImageSectionV2Storyblok
    | TitleMediaSectionStoryblok
    | TitleSectionStoryblok
    | TitleWithCtaStoryblok
    | TitlleAndGradientTextStoryblok
    | ValueAndDescriptionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  images?: (
    | AgentsHeroStoryblok
    | AgentsHeroV2Storyblok
    | AwardsSectionStoryblok
    | BlogAnnouncementSidebarCardStoryblok
    | BreadcumbsStoryblok
    | CardStoryblok
    | CenterStaticBannerV03Storyblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | ChatIntegrationStoryblok
    | ChatIntegrationsStoryblok
    | CometCreditsSectionStoryblok
    | ConnectedStepStoryblok
    | ConnectedStepsStoryblok
    | CoreFeaturesPricingSectionStoryblok
    | CustomersHeroStoryblok
    | CustomersHeroAnimatedStoryblok
    | CustomerStatsStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | EmptyspaceStoryblok
    | FaqSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesAtGlanceSectionStoryblok
    | FeaturesAutoScrollSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | FeaturesWithNavbarSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HeroFormStoryblok
    | HeroFormV2Storyblok
    | HomepageHeroStoryblok
    | ImageCarousalStoryblok
    | ImageOnlyStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | ImplementationSectionV3Storyblok
    | InDepthAnalyticsSectionStoryblok
    | IndustryCarouselStoryblok
    | IndustryCarouselItemStoryblok
    | InfrastructureSectionStoryblok
    | IpadIframeStoryblok
    | LegalHeroStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MediaTabsSectionStoryblok
    | MediaWithListSectionStoryblok
    | MetricsStoryblok
    | ModerationFeatureCardStoryblok
    | ModerationFeatureCardsRowStoryblok
    | ModerationFeaturesStoryblok
    | ModerationFeaturesSectionStoryblok
    | NewsletterSectionStoryblok
    | PathSelectorStoryblok
    | PathSelectorsStoryblok
    | PlatformSectionStoryblok
    | PopupStoryblok
    | PreFooterStoryblok
    | PricingBetaHeroStoryblok
    | PricingCardsStoryblok
    | PricingHeroStoryblok
    | PricingHeroEnhancementsStoryblok
    | PricingHeroQ3Y24Storyblok
    | PricingHeroQ3Y24CardStoryblok
    | PricingHeroQ3Y24CardV1Storyblok
    | PricingHeroRevampStoryblok
    | PricingPayAsYouGoHighlightsStoryblok
    | PricingPlanGrowSegmentStoryblok
    | PricingTableStoryblok
    | PricingTableCategoryEnhancedStoryblok
    | PricingTableEnhancedStoryblok
    | PricingTableGroupLineRevampStoryblok
    | PricingTableGroupRevampStoryblok
    | PricingTableHeaderColumnRevampStoryblok
    | PricingTableQ3Y24Storyblok
    | PricingTableQ3Y24V2Storyblok
    | PricingTableRevampStoryblok
    | PricingTableSectionStoryblok
    | PricingTitleQ3Y24Storyblok
    | RelatedBlogsStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SharedServiceCardStoryblok
    | SidebarSlotStoryblok
    | SideStaticBannerStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TechnologyHeroCopyStoryblok
    | TemplatesSidebarStoryblok
    | TestimonialSectionStoryblok
    | TitleBlockStoryblok
    | TitleBlockLeftStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleImageSectionV2Storyblok
    | TitleMediaSectionStoryblok
    | TitleSectionStoryblok
    | TitleWithCtaStoryblok
    | TitlleAndGradientTextStoryblok
    | ValueAndDescriptionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo?: SeoFieldsStoryblok[];
  popup?: any[];
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface PanelItemStoryblok {
  icon?: number | string;
  accent_colour?: '' | 'brand' | 'orange';
  title?: string;
  description?: RichtextStoryblok;
  list?: BulletPointStoryblok[];
  link?: LinkStoryblok[];
  _uid: string;
  component: 'panel-item';
  [k: string]: any;
}

export interface ParagraphHeadingStoryblok {
  label?: string;
  heading: string;
  _uid: string;
  component: 'paragraph-heading';
  [k: string]: any;
}

export interface ParagraphListStoryblok {
  items: ParagraphListItemStoryblok[];
  is_numeric?: boolean;
  _uid: string;
  component: 'paragraph-list';
  [k: string]: any;
}

export interface ParagraphListItemStoryblok {
  title?: string;
  description?: RichtextStoryblok;
  _uid: string;
  component: 'paragraph-list-item';
  [k: string]: any;
}

export interface PathSelectorStoryblok {
  title?: string;
  bullets?: SimpleTextStoryblok[];
  icon_key?: ('' | 'byobIcon' | 'cometchatIcon')[];
  image?: AssetStoryblok;
  _uid: string;
  component: 'path-selector';
  [k: string]: any;
}

export interface PathSelectorsStoryblok {
  cards?: PathSelectorStoryblok[];
  _uid: string;
  component: 'path-selectors';
  [k: string]: any;
}

export interface PlatformSectionStoryblok {
  theme?: '' | 'light' | 'dark';
  background?: '' | 'gray' | 'white';
  title?: TitleStoryblok[];
  products: ProductDisplayItemStoryblok[];
  _uid: string;
  component: 'platform-section';
  [k: string]: any;
}

export interface PopupStoryblok {
  Image?: string;
  title?: string;
  brief?: string;
  form?: any[];
  cta?: any[];
  close_text?: string;
  _uid: string;
  component: 'Popup';
  [k: string]: any;
}

export interface PreFooterStoryblok {
  title?: string;
  description?: string;
  call_to_action?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'pre-footer';
  [k: string]: any;
}

export interface PreFooter2Storyblok {
  heading?: string;
  subheading?: string;
  primary_button_text?: string;
  primary_button_link?: MultilinkStoryblok;
  secondary_button_text?: string;
  secondary_button_link?: MultilinkStoryblok;
  _uid: string;
  component: 'pre-footer-2';
  [k: string]: any;
}

export interface PricingStoryblok {
  body?: (
    | AgentsHeroStoryblok
    | AgentsHeroV2Storyblok
    | AwardsSectionStoryblok
    | BlogAnnouncementSidebarCardStoryblok
    | BreadcumbsStoryblok
    | CardStoryblok
    | CenterStaticBannerV03Storyblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | ChatIntegrationStoryblok
    | ChatIntegrationsStoryblok
    | CometCreditsSectionStoryblok
    | ConnectedStepStoryblok
    | ConnectedStepsStoryblok
    | CoreFeaturesPricingSectionStoryblok
    | CustomersHeroStoryblok
    | CustomersHeroAnimatedStoryblok
    | CustomerStatsStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | EmptyspaceStoryblok
    | FaqSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesAtGlanceSectionStoryblok
    | FeaturesAutoScrollSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | FeaturesWithNavbarSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HeroFormStoryblok
    | HeroFormV2Storyblok
    | HomepageHeroStoryblok
    | ImageCarousalStoryblok
    | ImageOnlyStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | ImplementationSectionV3Storyblok
    | InDepthAnalyticsSectionStoryblok
    | IndustryCarouselStoryblok
    | IndustryCarouselItemStoryblok
    | InfrastructureSectionStoryblok
    | IpadIframeStoryblok
    | LegalHeroStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MediaTabsSectionStoryblok
    | MediaWithListSectionStoryblok
    | MetricsStoryblok
    | ModerationFeatureCardStoryblok
    | ModerationFeatureCardsRowStoryblok
    | ModerationFeaturesStoryblok
    | ModerationFeaturesSectionStoryblok
    | NewsletterSectionStoryblok
    | PathSelectorStoryblok
    | PathSelectorsStoryblok
    | PlatformSectionStoryblok
    | PopupStoryblok
    | PreFooterStoryblok
    | PricingBetaHeroStoryblok
    | PricingCardsStoryblok
    | PricingHeroStoryblok
    | PricingHeroEnhancementsStoryblok
    | PricingHeroQ3Y24Storyblok
    | PricingHeroQ3Y24CardStoryblok
    | PricingHeroQ3Y24CardV1Storyblok
    | PricingHeroRevampStoryblok
    | PricingPayAsYouGoHighlightsStoryblok
    | PricingPlanGrowSegmentStoryblok
    | PricingTableStoryblok
    | PricingTableCategoryEnhancedStoryblok
    | PricingTableEnhancedStoryblok
    | PricingTableGroupLineRevampStoryblok
    | PricingTableGroupRevampStoryblok
    | PricingTableHeaderColumnRevampStoryblok
    | PricingTableQ3Y24Storyblok
    | PricingTableQ3Y24V2Storyblok
    | PricingTableRevampStoryblok
    | PricingTableSectionStoryblok
    | PricingTitleQ3Y24Storyblok
    | RelatedBlogsStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SharedServiceCardStoryblok
    | SidebarSlotStoryblok
    | SideStaticBannerStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TechnologyHeroCopyStoryblok
    | TemplatesSidebarStoryblok
    | TestimonialSectionStoryblok
    | TitleBlockStoryblok
    | TitleBlockLeftStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleImageSectionV2Storyblok
    | TitleMediaSectionStoryblok
    | TitleSectionStoryblok
    | TitleWithCtaStoryblok
    | TitlleAndGradientTextStoryblok
    | ValueAndDescriptionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  _uid: string;
  component: 'pricing';
  [k: string]: any;
}

export interface PricingBetaHeroStoryblok {
  title: string;
  description: string;
  info_items?: PricingHeroInfoItemStoryblok[];
  pricing_beta_plans: PricingBetaHeroPlansStoryblok[];
  _uid: string;
  component: 'pricing-beta-hero';
  [k: string]: any;
}

export interface PricingBetaHeroPlansStoryblok {
  title: string;
  description: string;
  cta: ButtonLinkStoryblok[];
  plans?: (
    | StoryblokStory<PricingPlanBetaStoryblok>
    | StoryblokStory<PricingBetaPlanStoryblok>
    | string
  )[];
  _uid: string;
  component: 'pricing-beta-hero-plans';
  [k: string]: any;
}

export interface PricingBetaPlanStoryblok {
  name: string;
  price_label: string;
  price: number;
  highlights: TextStoryblok[];
  cta: ButtonLinkStoryblok[];
  _uid: string;
  component: 'pricing-beta-plan';
  [k: string]: any;
}

export interface PricingCardsStoryblok {
  category1: PricingHeroQ3Y24CardV1Storyblok[];
  category2: any[];
  _uid: string;
  component: 'pricing-cards';
  [k: string]: any;
}

export interface PricingHeroStoryblok {
  title: string;
  description: string;
  info_items?: PricingHeroInfoItemStoryblok[];
  monthly_discount?: number;
  yearly_discount?: number;
  monthly_price_label?: string;
  yearly_price_label?: string;
  pricing_plans: (StoryblokStory<PricingPlanStoryblok> | string)[];
  _uid: string;
  component: 'pricing-hero';
  [k: string]: any;
}

export interface PricingHeroEnhancementsStoryblok {
  title: string;
  description: string;
  info_items?: PricingHeroInfoItemStoryblok[];
  chat_and_messaging_plans: (
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementGrowStoryblok
    | PricingPlanEnhancementScaleStoryblok
  )[];
  voice_and_video_plans?: (
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementPayAsYouGoStoryblok
    | PricingPlanEnhancementContactUsStoryblok
  )[];
  chat_and_messaging: string;
  voice_and_video_calling: string;
  _uid: string;
  component: 'pricing-hero-enhancements';
  [k: string]: any;
}

export interface PricingHeroInfoItemStoryblok {
  icon?: number | string;
  name: string;
  description?: string;
  _uid: string;
  component: 'pricing-hero-info-item';
  [k: string]: any;
}

export interface PricingHeroQ3Y24Storyblok {
  header?: PricingTitleQ3Y24Storyblok[];
  title?: string;
  description?: RichtextStoryblok;
  mau: PricingMauStoryblok[];
  cards: PricingCardsStoryblok[];
  button: ButtonLinkStoryblok[];
  info_items?: PricingHeroInfoItemStoryblok[];
  category1: string;
  category2: string;
  custom_label?: string;
  _uid: string;
  component: 'pricing-hero-Q3Y24';
  [k: string]: any;
}

export interface PricingHeroQ3Y24CardStoryblok {
  tag?: string;
  name: string;
  description?: RichtextStoryblok;
  custom_price?: string;
  cta: ButtonLinkStoryblok[];
  highlights?: TextStoryblok[];
  advantage?: TextStoryblok[];
  _uid: string;
  component: 'pricing-hero-Q3Y24-card';
  [k: string]: any;
}

export interface PricingHeroQ3Y24CardV1Storyblok {
  tag?: string;
  name: string;
  description?: RichtextStoryblok;
  custom_price?: string;
  cta: ButtonLinkStoryblok[];
  highlights?: PricingHighligtsQ3Y24Storyblok[];
  custom_label?: string;
  _uid: string;
  component: 'pricing-hero-Q3Y24-cardV1';
  [k: string]: any;
}

export interface PricingHeroRevampStoryblok {
  implementation_services?: string;
  support_services?: string;
  title: string;
  description: string;
  implementation_services_plans?: (
    | PricingPlanEnhancementFreeStoryblok
    | PricingPlanEnhancementGrowStoryblok
    | PricingPlanEnhancementScaleStoryblok
  )[];
  support_services_plans?: any[];
  _uid: string;
  component: 'pricing-hero-revamp';
  [k: string]: any;
}

export interface PricingHighligtsQ3Y24Storyblok {
  title?: string;
  highlights1?: TextStoryblok[];
  highlights2?: TextStoryblok[];
  _uid: string;
  component: 'pricing-highligts-Q3Y24';
  [k: string]: any;
}

export interface PricingMauStoryblok {
  mau?: TableStoryblok;
  _uid: string;
  component: 'pricing-mau';
  [k: string]: any;
}

export interface PricingPayAsYouGoHighlightsStoryblok {
  price?: string;
  services?: string;
  _uid: string;
  component: 'pricing-pay-as-you-go-highlights';
  [k: string]: any;
}

export interface PricingPlanStoryblok {
  name: string;
  highlights: TextStoryblok[];
  cta: ButtonLinkStoryblok[];
  month_one_k_price: string;
  month_ten_k_price: string;
  month_twentyfive_k_price: string;
  month_fifty_k_price: string;
  month_fifty_k_plus_price: string;
  year_one_k_price: string;
  year_ten_k_price: string;
  year_twentyfive_k_price: string;
  year_fifty_k_price: string;
  year_fifty_k_plus_price: string;
  _uid: string;
  component: 'pricing-plan';
  [k: string]: any;
}

export interface PricingPlanEnhancementContactUsStoryblok {
  name: string;
  description?: string;
  highlights?: TextStoryblok[];
  cta: ButtonLinkStoryblok[];
  _uid: string;
  component: 'pricing-plan-enhancement-contact-us';
  [k: string]: any;
}

export interface PricingPlanEnhancementFreeStoryblok {
  name: string;
  description?: RichtextStoryblok;
  price?: string;
  highlights?: TextStoryblok[];
  cta?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'pricing-plan-enhancement-free';
  [k: string]: any;
}

export interface PricingPlanEnhancementGrowStoryblok {
  name: string;
  description?: string;
  price?: string;
  mau?: TextStoryblok[];
  highlights: TextStoryblok[];
  cta: ButtonLinkStoryblok[];
  plans?: PricingPlanGrowSegmentStoryblok[];
  _uid: string;
  component: 'pricing-plan-enhancement-grow';
  [k: string]: any;
}

export interface PricingPlanEnhancementPayAsYouGoStoryblok {
  name: string;
  description?: string;
  highlights: (TextStoryblok | PricingPayAsYouGoHighlightsStoryblok)[];
  cta: ButtonLinkStoryblok[];
  _uid: string;
  component: 'pricing-plan-enhancement-pay-as-you-go';
  [k: string]: any;
}

export interface PricingPlanEnhancementScaleStoryblok {
  name: string;
  description?: string;
  price?: string;
  highlights: TextStoryblok[];
  cta: ButtonLinkStoryblok[];
  _uid: string;
  component: 'pricing-plan-enhancement-scale';
  [k: string]: any;
}

export interface PricingPlanGrowSegmentStoryblok {
  monthly: string;
  yearly: string;
  mau?: string;
  _uid: string;
  component: 'pricing-plan-grow-segment';
  [k: string]: any;
}

export interface PricingTableStoryblok {
  header: PricingTableHeaderColumnStoryblok[];
  data: PricingTableGroupStoryblok[];
  _uid: string;
  component: 'pricing-table';
  [k: string]: any;
}

export interface PricingTableCategoryEnhancedStoryblok {
  title?: string;
  category?: PricingTableEnhancedStoryblok[];
  _uid: string;
  component: 'pricing-table-category-enhanced';
  [k: string]: any;
}

export interface PricingTableEnhancedStoryblok {
  header: PricingTableHeaderEnhancedStoryblok[];
  data: PricingTableGroupEnhancedStoryblok[];
  _uid: string;
  component: 'pricing-table-enhanced';
  [k: string]: any;
}

export interface PricingTableGroupStoryblok {
  title: string;
  lines: PricingTableGroupLineStoryblok[];
  _uid: string;
  component: 'pricing-table-group';
  [k: string]: any;
}

export interface PricingTableGroupEnhancedStoryblok {
  title: string;
  subgroup?: PricingTableSubgroupEnhancedStoryblok[];
  _uid: string;
  component: 'pricing-table-group-enhanced';
  [k: string]: any;
}

export interface PricingTableGroupLineStoryblok {
  name: string;
  essentials?: '' | 'none' | 'included' | 'paid-add-on';
  pro?: '' | 'none' | 'included' | 'paid-add-on';
  enterprise?: '' | 'none' | 'included' | 'paid-add-on';
  _uid: string;
  component: 'pricing-table-group-line';
  [k: string]: any;
}

export interface PricingTableGroupLineEnhancedStoryblok {
  name: RichtextStoryblok;
  tooltip?: string;
  grow?: string;
  scale?: string;
  _uid: string;
  component: 'pricing-table-group-line-enhanced';
  [k: string]: any;
}

export interface PricingTableGroupLineRevampStoryblok {
  name?: string;
  tooltip?: string;
  basic?: string;
  advanced?: string;
  premium?: string;
  _uid: string;
  component: 'pricing-table-group-line-revamp';
  [k: string]: any;
}

export interface PricingTableGroupQ3Y24Storyblok {
  title?: string;
  subgroup?: (PricingTableSubgroupQ3Y24Storyblok | PricingTableLineQ3Y24Storyblok)[];
  _uid: string;
  component: 'pricing-table-group-Q3Y24';
  [k: string]: any;
}

export interface PricingTableGroupRevampStoryblok {
  title?: string;
  lines?: PricingTableGroupLineRevampStoryblok[];
  _uid: string;
  component: 'pricing-table-group-revamp';
  [k: string]: any;
}

export interface PricingTableHeaderStoryblok {
  _uid: string;
  component: 'pricing-table-header';
  [k: string]: any;
}

export interface PricingTableHeaderColumnStoryblok {
  title: string;
  description?: string;
  _uid: string;
  component: 'pricing-table-header-column';
  [k: string]: any;
}

export interface PricingTableHeaderColumnRevampStoryblok {
  title?: string;
  description?: string;
  _uid: string;
  component: 'pricing-table-header-column-revamp';
  [k: string]: any;
}

export interface PricingTableHeaderEnhancedStoryblok {
  title: string;
  description?: string;
  _uid: string;
  component: 'pricing-table-header-enhanced';
  [k: string]: any;
}

export interface PricingTableLineQ3Y24Storyblok {
  name_and_description: string;
  build: string;
  basic: string;
  advanced: string;
  enterprise: string;
  _uid: string;
  component: 'pricing-table-line-Q3Y24';
  [k: string]: any;
}

export interface PricingTableQ3Y24Storyblok {
  title?: TitleSectionStoryblok[];
  collapsed_items_count?: number;
  data: PricingTableGroupQ3Y24Storyblok[];
  _uid: string;
  component: 'pricing-table-Q3Y24';
  [k: string]: any;
}

export interface PricingTableQ3Y24V2Storyblok {
  title?: TitleSectionStoryblok[];
  data: PricingTableGroupQ3Y24Storyblok[];
  _uid: string;
  component: 'pricing-table-Q3Y24-V2';
  [k: string]: any;
}

export interface PricingTableRevampStoryblok {
  header: PricingTableHeaderColumnRevampStoryblok[];
  data: PricingTableGroupRevampStoryblok[];
  _uid: string;
  component: 'pricing-table-revamp';
  [k: string]: any;
}

export interface PricingTableSectionStoryblok {
  pricing_table?: (PricingTableCategoryEnhancedStoryblok | PricingTableRevampStoryblok)[];
  _uid: string;
  component: 'pricing-table-section';
  [k: string]: any;
}

export interface PricingTableSubgroupEnhancedStoryblok {
  title: string;
  lines: PricingTableGroupLineEnhancedStoryblok[];
  _uid: string;
  component: 'pricing-table-subgroup-enhanced';
  [k: string]: any;
}

export interface PricingTableSubgroupQ3Y24Storyblok {
  title: string;
  lines: PricingTableLineQ3Y24Storyblok[];
  _uid: string;
  component: 'pricing-table-subgroup-Q3Y24';
  [k: string]: any;
}

export interface PricingTitleQ3Y24Storyblok {
  title?: string;
  description?: RichtextStoryblok;
  _uid: string;
  component: 'pricing-title-Q3Y24';
  [k: string]: any;
}

export interface ProductDisplayItemStoryblok {
  image: AssetStoryblok;
  title: string;
  description: string;
  link?: LinkStoryblok[];
  mobile_text?: string;
  _uid: string;
  component: 'product-display-item';
  [k: string]: any;
}

export interface RelatedBlogsStoryblok {
  heading?: string;
  blogs?: RelatedBlogsLinkBlockStoryblok[];
  _uid: string;
  component: 'related-blogs';
  [k: string]: any;
}

export interface RelatedBlogsLinkBlockStoryblok {
  name?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'related-blogs-link-block';
  [k: string]: any;
}

export interface RelatedStoriesSectionStoryblok {
  header: TitleStoryblok[];
  title_alignment?: '' | 'left' | 'center';
  items: (StoryblokStory<TemplatesStoryblok> | string)[];
  _uid: string;
  component: 'related-stories-section';
  [k: string]: any;
}

export interface RelatedTemplatesStoryblok {
  title?: string;
  description?: string;
  templates: (StoryblokStory<PageStoryblok> | string)[];
  _uid: string;
  component: 'related_templates';
  [k: string]: any;
}

export interface ResourcesHeroStoryblok {
  title: string;
  description: string;
  _uid: string;
  component: 'resources-hero';
  [k: string]: any;
}

export interface RichTextSectionStoryblok {
  has_sidebar?: boolean;
  body?: RichtextStoryblok;
  _uid: string;
  component: 'rich-text-section';
  [k: string]: any;
}

export interface RobotStoryblok {
  name: string;
  content: string;
  _uid: string;
  component: 'robot';
  [k: string]: any;
}

export interface RollerPointStoryblok {
  icon: number | string;
  title: string;
  description: string;
  link: MultilinkStoryblok;
  image: AssetStoryblok;
  points: SimpleTextStoryblok[];
  _uid: string;
  component: 'roller_point';
  [k: string]: any;
}

export interface SecureAwardStoryblok {
  title?: string;
  imgs?: SecureAwardImgStoryblok[];
  _uid: string;
  component: 'secure_award';
  [k: string]: any;
}

export interface SecureAwardImgStoryblok {
  img?: AssetStoryblok;
  _uid: string;
  component: 'secure_award_img';
  [k: string]: any;
}

export interface SecureCardStoryblok {
  title?: string;
  subtitle?: string;
  image?: AssetStoryblok;
  colSpan?: number;
  rowSpan?: number;
  circlePos?: ('' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight')[];
  _uid: string;
  component: 'secure_card';
  [k: string]: any;
}

export interface SecureNetworkStoryblok {
  title?: string;
  description?: string;
  _uid: string;
  component: 'secure_network';
  [k: string]: any;
}

export interface SecureReachStoryblok {
  icon?: AssetStoryblok;
  title?: string;
  description?: string;
  _uid: string;
  component: 'secure_reach';
  [k: string]: any;
}

export interface SecureSectionStoryblok {
  cards?: SecureCardStoryblok[];
  _uid: string;
  component: 'secure-section';
  [k: string]: any;
}

export interface SeoFieldsStoryblok {
  title?: string;
  description?: string;
  og_image?: AssetStoryblok;
  canonical_url?: string;
  structured_data_markup?: string;
  robots?: RobotStoryblok[];
  href_lang?: HrefLangStoryblok[];
  _uid: string;
  component: 'seo-fields';
  [k: string]: any;
}

export interface SharedServiceStoryblok {
  cards?: SharedServiceCardStoryblok[];
  _uid: string;
  component: 'shared-service';
  [k: string]: any;
}

export interface SharedServiceCardStoryblok {
  icon?: number | string;
  heading?: string;
  subheading?: string;
  link?: string;
  colSpan?: number;
  rowSpan?: number;
  _uid: string;
  component: 'shared-service-card';
  [k: string]: any;
}

export interface SidebarSlotStoryblok {
  _uid: string;
  component: 'sidebar-slot';
  [k: string]: any;
}

export interface SideStaticBannerStoryblok {
  title: string;
  description: string;
  image?: string;
  cta_slot: (ButtonLinkStoryblok | LinkStoryblok)[];
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'side-static-banner';
  [k: string]: any;
}

export interface SimpleAssetStoryblok {
  asset?: AssetStoryblok;
  _uid: string;
  component: 'simple_asset';
  [k: string]: any;
}

export interface SimpleTextStoryblok {
  text?: string;
  _uid: string;
  component: 'simple_text';
  [k: string]: any;
}

export interface SinglePostResourcesPanelStoryblok {
  title: string;
  image: AssetStoryblok;
  link: MultilinkStoryblok;
  date?: string;
  author?: string;
  _uid: string;
  component: 'single-post-resources-panel';
  [k: string]: any;
}

export interface SocialProofsStoryblok {
  title?: string;
  customers?: (StoryblokStory<CustomerStoryblok> | string)[];
  _uid: string;
  component: 'social-proofs';
  [k: string]: any;
}

export interface SolutionsHeroStoryblok {
  solution_type?: StoryblokStory<IndustryStoryblok> | string;
  title: string;
  description: string;
  links: ButtonLinkStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'solutions-hero';
  [k: string]: any;
}

export interface SolutionsSectionStoryblok {
  title: TitleStoryblok[];
  industries: (StoryblokStory<IndustryStoryblok> | string)[];
  solution_cta_label: string;
  redirects_to_old_website?: boolean;
  _uid: string;
  component: 'solutions-section';
  [k: string]: any;
}

export interface SpecialTestimonialStoryblok {
  profile_img?: AssetStoryblok;
  brand_img?: AssetStoryblok;
  name?: string;
  designation?: string;
  description?: string;
  _uid: string;
  component: 'special_testimonial';
  [k: string]: any;
}

export interface SpecialTestimonialsStoryblok {
  tagline?: string;
  title?: string;
  testimonials?: SpecialTestimonialStoryblok[];
  viewmore?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'special_testimonials';
  [k: string]: any;
}

export interface StandardHeroStoryblok {
  title: string;
  description?: string;
  buttons?: ButtonLinkStoryblok[];
  header_alignment: '' | 'left' | 'center';
  image?: AssetStoryblok;
  has_coming_soon_tag?: boolean;
  _uid: string;
  component: 'standard-hero';
  [k: string]: any;
}

export interface SyncedBlockStoryblok {
  synced_block: string;
  _uid: string;
  component: 'synced-block';
  [k: string]: any;
}

export interface SyncedBlockContentStoryblok {
  body?: (
    | AgentsHeroStoryblok
    | AgentsHeroV2Storyblok
    | AwardsSectionStoryblok
    | BlogAnnouncementSidebarCardStoryblok
    | BreadcumbsStoryblok
    | CardStoryblok
    | CenterStaticBannerV03Storyblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | ChatIntegrationStoryblok
    | ChatIntegrationsStoryblok
    | CometCreditsSectionStoryblok
    | ConnectedStepStoryblok
    | ConnectedStepsStoryblok
    | CoreFeaturesPricingSectionStoryblok
    | CustomersHeroStoryblok
    | CustomersHeroAnimatedStoryblok
    | CustomerStatsStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | EmptyspaceStoryblok
    | FaqSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesAtGlanceSectionStoryblok
    | FeaturesAutoScrollSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | FeaturesWithNavbarSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HeroFormStoryblok
    | HeroFormV2Storyblok
    | HomepageHeroStoryblok
    | ImageCarousalStoryblok
    | ImageOnlyStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | ImplementationSectionV3Storyblok
    | InDepthAnalyticsSectionStoryblok
    | IndustryCarouselStoryblok
    | IndustryCarouselItemStoryblok
    | InfrastructureSectionStoryblok
    | IpadIframeStoryblok
    | LegalHeroStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MediaTabsSectionStoryblok
    | MediaWithListSectionStoryblok
    | MetricsStoryblok
    | ModerationFeatureCardStoryblok
    | ModerationFeatureCardsRowStoryblok
    | ModerationFeaturesStoryblok
    | ModerationFeaturesSectionStoryblok
    | NewsletterSectionStoryblok
    | PathSelectorStoryblok
    | PathSelectorsStoryblok
    | PlatformSectionStoryblok
    | PopupStoryblok
    | PreFooterStoryblok
    | PricingBetaHeroStoryblok
    | PricingCardsStoryblok
    | PricingHeroStoryblok
    | PricingHeroEnhancementsStoryblok
    | PricingHeroQ3Y24Storyblok
    | PricingHeroQ3Y24CardStoryblok
    | PricingHeroQ3Y24CardV1Storyblok
    | PricingHeroRevampStoryblok
    | PricingPayAsYouGoHighlightsStoryblok
    | PricingPlanGrowSegmentStoryblok
    | PricingTableStoryblok
    | PricingTableCategoryEnhancedStoryblok
    | PricingTableEnhancedStoryblok
    | PricingTableGroupLineRevampStoryblok
    | PricingTableGroupRevampStoryblok
    | PricingTableHeaderColumnRevampStoryblok
    | PricingTableQ3Y24Storyblok
    | PricingTableQ3Y24V2Storyblok
    | PricingTableRevampStoryblok
    | PricingTableSectionStoryblok
    | PricingTitleQ3Y24Storyblok
    | RelatedBlogsStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SharedServiceCardStoryblok
    | SidebarSlotStoryblok
    | SideStaticBannerStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TechnologyHeroCopyStoryblok
    | TemplatesSidebarStoryblok
    | TestimonialSectionStoryblok
    | TitleBlockStoryblok
    | TitleBlockLeftStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleImageSectionV2Storyblok
    | TitleMediaSectionStoryblok
    | TitleSectionStoryblok
    | TitleWithCtaStoryblok
    | TitlleAndGradientTextStoryblok
    | ValueAndDescriptionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  _uid: string;
  component: 'synced-block-content';
  [k: string]: any;
}

export interface TagStoryblok {
  tag: string;
  _uid: string;
  component: 'tag';
  [k: string]: any;
}

export interface TechnologiesSectionStoryblok {
  header: TitleStoryblok[];
  technologies: (StoryblokStory<TechnologyStoryblok> | string)[];
  _uid: string;
  component: 'technologies-section';
  [k: string]: any;
}

export interface TechnologiesSectionCopyStoryblok {
  header: TitleStoryblok[];
  technologies: TechnologyItemStoryblok[];
  _uid: string;
  component: 'technologies-section_copy';
  [k: string]: any;
}

export interface TechnologyStoryblok {
  short_name: string;
  documentation_link: LinkStoryblok[];
  code_snippet_language?: string;
  code_snippet?: string;
  copy_code_snippet?: string;
  screenshot: AssetStoryblok;
  body: (
    | AgentsHeroStoryblok
    | AgentsHeroV2Storyblok
    | AwardsSectionStoryblok
    | BlogAnnouncementSidebarCardStoryblok
    | BreadcumbsStoryblok
    | CardStoryblok
    | CenterStaticBannerV03Storyblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | ChatIntegrationStoryblok
    | ChatIntegrationsStoryblok
    | CometCreditsSectionStoryblok
    | ConnectedStepStoryblok
    | ConnectedStepsStoryblok
    | CoreFeaturesPricingSectionStoryblok
    | CustomersHeroStoryblok
    | CustomersHeroAnimatedStoryblok
    | CustomerStatsStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | EmptyspaceStoryblok
    | FaqSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesAtGlanceSectionStoryblok
    | FeaturesAutoScrollSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | FeaturesWithNavbarSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HeroFormStoryblok
    | HeroFormV2Storyblok
    | HomepageHeroStoryblok
    | ImageCarousalStoryblok
    | ImageOnlyStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | ImplementationSectionV3Storyblok
    | InDepthAnalyticsSectionStoryblok
    | IndustryCarouselStoryblok
    | IndustryCarouselItemStoryblok
    | InfrastructureSectionStoryblok
    | IpadIframeStoryblok
    | LegalHeroStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MediaTabsSectionStoryblok
    | MediaWithListSectionStoryblok
    | MetricsStoryblok
    | ModerationFeatureCardStoryblok
    | ModerationFeatureCardsRowStoryblok
    | ModerationFeaturesStoryblok
    | ModerationFeaturesSectionStoryblok
    | NewsletterSectionStoryblok
    | PathSelectorStoryblok
    | PathSelectorsStoryblok
    | PlatformSectionStoryblok
    | PopupStoryblok
    | PreFooterStoryblok
    | PricingBetaHeroStoryblok
    | PricingCardsStoryblok
    | PricingHeroStoryblok
    | PricingHeroEnhancementsStoryblok
    | PricingHeroQ3Y24Storyblok
    | PricingHeroQ3Y24CardStoryblok
    | PricingHeroQ3Y24CardV1Storyblok
    | PricingHeroRevampStoryblok
    | PricingPayAsYouGoHighlightsStoryblok
    | PricingPlanGrowSegmentStoryblok
    | PricingTableStoryblok
    | PricingTableCategoryEnhancedStoryblok
    | PricingTableEnhancedStoryblok
    | PricingTableGroupLineRevampStoryblok
    | PricingTableGroupRevampStoryblok
    | PricingTableHeaderColumnRevampStoryblok
    | PricingTableQ3Y24Storyblok
    | PricingTableQ3Y24V2Storyblok
    | PricingTableRevampStoryblok
    | PricingTableSectionStoryblok
    | PricingTitleQ3Y24Storyblok
    | RelatedBlogsStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SharedServiceCardStoryblok
    | SidebarSlotStoryblok
    | SideStaticBannerStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TechnologyHeroCopyStoryblok
    | TemplatesSidebarStoryblok
    | TestimonialSectionStoryblok
    | TitleBlockStoryblok
    | TitleBlockLeftStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleImageSectionV2Storyblok
    | TitleMediaSectionStoryblok
    | TitleSectionStoryblok
    | TitleWithCtaStoryblok
    | TitlleAndGradientTextStoryblok
    | ValueAndDescriptionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'technology';
  [k: string]: any;
}

export interface TechnologyHeroStoryblok {
  title: TitleWithIconLabelStoryblok[];
  customers?: SocialProofsStoryblok[];
  _uid: string;
  component: 'technology-hero';
  [k: string]: any;
}

export interface TechnologyHeroCopyStoryblok {
  title: TitleWithIconLabelStoryblok[];
  _uid: string;
  component: 'technology-hero_copy';
  [k: string]: any;
}

export interface TechnologyItemStoryblok {
  icon: number | string;
  name: string;
  _uid: string;
  component: 'technology-item';
  [k: string]: any;
}

export interface TemplatesStoryblok {
  sidebar_slot?: any[];
  body?: any[];
  _uid: string;
  component: 'templates';
  [k: string]: any;
}

export interface TemplatesBannerStoryblok {
  title?: string;
  description?: string;
  brands?: SimpleAssetStoryblok[];
  _uid: string;
  component: 'templates_banner';
  [k: string]: any;
}

export interface TemplatesFilterableListingStoryblok {
  title?: string;
  _uid: string;
  component: 'templates_filterable_listing';
  [k: string]: any;
}

export interface TemplatesHeadingStoryblok {
  value: string;
  _uid: string;
  component: 'templates_heading';
  [k: string]: any;
}

export interface TemplatesListingStoryblok {
  title?: string;
  _uid: string;
  component: 'templates_listing';
  [k: string]: any;
}

export interface TemplatesParahStoryblok {
  value: string;
  _uid: string;
  component: 'templates_parah';
  [k: string]: any;
}

export interface TemplatesPlatformSectionStoryblok {
  title?: string;
  description?: string;
  productsColumns?: '' | 'auto' | '1' | '2' | '3';
  products: TemplatesProductDisplayItemStoryblok[];
  _uid: string;
  component: 'templates_platform_section';
  [k: string]: any;
}

export interface TemplatesProductDisplayItemStoryblok {
  title: string;
  description: string;
  media: AssetStoryblok;
  _uid: string;
  component: 'templates_product_display_item';
  [k: string]: any;
}

export interface TemplatesSectionInfoStoryblok {
  title: string;
  description?: string;
  cta?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'templates_section_info';
  [k: string]: any;
}

export interface TemplatesSidebarStoryblok {
  name?: string;
  icon?: AssetStoryblok;
  slug?: MultilinkStoryblok;
  _uid: string;
  component: 'Templates Sidebar';
  [k: string]: any;
}

export interface TemplatesSidebarLinkStoryblok {
  title?: string;
  slug?: MultilinkStoryblok;
  icon?: AssetStoryblok;
  _uid: string;
  component: 'templates-sidebar-link';
  [k: string]: any;
}

export interface TemplatesSidebarLinkStoryblok {
  links?: TemplatesSidebarLinkStoryblok[];
  _uid: string;
  component: 'Templates Sidebar Link';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  quote: string;
  name: string;
  position: string;
  avatar: AssetStoryblok;
  link?: MultilinkStoryblok;
  g2_review?: number;
  _uid: string;
  component: 'testimonial';
  [k: string]: any;
}

export interface TestimonialBlockStoryblok {
  testimonial: string;
  author_name: string;
  author_position: string;
  author_company: string;
  author_image?: AssetStoryblok;
  _uid: string;
  component: 'testimonial-block';
  [k: string]: any;
}

export interface TestimonialSectionStoryblok {
  title: TitleSectionStoryblok[];
  cards: (CardStoryblok | CardCopyStoryblok)[];
  _uid: string;
  component: 'testimonial-section';
  [k: string]: any;
}

export interface TextStoryblok {
  value?: RichtextStoryblok;
  _uid: string;
  component: 'text';
  [k: string]: any;
}

export interface TitleStoryblok {
  label?: string;
  title?: string;
  description?: RichtextStoryblok;
  links?: ButtonLinkStoryblok[];
  size?: '' | 'large' | 'small' | 'verySmall' | 'none';
  _uid: string;
  component: 'title';
  [k: string]: any;
}

export interface TitleAndDescriptionStoryblok {
  title?: string;
  title_size?: '' | 'h1' | 'h2' | 'h3' | 'h4';
  description?: RichtextStoryblok;
  _uid: string;
  component: 'title-and-description';
  [k: string]: any;
}

export interface TitleAndIconsStoryblok {
  title?: string;
  icons?: MultiassetStoryblok;
  _uid: string;
  component: 'title-and-icons';
  [k: string]: any;
}

export interface TitleBlockStoryblok {
  title?: string;
  subtitle?: RichtextStoryblok;
  description?: string;
  _uid: string;
  component: 'title-block';
  [k: string]: any;
}

export interface TitleBlockLeftStoryblok {
  heading?: string;
  subheading?: string;
  description?: string;
  _uid: string;
  component: 'title-block-left';
  [k: string]: any;
}

export interface TitleBlockShortTest2Storyblok {
  theme?: '' | 'dark' | 'light';
  'title-test-2'?: string;
  'header-test-2'?: string;
  'description-2'?: RichtextStoryblok;
  titletest1: TitleStoryblok[];
  _uid: string;
  component: 'title-block-short-test-2';
  [k: string]: any;
}

export interface TitleFeaturesSectionStoryblok {
  theme?: '' | 'light' | 'dark';
  title?: TitleStoryblok[];
  features?: TitleImageSectionStoryblok[];
  _uid: string;
  component: 'title-features-section';
  [k: string]: any;
}

export interface TitleImageSectionStoryblok {
  title: TitleStoryblok[];
  accent_colour?: '' | 'brand' | 'orange';
  list_items?: BulletPointStoryblok[];
  image: AssetStoryblok;
  image_side: '' | 'left' | 'right' | 'center';
  theme: '' | 'light' | 'dark';
  _uid: string;
  component: 'title-image-section';
  [k: string]: any;
}

export interface TitleImageSectionV2Storyblok {
  heading?: string;
  description?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: 'title-image-section-v2';
  [k: string]: any;
}

export interface TitleMediaSectionStoryblok {
  title: TitleStoryblok[];
  accent_colour?: '' | 'brand' | 'orange';
  list_items?: BulletPointStoryblok[];
  media: AssetStoryblok;
  media_side: '' | 'left' | 'right' | 'center';
  theme: '' | 'light' | 'dark';
  _uid: string;
  component: 'title-media-section';
  [k: string]: any;
}

export interface TitleSectionStoryblok {
  theme?: '' | 'dark' | 'light';
  accent_colour?: '' | 'brand' | 'orange';
  alignment?: '' | 'center' | 'left';
  title: TitleStoryblok[];
  _uid: string;
  component: 'title-section';
  [k: string]: any;
}

export interface TitleWithCtaStoryblok {
  title?: string;
  cta?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'title-with-cta';
  [k: string]: any;
}

export interface TitleWithIconLabelStoryblok {
  label_icon?: number | string;
  label?: string;
  title: string;
  description?: string;
  links?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'title-with-icon-label';
  [k: string]: any;
}

export interface TitlleAndGradientTextStoryblok {
  title?: string;
  gradient_title?: string;
  _uid: string;
  component: 'titlle-and-gradient-text';
  [k: string]: any;
}

export interface ToolkitLinkBlockStoryblok {
  name?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'toolkit-link-block';
  [k: string]: any;
}

export interface ToolkitLinksBannerStoryblok {
  title: string;
  links: ToolkitLinkBlockStoryblok[];
  _uid: string;
  component: 'toolkit-links-banner';
  [k: string]: any;
}

export interface TopnavFeaturesPanelStoryblok {
  featured_items: TopnavItemStoryblok[];
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-features-panel';
  [k: string]: any;
}

export interface TopNavigationStoryblok {
  links: (LinkStoryblok | TopnavPanelStoryblok)[];
  call_to_actions: LinkStoryblok[];
  _uid: string;
  component: 'top-navigation';
  [k: string]: any;
}

export interface TopnavItemStoryblok {
  title: string;
  description?: string;
  coming_soon?: boolean;
  link?: MultilinkStoryblok;
  icon?: number | string;
  illustration?: number | string;
  _uid: string;
  component: 'topnav-item';
  [k: string]: any;
}

export interface TopnavItemGroupStoryblok {
  title: string;
  items: TopnavItemStoryblok[];
  _uid: string;
  component: 'topnav-item-group';
  [k: string]: any;
}

export interface TopnavPanelStoryblok {
  title: string;
  panel: (
    | TopnavFeaturesPanelStoryblok
    | TopnavSolutionsPanelStoryblok
    | TopnavTechnologiesPanelStoryblok
    | TopnavResourcesPanelStoryblok
    | TopnavResourcesPanelTemporaryStoryblok
  )[];
  _uid: string;
  component: 'topnav-panel';
  [k: string]: any;
}

export interface TopnavResourcesPanelStoryblok {
  customer_stories_title: string;
  customer_stories: (StoryblokStory<BlogPostStoryblok> | string)[];
  customer_stories_link: LinkStoryblok[];
  blog_title: string;
  blog_posts: (StoryblokStory<BlogPostStoryblok> | string)[];
  blog_link: LinkStoryblok[];
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-resources-panel';
  [k: string]: any;
}

export interface TopnavResourcesPanelTemporaryStoryblok {
  customer_stories_title: string;
  customer_stories: SinglePostResourcesPanelStoryblok[];
  customer_stories_link?: LinkStoryblok[];
  blog_title: string;
  blog_posts: SinglePostResourcesPanelStoryblok[];
  blog_link: LinkStoryblok[];
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-resources-panel-temporary';
  [k: string]: any;
}

export interface TopnavSolutionsPanelStoryblok {
  industries_title: string;
  industries: (StoryblokStory<IndustryStoryblok> | string)[];
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-solutions-panel';
  [k: string]: any;
}

export interface TopnavTechnologiesPanelStoryblok {
  technologies_title: string;
  technologies_links: (StoryblokStory<TechnologyStoryblok> | string)[];
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-technologies-panel';
  [k: string]: any;
}

export interface TutorialStoryblok {
  sidebar_right_slot?: (SideStaticBannerStoryblok | RelatedBlogsStoryblok)[];
  body: RichtextStoryblok;
  related?: RelatedStoriesSectionStoryblok[];
  pre_footer?: (PreFooterCopyStoryblok | SyncedBlockStoryblok)[];
  cover?: AssetStoryblok;
  author?: StoryblokStory<AuthorStoryblok> | string;
  industries?: (number | string)[];
  technology?: (
    | ''
    | 'react-ui-kit'
    | 'angular-ui-kit'
    | 'vue-ui-kit'
    | 'android-java-ui-kit'
    | 'android-sdk'
    | 'ios-sdk'
    | 'android-kotlin-ui-kit'
    | 'ionic'
    | 'javascript-jquery'
    | 'php'
    | 'node-js'
    | 'kotlin'
    | 'react-native'
    | 'react'
    | 'java'
    | 'swift'
  )[];
  tutorial_type?: '' | 'video' | 'text';
  integration_tool?: '' | 'sdk' | 'ui-kits' | 'widget';
  product?: ('' | 'Chat' | 'Voice and Video')[];
  platform?: ('' | 'Android' | 'IOS' | 'Web')[];
  features?: ('' | '1 to 1 chat' | 'Typing indicators' | 'Push Notifications')[];
  language?: ('' | 'Javascript' | 'Kotlin' | 'Java' | 'Swift')[];
  framework?: (
    | ''
    | 'Angular'
    | 'Flutter'
    | 'React'
    | 'Ionic'
    | 'Nextjs'
    | 'Nodejs'
    | 'PHP'
    | 'React Native'
    | 'Vue'
  )[];
  imported_from_old_site?: boolean;
  created_at?: string;
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'tutorial';
  [k: string]: any;
}

export interface TypewriterTextStoryblok {
  entries: TextStoryblok[];
  _uid: string;
  component: 'typewriter-text';
  [k: string]: any;
}

export interface ValueAndDescriptionStoryblok {
  value?: string;
  description?: string;
  _uid: string;
  component: 'value-and-description';
  [k: string]: any;
}

export interface VoiceAndVideoCallsHeroStoryblok {
  header: HeroHeaderStoryblok[];
  items: ImageTitleDescriptionTagsItemStoryblok[];
  customers: SocialProofsStoryblok[];
  _uid: string;
  component: 'voice-and-video-calls-hero';
  [k: string]: any;
}

export interface WebhooksHeroStoryblok {
  title: TitleStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'webhooks-hero';
  [k: string]: any;
}

export interface WebhooksSectionStoryblok {
  title: TitleStoryblok[];
  _uid: string;
  component: 'webhooks-section';
  [k: string]: any;
}

export interface YoutubeVideoStoryblok {
  video_url: string;
  _uid: string;
  component: 'youtube-video';
  [k: string]: any;
}
