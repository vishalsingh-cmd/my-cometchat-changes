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

export interface BlogPostStoryblok {
  customer?: StoryblokStory<CustomerStoryblok> | string;
  cover?: AssetStoryblok;
  body: (HomepageHeroStoryblok | MetricsStoryblok | PlatformSectionStoryblok)[];
  seo_title?: string;
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
  author: string;
  _uid: string;
  component: 'blog-post';
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

export interface CustomerStoryblok {
  logo: AssetStoryblok;
  body?: (HomepageHeroStoryblok | MetricsStoryblok | PlatformSectionStoryblok)[];
  _uid: string;
  component: 'customer';
  [k: string]: any;
}

export interface FooterStoryblok {
  subfooter: any[];
  socials: LinkStoryblok[];
  columns: FooterColumnStoryblok[];
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

export interface FooterFolderLinkGroupStoryblok {
  title: string;
  folder_path: string;
  _uid: string;
  component: 'footer-folder-link-group';
  [k: string]: any;
}

export interface FooterManualLinkGroupStoryblok {
  title?: string;
  links: any[];
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

export interface HomepageHeroStoryblok {
  title_regular: string;
  title_highlighted: string;
  ghost_button: LinkStoryblok[];
  regular_button: LinkStoryblok[];
  _uid: string;
  component: 'homepage-hero';
  [k: string]: any;
}

export interface IndustryStoryblok {
  body?: (HomepageHeroStoryblok | MetricsStoryblok | PlatformSectionStoryblok)[];
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
  body?: (HomepageHeroStoryblok | MetricsStoryblok | PlatformSectionStoryblok)[];
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'page';
  uuid?: string;
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
  _uid: string;
  component: 'social-proofs';
  [k: string]: any;
}

export interface TechnologyStoryblok {
  documentation_link: LinkStoryblok[];
  code_snippet?: string;
  copy_code_snippet?: string;
  screenshot: AssetStoryblok;
  seo_title?: string;
  body: (HomepageHeroStoryblok | MetricsStoryblok | PlatformSectionStoryblok)[];
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'technology';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  name: string;
  avatar: AssetStoryblok;
  position: string;
  _uid: string;
  component: 'testimonial';
  [k: string]: any;
}

export interface TitleStoryblok {
  label: string;
  title: string;
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
  customer_stories_link: LinkStoryblok[];
  blog_title: string;
  blog_link: LinkStoryblok[];
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-resources-panel';
  [k: string]: any;
}

export interface TopnavSolutionsPanelStoryblok {
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
  cover?: AssetStoryblok;
  body: (HomepageHeroStoryblok | MetricsStoryblok | PlatformSectionStoryblok)[];
  seo_title?: string;
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'tutorial';
  [k: string]: any;
}
