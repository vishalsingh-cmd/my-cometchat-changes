import Tab from '$components/tab/tab.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
  title: 'UI/Tab/Tab ',
  component: Tab,
  argTypes: {}
} satisfies Meta<Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      {
        head: {
          id: 0,
          label: 'Messaging Essentials'
        },
        content: 'Messaging Essentialxs'
      },
      {
        head: {
          id: 1,
          label: 'Advanced Engagement'
        },
        content: 'Advanced Engagement'
      },
      {
        head: {
          id: 2,
          label: 'Notifications'
        },
        content: 'Notifications'
      },
      {
        head: {
          id: 3,
          label: 'Moderation'
        },
        content: 'Moderation'
      },
      {
        head: {
          id: 4,
          label: 'Item'
        },
        content: 'Moderation'
      }
    ]
  }
};
