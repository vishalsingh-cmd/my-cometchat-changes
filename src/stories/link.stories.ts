import type { Meta, StoryObj } from '@storybook/svelte';

import Link from './link-story.svelte';

const meta = {
  title: 'UI/Buttons/Link',
  component: Link,
  argTypes: {
    class: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Hello world'
  }
};
