<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  const badge = cva(
    [
      'inline-flex',
      'text-semibold tracking-wide text-brand-10',
      'border-[1.4px] light:border-[hsl(250,51%,53%)]/[0.16] dark:border-[hsl(250,62%,68%)]/[0.16]'
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

<div class={cn(badge({ size }))}>
  {label}
</div>
