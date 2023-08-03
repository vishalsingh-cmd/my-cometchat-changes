import Pagination from '$components/pagination/pagination.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

let currentPage = 1;

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
  argTypes: {}
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    totalCountOfRegisters: 100,
    currentPage: currentPage,
    registersPerPage: 10,
    onPageChange: (number) => (currentPage = number)
  }
};
