import type { Meta, StoryObj } from '@storybook/svelte';

import PreFooter from '../components/pre-footer.svelte';

const meta = {
  title: 'UI/Prefooter',
  component: PreFooter
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
