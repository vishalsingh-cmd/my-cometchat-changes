import type { Meta, StoryObj } from '@storybook/svelte';

import Badge from '$components/badge.svelte';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    label: {
      control: 'text'
    }
  }
} satisfies Meta<Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    label: 'Badge',
    size: 'small'
  }
};
export const Medium: Story = {
  args: {
    label: 'Badge',
    size: 'medium'
  }
};
