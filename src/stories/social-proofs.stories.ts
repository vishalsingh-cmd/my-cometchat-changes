import type { Meta, StoryObj } from '@storybook/svelte';

import SocialProofs from '$components/social-proofs.svelte';

const meta = {
  title: 'UI/Social Proofs',
  component: SocialProofs,
  argTypes: {}
} satisfies Meta<SocialProofs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Trusted by',
    customers: [
      { name: 'Google', logo: 'https://i.imgur.com/fmpA2xL.png' }, // test image
      { name: 'Google', logo: 'https://i.imgur.com/fmpA2xL.png' }, // test image
      { name: 'Google', logo: 'https://i.imgur.com/fmpA2xL.png' }, // test image
      { name: 'Google', logo: 'https://i.imgur.com/fmpA2xL.png' }, // test image
      { name: 'Google', logo: 'https://i.imgur.com/fmpA2xL.png' }, // test image
      { name: 'Google', logo: 'https://i.imgur.com/fmpA2xL.png' } // test image
    ]
  }
};
