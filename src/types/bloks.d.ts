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
  cover?: AssetStoryblok;
  body: TestStoryblok[];
  seo_title?: string;
  seo_description?: string;
  seo_og_image?: AssetStoryblok;
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

export interface CustomerStoryStoryblok {
  cover?: AssetStoryblok;
  logo: AssetStoryblok;
  body?: TestStoryblok[];
  _uid: string;
  component: 'customer-story';
  [k: string]: any;
}

export interface FolderFooterLinkGroupStoryblok {
  title: string;
  folder_path: string;
  _uid: string;
  component: 'folder-footer-link-group';
  [k: string]: any;
}

export interface FooterColumnStoryblok {
  title: string;
  groups: (
    | FolderFooterLinkGroupStoryblok
    | ManualFooterLinkGroupStoryblok
    | TechnologiesFooterLinkGroupStoryblok
  )[];
  _uid: string;
  component: 'footer-column';
  [k: string]: any;
}

export interface FooterConfigurationStoryblok {
  subfooter: any[];
  socials: LinkStoryblok[];
  columns: FooterColumnStoryblok[];
  prefooter_title: string;
  prefooter_description: string;
  prefooter_cta: ButtonLinkStoryblok[];
  _uid: string;
  component: 'Footer Configuration';
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

export interface ManualFooterLinkGroupStoryblok {
  title?: string;
  links: LinkStoryblok[];
  _uid: string;
  component: 'manual-footer-link-group';
  [k: string]: any;
}

export interface PageStoryblok {
  seo_title?: string;
  seo_description?: string;
  body?: TestStoryblok[];
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface TechnologyStoryblok {
  seo_title?: string;
  body: TestStoryblok[];
  seo_description?: string;
  logo: number | string;
  code_snippet?: string;
  screenshot: AssetStoryblok;
  seo_og_image?: AssetStoryblok;
  _uid: string;
  component: 'technology';
  [k: string]: any;
}

export interface TestStoryblok {
  title?: string;
  _uid: string;
  component: 'Test';
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
  component: 'Top Navigation';
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
  title: string;
  groups: TopnavItemGroupStoryblok[];
  _uid: string;
  component: 'topnav-technologies-panel';
  [k: string]: any;
}
