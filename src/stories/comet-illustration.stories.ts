import type { Meta, StoryObj } from '@storybook/svelte';

import CometIllustration, {
  illustrations,
  isValidIllustration
} from '$components/comet-illustration/comet-illustration.svelte';

const meta = {
  title: 'Assets / Comet Illustration',
  component: CometIllustration,
  argTypes: {
    illustration: {
      control: { type: 'select' },
      options: Object.keys(illustrations).filter(isValidIllustration)
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg']
    }
  }
} satisfies Meta<CometIllustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    illustration: 'team',
    size: 'sm'
  }
};
