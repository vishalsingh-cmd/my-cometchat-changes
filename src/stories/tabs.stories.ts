import Tabs from '$components/tab/tabs.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  argTypes: {}
} satisfies Meta<Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      {
        id: 0,
        label: 'Messaging Essentials',
        content: 'Messaging Essentialxs'
      },
      {
        id: 1,
        label: 'Advanced Engagement',
        content: 'Advanced Engagement'
      },
      {
        id: 2,
        label: 'Notifications',
        content: 'Notifications'
      },
      {
        id: 3,
        label: 'Moderation',
        content: 'Moderation'
      },
      {
        id: 4,
        label: 'Item',
        content: 'Moderation'
      }
    ]
  }
};
