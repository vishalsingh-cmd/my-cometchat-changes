import img01 from '$src/_views/HomeV2/_sections/Step/_assets/chat_builder.png';
import img02 from '$src/_views/HomeV2/_sections/Step/_assets/ui_kit.png';
import img03 from '$src/_views/HomeV2/_sections/Step/_assets/sdk.png';

export const stepDatas = [
  {
    img: {
      src: img01,
      alt: 'Start with Chat Builder'
    },
    content: {
      step: 'Step 1',
      title: 'Start with Chat Builder',
      des: 'Build your perfect chat experience in minutes. Get production-ready code in your framework.',
      link: '/signup',
      id: 'chat-builder',
      label: 'Try Builder'
    }
  },
  {
    img: {
      src: img02,
      alt: 'Fine-tune with UI Kits'
    },
    content: {
      step: 'Step 2',
      title: 'Fine-tune with UI Kits',
      des: 'Want pixel-perfect control? Our modular components let you customize every visual detail.',
      link: '/ui-kits',
      id: 'ui-kit',
      label: 'Explore UI Kits'
    }
  },
  {
    img: {
      src: img03,
      alt: 'Extend with SDKs'
    },
    content: {
      step: 'Step 3',
      title: 'Extend with SDKs',
      des: 'Going deep? Access our comprehensive SDKs for ultimate flexibility.',
      link: '/chat-sdks-api',
      id: 'sdk',
      label: 'View SDKs'
    }
  }
];
