<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  const badge = cva(
    [
      'inline-flex',
      'text-semibold tracking-wide text-brand-10',
      'border-[1.4px] light:border-brand-10/[0.16] dark:border-brand-10/[0.16]'
    ],
    {
      variants: {
        size: {
          small: ['pt-0.5 pb-[3px]', 'px-1.5', 'text-xs', 'leading-normal', 'rounded-[7px]'],
          medium: ['pt-1.5 pb-2', 'px-2.5', 'text-md', 'leading-tight', 'rounded-[10px]']
        }
      }
    }
  );

  export let size: VariantProps<typeof badge>['size'] = 'small';
  export let label: string;
</script>

<div class={cn(badge({ size }))}>
  {label}
</div>
