<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import { cn } from '$lib/utils';
  let className: undefined | string = undefined;
  export { className as class };

  const badge = cva(
    [
      'inline-flex items-center whitespace-nowrap',
      'font-semibold tracking-wide leading-none text-brand-10',
      'border-[1.4px] light:border-brand-10/[0.16] dark:border-brand-10/[0.16]'
    ],
    {
      variants: {
        size: {
          small: ['h-[22px]', 'px-1.5', 'text-xs', 'rounded-[7px]'],
          medium: ['h-[32px]', 'px-2.5', 'text-md', 'rounded-[10px]']
        }
      }
    }
  );

  export let size: VariantProps<typeof badge>['size'] = 'small';
  export let label: string;
</script>

<div class={cn(badge({ size }), className)}>
  {label}
</div>
