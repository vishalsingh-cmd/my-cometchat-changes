import type {
  AssetStoryblok,
  ButtonLinkStoryblok,
  LinkStoryblok,
  standardLinkStoryblok
} from '$src/types/bloks';

/* -------------------------- nav-feature-big-cards ------------------------- */
export interface NavFeatureBigCardProps {
  title: string;
  image: AssetStoryblok;
  link: standardLinkStoryblok;

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
  title: string;
  description: string;
  icon: string;
  link: standardLinkStoryblok;

  component: 'nav-feature-card';
  _uid: string;
}

export interface NavFeatureCardsProps {
  title: string;
  columns: 'auto' | 1 | 2 | 3;
  cards: NavFeatureCardProps[];

  component: 'nav-feature-cards';
  _uid: string;
}

/* ---------------------------- nav-feature-icons --------------------------- */
export interface NavFeatureIconProps {
  title: string;
  icon: string;
  link: standardLinkStoryblok;

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
  link: standardLinkStoryblok;

  component: 'nav-feature';
  _uid: string;
}

export interface NavFeaturesProps {
  title: string;
  columns: 'auto' | '1' | '2' | '3';
  features: NavFeatureProps[];

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

/* ------------------------------- basic navs ------------------------------- */
export type NavPanelProps =
  | NavFeatureBigCardsProps
  | NavFeatureCardsProps
  | NavFeatureIconsProps
  | NavFeaturesProps
  | NavFeatureSideMenuProps;

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
  link: standardLinkStoryblok;

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
