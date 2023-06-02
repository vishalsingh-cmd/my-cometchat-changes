import type { Meta, StoryObj } from '@storybook/svelte';

import GhostButton from '../components/buttons/ghost-button.svelte';

const meta = {
  title: 'UI/Buttons/Ghost Button',
  component: GhostButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'highlighted']
    },
    class: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<GhostButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Learn more'
  }
};

export const Highlighted: Story = {
  args: {
    label: 'Hello world',
    variant: 'highlighted'
  }
};
