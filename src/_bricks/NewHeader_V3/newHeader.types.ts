import type {
  AssetStoryblok,
  ButtonLinkStoryblok,
  LinkStoryblok,
  MultilinkStoryblok
} from '$src/types/bloks';

/* -------------------------- nav-feature-big-cards ------------------------- */
export interface NavFeatureBigCardProps {
  title: string;
  image: AssetStoryblok;
  link: MultilinkStoryblok;

  component: 'nav-feature-big-card';
  _uid: string;
}

export interface NavFeatureBigCardsProps {
  title: string;
  cards: NavFeatureBigCardProps[];
  see_all_card: NavFeatureBigCardProps[];

  component: 'nav-feature-big-cards';
  _uid: string;
}

/* --------------------------- nav-feature-cards --------------------------- */
export interface NavFeatureCardProps {
  isNew?: boolean;
  title: string;
  description: string;
  icon: string;
  link: MultilinkStoryblok;

  component: 'nav-feature-card';
  _uid: string;
}

export interface NavFeatureCardsProps {
  title: string;
  columns: 'auto' | '1' | '2' | '3';
  cards: NavFeatureCardProps[];

  component: 'nav-feature-cards';
  _uid: string;
}

/* ---------------------------- nav-feature-icons --------------------------- */
export interface NavFeatureIconProps {
  title: string;
  icon: string;
  link: MultilinkStoryblok;

  component: 'nav-feature-icon';
  _uid: string;
}

export interface NavFeatureIconsProps {
  title: string;
  icons: NavFeatureIconProps[];
  ctas: LinkStoryblok[];

  component: 'nav-feature-icons';
  _uid: string;
}

/* ------------------------------ nav-features ------------------------------ */
export interface NavFeatureProps {
  title: string;
  description: string;
  icon: string;
  link: MultilinkStoryblok;

  component: 'nav-feature';
  _uid: string;
}

export interface NavFeaturesProps {
  title: string;
  columns: 'auto' | '1' | '2' | '3';
  features: Array<NavFeatureProps | NavFeaturePostProps>;

  component: 'nav-features';
  _uid: string;
}

/* -------------------------- nav-feature-side-menu ------------------------- */
export interface NavFeatureSideMenuItemProps {
  title: string;
  content: Array<
    NavFeatureBigCardsProps | NavFeatureCardsProps | NavFeatureIconsProps | NavFeaturesProps
  >;

  component: 'nav-feature-side-menu-item';
  _uid: string;
}

export interface NavFeatureSideMenuProps {
  items: NavFeatureSideMenuItemProps[];

  component: 'nav-feature-side-menu';
  _uid: string;
}

/* -------------------------- nav-feature-posts ------------------------- */
export interface NavFeaturePostProps {
  title: string;
  description: string;
  image: AssetStoryblok;
  imageplugin?: {
    _uid?: string;
    url?: string;
    plugin?: string;
    content?: string;
  };
  link: MultilinkStoryblok;

  component: 'nav-feature-post';
  _uid: string;
}

export interface NavFeaturePostsProps {
  title: string;
  posts: NavFeaturePostProps[];
  see_all_link?: LinkStoryblok;

  component: 'nav-feature-posts';
  _uid: string;
}

/* ------------------------------- basic navs ------------------------------- */
export type NavPanelProps =
  | NavFeatureBigCardsProps
  | NavFeatureCardsProps
  | NavFeatureIconsProps
  | NavFeaturesProps
  | NavFeatureSideMenuProps
  | NavFeaturePostsProps;

export interface NavItemProps {
  title: string;
  isNew: boolean;
  panel: Array<NavPanelProps>;

  component: 'nav-item';
  _uid: string;
}

export interface NavLinkProps {
  title: string;
  isNew: boolean;
  link: MultilinkStoryblok;

  component: 'nav-link';
  _uid: string;
}

/* ---------------------------------- core ---------------------------------- */
export interface NewHeaderStoryblok {
  items: Array<NavItemProps | NavLinkProps>;
  ctas: Array<LinkStoryblok | ButtonLinkStoryblok>;

  component: 'new-header';
  _uid: string;
}
