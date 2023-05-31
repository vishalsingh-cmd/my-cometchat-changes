<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let className: undefined | string = undefined;
  export { className as class };
  export let href = '';
</script>

<a
  {href}
  {...$$restProps}
  class={twMerge(
    'h-5',
    'inline-flex',
    'flex-row',
    'gap-1',
    'rounded',
    'text-gray-11',
    'text-sm',
    'leading-normal',
    'tracking-widest',
    'font-regular',
    'hover:text-brand-9',
    'active:text-brand-10',
    'outline-brand-7/0',
    'focus-within:outline-1',
    'focus-within:outline-brand-7/100',
    className
  )}
>
  <slot />
</a>
