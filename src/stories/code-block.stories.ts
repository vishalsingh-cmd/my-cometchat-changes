import type { Meta, StoryObj } from '@storybook/svelte';

import CodeBlock from '../components/code-block.svelte';

const meta = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  argTypes: {}
} satisfies Meta<CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: `// React
  { isDarkMode
    ? <h1>Dark Mode Zone</h1>
    : <h1>Light Mode Zone</h1>
  }
    
  // Svelte
  {#if isDarkMode}
    <h1>Dark Mode Zone</h1>
  {:else}
    <h1>Light Mode Zone</h1>
  {/if}`,
    language: 'javascript'
  }
};
