import type { Meta, StoryObj } from '@storybook/svelte';

import DropdownStory from './dropdown-story.svelte';

const meta = {
  title: 'UI/Dropdown',
  component: DropdownStory,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    }
  }
} satisfies Meta<DropdownStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
