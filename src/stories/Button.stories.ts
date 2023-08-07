import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button-story.svelte';

const meta = {
  title: 'UI/Buttons/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
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
    },
    loading: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
};
