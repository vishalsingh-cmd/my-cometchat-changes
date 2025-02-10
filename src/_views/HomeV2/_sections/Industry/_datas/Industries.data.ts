import Icon1 from '../_icons/Icon1.svelte';
import Icon2 from '../_icons/Icon2.svelte';
import Icon3 from '../_icons/Icon3.svelte';
import Icon4 from '../_icons/Icon4.svelte';
import Icon5 from '../_icons/Icon5.svelte';
import Icon6 from '../_icons/Icon6.svelte';
import marketplaces from '../_assets/marketplaces.png';
import ondemand_services from '../_assets/ondemand_services.png';
import telehealth from '../_assets/telehealth.png';
import saas from '../_assets/saas.png';
import dating from '../_assets/dating.png';
import social_communities from '../_assets/social_communities.png';

export interface IndustriesProps {
  icon: any;
  title: string;
  description: string;
  imgSrc: string;
}

export const industriesData = [
  {
    icon: Icon1,
    title: 'Marketplaces',
    description:
      'Build trust and increase transaction success with secure buyer-seller communication',
    imgSrc: marketplaces
  },
  {
    icon: Icon2,
    title: 'On-demand services',
    description:
      'Build trust and increase transaction success with secure buyer-seller communication',
    imgSrc: ondemand_services
  },
  {
    icon: Icon3,
    title: 'Telehealth',
    description:
      'Build trust and increase transaction success with secure buyer-seller communication',
    imgSrc: telehealth
  },
  {
    icon: Icon4,
    title: 'SaaS',
    description:
      'Build trust and increase transaction success with secure buyer-seller communication',
    imgSrc: saas
  },
  {
    icon: Icon5,
    title: 'Dating apps',
    description:
      'Build trust and increase transaction success with secure buyer-seller communication',
    imgSrc: dating
  },
  {
    icon: Icon6,
    title: 'Social communities',
    description:
      'Build trust and increase transaction success with secure buyer-seller communication',
    imgSrc: social_communities
  }
];
