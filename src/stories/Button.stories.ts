import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '../components/button.svelte';

const meta = {
  title: 'Components / Button',
  component: Button
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    size: 'md',
    variant: 'primary'
  }
};
