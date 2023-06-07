import PreFooter from '$components/pre-footer/pre-footer.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
  title: 'UI/Blocks/PreFooter',
  component: PreFooter,
  argTypes: {}
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
