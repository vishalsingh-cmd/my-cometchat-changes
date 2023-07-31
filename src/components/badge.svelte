<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import { cn } from '$lib/utils';
  let className: undefined | string = undefined;
  export { className as class };

  const badge = cva(
    [
      'inline-flex',
      'font-semibold tracking-wide text-brand-10',
      'border-[1.4px] border-brand-10/[0.16] '
    ],
    {
      variants: {
        size: {
          small: ['py-0.5', 'px-1.5', 'text-xs', 'leading-normal', 'rounded-[7px]'],
          medium: ['py-1.5', 'px-2.5', 'text-md', 'leading-tight', 'rounded-[10px]']
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
