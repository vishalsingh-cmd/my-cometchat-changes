import type { Meta, StoryObj } from '@storybook/svelte';

import Title from '../components/title.svelte';

const meta = {
  title: 'UI/Title',
  component: Title,
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center']
    }
  }
} satisfies Meta<Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: {
      content: 'Our Platform',
      color: 'orange'
    },
    title: 'Integrate CometChat into any Mobile App in Minutes',
    description:
      'With a few lines of code you can have CometChat integrated into any app written in  React, iOS, Android, Flutter, and 12+ other languages.'
  }
};

export const WithButtons: Story = {
  args: {
    label: {
      content: 'Our Platform',
      color: 'orange'
    },
    title: 'Integrate CometChat into any Mobile App in Minutes',
    description:
      'With a few lines of code you can have CometChat integrated into any app written in  React, iOS, Android, Flutter, and 12+ other languages.',
    buttons: [
      {
        label: 'Learn More',
        link: '/'
      },
      {
        label: 'Learn Less',
        link: '/'
      }
    ]
  }
};
