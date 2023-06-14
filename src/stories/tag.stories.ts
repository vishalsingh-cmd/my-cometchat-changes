import type { Meta, StoryObj } from '@storybook/svelte';

import Tag from '$components/tag.svelte';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  argTypes: {
    label: {
      control: 'text'
    }
  }
} satisfies Meta<Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Tag'
  }
};
