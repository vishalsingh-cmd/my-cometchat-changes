<script lang="ts">
  import { cn } from '$lib/utils';
  import { cva } from 'class-variance-authority';

  export let number: number;
  export let isCurrent = false;
  export let onPageChange: (page: number) => void;
  let className: string | undefined = undefined;
  export { className as class };

  const button = cva(
    [
      'flex items-center justify-center tabular-nums',
      'min-w-[24px] px-0.5 h-6',
      'text-center text-md/tight font-semibold tracking-widest text-gray-12/64',
      'hover:bg-gray-10/8 rounded-lg'
    ],
    {
      variants: {
        isCurrent: {
          true: `bg-gray-10/8 text-gray-12/100 border border-gray-5 rounded-lg`
        }
      }
    }
  );
</script>

<button
  on:click={() => {
    if (!isCurrent) onPageChange(number);
  }}
  class={cn(button({ isCurrent }), className)}
>
  {number}
</button>
