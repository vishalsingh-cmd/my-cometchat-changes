import CustomerStories from '$components/blocks/customer-stories-section.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
  title: 'UI/Customer stories',
  component: CustomerStories,
  argTypes: {}
} satisfies Meta<CustomerStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
