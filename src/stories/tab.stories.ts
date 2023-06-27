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
        id: '1',
        label: 'Item',
        isActive: false
      },
      {
        id: '2',
        label: 'Item',
        isActive: false
      },
      {
        id: '3',
        label: 'Item',
        isActive: false
      },
      {
        id: '4',
        label: 'Item',
        isActive: false
      }
    ]
  }
};
