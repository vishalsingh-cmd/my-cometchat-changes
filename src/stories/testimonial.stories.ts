import Testimonial from '$components/testimonial.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
  title: 'UI/Testimonial',
  component: Testimonial,
  argTypes: {}
} satisfies Meta<Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
