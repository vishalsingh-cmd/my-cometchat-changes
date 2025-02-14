import profile01 from '../_assets/profile_01.png';
import profile02 from '../_assets/profile_02.png';
import profile03 from '../_assets/profile_03.png';
import profile04 from '../_assets/profile_04.png';
import profile05 from '../_assets/profile_05.png';
import profile06 from '../_assets/profile_06.png';

import brand01 from '../_assets/brand_01.png';
import brand02 from '../_assets/brand_02.png';
import brand03 from '../_assets/brand_03.png';
import brand04 from '../_assets/brand_04.png';
import brand05 from '../_assets/brand_05.png';
import brand06 from '../_assets/brand_06.png';

interface props {
  profile_img: string;
  brand_img: string;
  name: string;
  designation: string;
  description: string;
}

export const tmolDatas: props[] = [
  {
    profile_img: profile01,
    brand_img: brand01,
    description:
      'Integrating CometChat not only boosted customer satisfaction but also drove sales. The end result was a shopping experience that was not only more efficient but also immensely more enjoyable for our users.',
    name: 'Anton Valencia',
    designation: 'Product Manager, Pickaroo'
  },
  {
    profile_img: profile02,
    brand_img: brand02,
    description:
      'Before CometChat, we relied on phone calls and text messages for communication, which proved to be inefficient. After implementing CometChat, our communication between medical professionals and logistics personnel improved significantly, enabling us to save lives more effectively.',
    name: 'Evan Lavidor',
    designation: 'Senior Director of Digital Development, TransMedics'
  },
  {
    profile_img: profile03,
    brand_img: brand03,
    description:
      'Discovering CometChat was a game-changer for launching our AI bot, Scamio. They simplified the chat integration, allowing us to go live much faster than building from scratch.',
    name: 'Mirela Padina',
    designation: 'Product Manager, Bitdefender'
  },
  {
    profile_img: profile04,
    brand_img: brand04,
    description:
      "We built our previous chat system using Firebase but faced numerous issues as our user base grew. We had to completely rework it, and CometChat helped us go live quickly. We've received great feedback from our users since the switch.",
    name: 'Sahib Hussain',
    designation: 'Lead Developer, Sploot'
  },
  {
    profile_img: profile05,
    brand_img: brand05,
    description:
      'Our existing chat system struggled with the growing user base, leading to performance hiccups. We had to shift, and with CometChat, we improved our matching algorithm, increasing match rates by 20%.',
    name: 'Nathan Heber',
    designation: 'CEO & Founder, Boatyard'
  },
  {
    profile_img: profile06,
    brand_img: brand06,
    description:
      'As we prepared for our Shark Tank launch, we knew we needed a chat system that could be implemented quickly. We chose CometChat because they had already demonstrated scalability with major companies worldwide and offered rapid integration. It was the perfect solution for our needs and helped us handle the increased user traffic seamlessly',
    name: 'Nathan Heber',
    designation: 'CEO & Founder, Boatyard'
  }
];
