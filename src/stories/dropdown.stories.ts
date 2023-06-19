import type { Meta, StoryObj } from '@storybook/svelte';

import Dropdown from '$components/dropdown.svelte';

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    }
  }
} satisfies Meta<Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        value: 'option1',
        cometIllustration: 'team'
      },
      {
        label: 'Option 2',
        value: 'option2',
        cometIllustration: 'sports'
      }
    ]
  }
};
