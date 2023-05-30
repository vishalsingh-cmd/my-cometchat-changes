import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button-story.svelte';

const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger', 'success']
    },
    class: {
      control: { type: 'text' }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Hello world'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Hello world',
    variant: 'secondary'
  }
};
