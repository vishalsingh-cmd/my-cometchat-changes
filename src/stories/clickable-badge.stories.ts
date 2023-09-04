import type { Meta, StoryObj } from '@storybook/svelte';

import ClickableBadgeStory from './clickable-badge-story.svelte';

const meta = {
  title: 'UI/Clickable Badge',
  component: ClickableBadgeStory,
  argTypes: {
    review: {
      control: 'number'
    }
  }
} satisfies Meta<ClickableBadgeStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    review: 4.4
  }
};
