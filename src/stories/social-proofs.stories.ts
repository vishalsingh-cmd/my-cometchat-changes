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
    customers: [
      { name: 'Google' },
      { name: 'Google' },
      { name: 'Google' },
      { name: 'Google' },
      { name: 'Google' },
      { name: 'Google' }
    ]
  }
};
