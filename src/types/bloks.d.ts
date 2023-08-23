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

export interface AuthorStoryblok {
  name: string;
  role?: string;
  company: string;
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

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface BlogPostStoryblok {
  cover: AssetStoryblok;
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
  related: RelatedStoriesSectionStoryblok[];
  pre_footer?: (PreFooterCopyStoryblok | SyncedBlockStoryblok)[];
  seo?: SeoFieldsStoryblok[];
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

export interface CustomerStoriesSectionStoryblok {
  title: TitleStoryblok[];
  testimonials: (StoryblokStory<TestimonialStoryblok> | string)[];
  _uid: string;
  component: 'customer-stories-section';
  [k: string]: any;
}

export interface CustomerStoryStoryblok {
  cover: AssetStoryblok;
  customer?: StoryblokStory<CustomerStoryblok> | string;
  author?: StoryblokStory<AuthorStoryblok> | string;
  industry: number | string;
  imported_from_old_site?: boolean;
  created_at?: string;
  Quote?: any;
  quote: string;
  metrics: MetricsStoryblok[];
  body: RichtextStoryblok;
  related: RelatedStoriesSectionStoryblok[];
  pre_footer?: PreFooterCopyStoryblok[];
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
  label: string;
  title: string;
  content_type: '' | 'blog-post' | 'customer-story' | 'tutorial';
  _uid: string;
  component: 'directory-section';
  [k: string]: any;
}

export interface DisclaimerStoryblok {
  label: string;
  description: string;
  _uid: string;
  component: 'disclaimer';
  [k: string]: any;
}

export interface DoublePanelSectionStoryblok {
  theme: '' | 'light' | 'dark';
  title?: TitleStoryblok[];
  panels: PanelItemStoryblok[];
  _uid: string;
  component: 'double-panel-section';
  [k: string]: any;
}

export interface FeaturedStorySectionStoryblok {
  theme: '' | 'light' | 'dark';
  featured_story:
    | StoryblokStory<BlogPostStoryblok>
    | StoryblokStory<CustomerStoryStoryblok>
    | StoryblokStory<TutorialStoryblok>
    | string;
  button_label: string;
  _uid: string;
  component: 'featured-story-section';
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

export interface HrefLangStoryblok {
  rel: string;
  href: string;
  hreflang: string;
  _uid: string;
  component: 'href-lang';
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

export interface ImplementationListSectionStoryblok {
  label: string;
  title: string;
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
    | AwardsSectionStoryblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomersHeroStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | InDepthAnalyticsSectionStoryblok
    | InfrastructureSectionStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MetricsStoryblok
    | NewsletterSectionStoryblok
    | PlatformSectionStoryblok
    | PreFooterStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleSectionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'industry';
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
  link?: LinkStoryblok[];
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
    | AwardsSectionStoryblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomersHeroStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | InDepthAnalyticsSectionStoryblok
    | InfrastructureSectionStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MetricsStoryblok
    | NewsletterSectionStoryblok
    | PlatformSectionStoryblok
    | PreFooterStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleSectionStoryblok
    | VoiceAndVideoCallsHeroStoryblok
    | WebhooksHeroStoryblok
    | WebhooksSectionStoryblok
  )[];
  seo?: SeoFieldsStoryblok[];
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface PanelItemStoryblok {
  icon?: number | string;
  accent_colour?: '' | 'brand' | 'orange';
  title: string;
  description?: string;
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

export interface PlatformSectionStoryblok {
  theme?: '' | 'light' | 'dark';
  title: TitleStoryblok[];
  products: ProductDisplayItemStoryblok[];
  _uid: string;
  component: 'platform-section';
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

export interface ProductDisplayItemStoryblok {
  image: AssetStoryblok;
  title: string;
  description: string;
  link?: LinkStoryblok[];
  _uid: string;
  component: 'product-display-item';
  [k: string]: any;
}

export interface RelatedStoriesSectionStoryblok {
  header: TitleStoryblok[];
  title_alignment?: '' | 'left' | 'center';
  items: (
    | StoryblokStory<BlogPostStoryblok>
    | StoryblokStory<CustomerStoryStoryblok>
    | StoryblokStory<TutorialStoryblok>
    | string
  )[];
  _uid: string;
  component: 'related-stories-section';
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
  body: RichtextStoryblok;
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

export interface SeoFieldsStoryblok {
  title?: string;
  description?: string;
  og_image?: AssetStoryblok;
  canonical_url?: string;
  robots?: RobotStoryblok[];
  href_lang?: HrefLangStoryblok[];
  _uid: string;
  component: 'seo-fields';
  [k: string]: any;
}

export interface SinglePostResourcesPanelStoryblok {
  title: string;
  image: AssetStoryblok;
  link: MultilinkStoryblok;
  date: string;
  author: string;
  _uid: string;
  component: 'single-post-resources-panel';
  [k: string]: any;
}

export interface SocialProofsStoryblok {
  title?: string;
  customers: (StoryblokStory<CustomerStoryblok> | string)[];
  _uid: string;
  component: 'social-proofs';
  [k: string]: any;
}

export interface SolutionsHeroStoryblok {
  solution_type: StoryblokStory<IndustryStoryblok> | string;
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
  _uid: string;
  component: 'solutions-section';
  [k: string]: any;
}

export interface StandardHeroStoryblok {
  title: string;
  description?: string;
  buttons?: ButtonLinkStoryblok[];
  header_alignment: '' | 'left' | 'center';
  image?: AssetStoryblok;
  _uid: string;
  component: 'standard-hero';
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
    | AwardsSectionStoryblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomersHeroStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | InDepthAnalyticsSectionStoryblok
    | InfrastructureSectionStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MetricsStoryblok
    | NewsletterSectionStoryblok
    | PlatformSectionStoryblok
    | PreFooterStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleSectionStoryblok
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
  short_name?: string;
  documentation_link: LinkStoryblok[];
  code_snippet_language?: string;
  code_snippet?: string;
  copy_code_snippet?: string;
  screenshot: AssetStoryblok;
  body: (
    | AwardsSectionStoryblok
    | ChatAndMessagingHeroStoryblok
    | ChatFeaturesSectionStoryblok
    | CustomersHeroStoryblok
    | CustomerStoriesSectionStoryblok
    | DevelopersSectionStoryblok
    | DirectorySectionStoryblok
    | DoublePanelSectionStoryblok
    | FeaturedStorySectionStoryblok
    | FeaturesListSectionStoryblok
    | FeaturesSectionStoryblok
    | HeaderAndListSectionStoryblok
    | HomepageHeroStoryblok
    | ImplementationListSectionStoryblok
    | ImplementationSectionStoryblok
    | ImplementationSectionV2Storyblok
    | InDepthAnalyticsSectionStoryblok
    | InfrastructureSectionStoryblok
    | ListSectionStoryblok
    | ListsSectionStoryblok
    | LogoShowcaseStoryblok
    | MetricsStoryblok
    | NewsletterSectionStoryblok
    | PlatformSectionStoryblok
    | PreFooterStoryblok
    | RelatedStoriesSectionStoryblok
    | ResourcesHeroStoryblok
    | RichTextSectionStoryblok
    | SocialProofsStoryblok
    | SolutionsHeroStoryblok
    | SolutionsSectionStoryblok
    | StandardHeroStoryblok
    | SyncedBlockStoryblok
    | TechnologiesSectionStoryblok
    | TechnologiesSectionCopyStoryblok
    | TechnologyHeroStoryblok
    | TitleFeaturesSectionStoryblok
    | TitleImageSectionStoryblok
    | TitleSectionStoryblok
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
  customers: SocialProofsStoryblok[];
  _uid: string;
  component: 'technology-hero';
  [k: string]: any;
}

export interface TechnologyItemStoryblok {
  icon: number | string;
  name: string;
  _uid: string;
  component: 'technology-item';
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

export interface TextStoryblok {
  value: string;
  _uid: string;
  component: 'text';
  [k: string]: any;
}

export interface TitleStoryblok {
  label?: string;
  title: string;
  description?: string;
  links?: ButtonLinkStoryblok[];
  size?: '' | 'large' | 'small';
  _uid: string;
  component: 'title';
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
  image: AssetStoryblok;
  image_side: '' | 'left' | 'right' | 'center';
  theme: '' | 'light' | 'dark';
  _uid: string;
  component: 'title-image-section';
  [k: string]: any;
}

export interface TitleSectionStoryblok {
  title: TitleStoryblok[];
  accent_colour?: '' | 'brand' | 'orange';
  alignment?: '' | 'center' | 'left';
  theme?: '' | 'dark' | 'light';
  _uid: string;
  component: 'title-section';
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
  customer_stories_link: LinkStoryblok[];
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
  cover: AssetStoryblok;
  author?: StoryblokStory<AuthorStoryblok> | string;
  industries?: (number | string)[];
  technology: (
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
  tutorial_type: '' | 'video' | 'text';
  integration_tool: '' | 'sdk' | 'ui-kits' | 'widget';
  imported_from_old_site?: boolean;
  body: RichtextStoryblok;
  related?: RelatedStoriesSectionStoryblok[];
  pre_footer?: (PreFooterCopyStoryblok | SyncedBlockStoryblok)[];
  seo?: SeoFieldsStoryblok[];
  created_at?: string;
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
