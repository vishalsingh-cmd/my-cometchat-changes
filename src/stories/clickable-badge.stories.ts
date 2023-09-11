import type { Meta, StoryObj } from '@storybook/svelte';

import ClickableBadge from '$components/clickable-badge.svelte';

const meta = {
  title: 'UI/Clickable Badge',
  component: ClickableBadge,
  argTypes: {
    review: {
      control: 'number',
      disabeld: 'boolean'
    }
  }
} satisfies Meta<ClickableBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    review: 4.4,
    disabled: false
  }
};
