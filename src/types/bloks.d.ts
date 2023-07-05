import { StoryblokStory } from 'storyblok-generate-ts';

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

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface BlogPostStoryblok {
  cover?: AssetStoryblok;
  author: string;
  customer?: StoryblokStory<CustomerStoryblok> | string;
  body: RichtextStoryblok;
  seo_title?: string;
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'blog-post';
  [k: string]: any;
}

export interface BulletPointStoryblok {
  item: string;
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

export interface ButtonLinkStoryblok {
  variant: 'primary' | 'secondary';
  icon?: number | string;
  label: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'button-link';
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

export interface CodeBlockItemStoryblok {
  illustration: AssetStoryblok;
  language_name: string;
  code_snippet_language: string;
  code_snippet_to_show: string;
  code_snippet_to_copy: string;
  _uid: string;
  component: 'code-block-item';
  [k: string]: any;
}

export interface CustomerStoryblok {
  logo: AssetStoryblok;
  industry: StoryblokStory<IndustryStoryblok> | string;
  _uid: string;
  component: 'customer';
  [k: string]: any;
}

export interface CustomerStoriesSectionStoryblok {
  title: TitleStoryblok[];
  testimonials: (StoryblokStory<TestimonialStoryblok> | string)[];
  _uid: string;
  component: 'customer-stories-section';
  [k: string]: any;
}

export interface DevelopersSectionStoryblok {
  header: TitleStoryblok[];
  code_blocks: CodeBlockItemStoryblok[];
  _uid: string;
  component: 'developers-section';
  [k: string]: any;
}

export interface DisclaimerStoryblok {
  label: string;
  description: string;
  _uid: string;
  component: 'disclaimer';
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

export interface FooterStoryblok {
  column_groups: FooterColumnGroupStoryblok[];
  subfooter: any[];
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

export interface HeaderAndListSectionStoryblok {
  header?: TitleStoryblok[];
  items: ListSectionStoryblok[];
  _uid: string;
  component: 'header-and-list-section';
  [k: string]: any;
}

export interface HeaderWithImageStoryblok {
  label: string;
  title: string;
  description: string;
  illustration: AssetStoryblok;
  _uid: string;
  component: 'header-with-image';
  [k: string]: any;
}

export interface HeroHeaderStoryblok {
  title: RichtextStoryblok;
  description?: string;
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

export interface HomepageHeroStoryblok {
  title: RichtextStoryblok;
  links: ButtonLinkStoryblok[];
  illustration: AssetStoryblok;
  _uid: string;
  component: 'homepage-hero';
  [k: string]: any;
}

export interface ImageStoryblok {
  illustration: AssetStoryblok;
  _uid: string;
  component: 'image';
  [k: string]: any;
}

export interface ImageTitleDescriptionTagsItemStoryblok {
  image: AssetStoryblok;
  title: string;
  description: string;
  tags: (TextStoryblok | TagStoryblok)[];
  _uid: string;
  component: 'image-title-description-tags-item';
  [k: string]: any;
}

export interface ImplementationSectionStoryblok {
  header: TitleStoryblok[];
  items: PanelItemStoryblok[];
  _uid: string;
  component: 'implementation-section';
  [k: string]: any;
}

export interface InDepthAnalyticsSectionStoryblok {
  header: TitleStoryblok[];
  _uid: string;
  component: 'in-depth-analytics-section';
  [k: string]: any;
}

export interface IndustryStoryblok {
  cover_image: AssetStoryblok;
  illustration: number | string;
  short_name: string;
  description: string;
  body?: (
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationSectionStoryblok
    | InDepthAnalyticsSectionStoryblok
    | ListSectionStoryblok
    | MetricsStoryblok
    | PlatformSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsSectionStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo_title?: string;
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'industry';
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
  description: string;
  _uid: string;
  component: 'list-item';
  [k: string]: any;
}

export interface ListSectionStoryblok {
  items: ListItemStoryblok[];
  _uid: string;
  component: 'list-section';
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

export interface PageStoryblok {
  seo_title?: string;
  seo_description?: string;
  body?: (
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationSectionStoryblok
    | InDepthAnalyticsSectionStoryblok
    | ListSectionStoryblok
    | MetricsStoryblok
    | PlatformSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsSectionStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface PanelItemStoryblok {
  title: string;
  description: string;
  link: LinkStoryblok[];
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
  title: string;
  description?: string;
  _uid: string;
  component: 'paragraph-list-item';
  [k: string]: any;
}

export interface PlatformSectionStoryblok {
  title: TitleStoryblok[];
  products: ProductDisplayItemStoryblok[];
  _uid: string;
  component: 'platform-section';
  [k: string]: any;
}

export interface ProductDisplayItemStoryblok {
  image: AssetStoryblok;
  title: string;
  description: string;
  link: LinkStoryblok[];
  _uid: string;
  component: 'product-display-item';
  [k: string]: any;
}

export interface SocialProofsStoryblok {
  title: string;
  customers: (StoryblokStory<CustomerStoryblok> | string)[];
  _uid: string;
  component: 'social-proofs';
  [k: string]: any;
}

export interface SolutionsSectionStoryblok {
  title: TitleStoryblok[];
  industries: (StoryblokStory<IndustryStoryblok> | string)[];
  solution_cta_label: string;
  _uid: string;
  component: 'solutions-section';
  [k: string]: any;
}

export interface SyncedBlockStoryblok {
  synced_block: StoryblokStory<SyncedBlockContentStoryblok> | string;
  _uid: string;
  component: 'synced-block';
  [k: string]: any;
}

export interface SyncedBlockContentStoryblok {
  body?: (
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationSectionStoryblok
    | InDepthAnalyticsSectionStoryblok
    | ListSectionStoryblok
    | MetricsStoryblok
    | PlatformSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsSectionStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
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

export interface TechnologyStoryblok {
  short_name?: string;
  documentation_link: LinkStoryblok[];
  code_snippet_language?: string;
  code_snippet?: string;
  copy_code_snippet?: string;
  screenshot: AssetStoryblok;
  body: (
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationSectionStoryblok
    | InDepthAnalyticsSectionStoryblok
    | ListSectionStoryblok
    | MetricsStoryblok
    | PlatformSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsSectionStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo_title?: string;
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'technology';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  quote: string;
  name: string;
  position: string;
  avatar: AssetStoryblok;
  link?: MultilinkStoryblok;
  _uid: string;
  component: 'testimonial';
  [k: string]: any;
}

export interface TestimonialBlockStoryblok {
  testimonial: string;
  author_name: string;
  author_position: string;
  author_company: string;
  author_image: AssetStoryblok;
  _uid: string;
  component: 'testimonial-block';
  [k: string]: any;
}

export interface TitleStoryblok {
  label: string;
  title: string;
  description?: string;
  links?: ButtonLinkStoryblok[];
  _uid: string;
  component: 'title';
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
  link: MultilinkStoryblok;
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

export interface VoiceAndVideoCallsHeroStoryblok {
  header: HeroHeaderStoryblok[];
  items: ImageTitleDescriptionTagsItemStoryblok[];
  customers: SocialProofsStoryblok[];
  _uid: string;
  component: 'voice-and-video-calls-hero';
  [k: string]: any;
}

export interface WebhooksSectionStoryblok {
  title: TitleStoryblok[];
  _uid: string;
  component: 'webhooks-section';
  [k: string]: any;
}
