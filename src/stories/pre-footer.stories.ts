import PreFooter from '$components/pre-footer/pre-footer.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
  title: 'UI/PreFooter',
  component: PreFooter,
  argTypes: {}
} satisfies Meta<PreFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Get started for free',
    description: 'Build and test for as long as you need. \n Pick a plan when you’re ready.',
    buttons: [
      {
        label: 'Start now',
        variant: 'secondary',
        link: ''
      },
      {
        label: 'Chat with us',
        variant: 'primary',
        link: ''
      }
    ]
  }
};
