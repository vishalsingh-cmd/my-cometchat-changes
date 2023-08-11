<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import { cn } from '$lib/utils';
  let className: undefined | string = undefined;
  export { className as class };

  const badge = cva(
    [
      'inline-flex items-center flex-wrap',
      'font-semibold tracking-wide text-brand-10',
      'border-[1.4px] light:border-brand-10/[0.16] dark:border-brand-10/[0.16]'
    ],
    {
      variants: {
        size: {
          small: ['py-0.5', 'px-1.5', 'text-xs', 'rounded-[7px]', 'leading-normal'],
          medium: ['py-[5.5px]', 'px-2.5', 'text-md', 'rounded-[10px]', 'leading-snug']
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
