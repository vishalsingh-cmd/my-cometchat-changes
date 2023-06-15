<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  const spinner = cva(
    [
      'relative',

      'h-5',
      'w-5',

      'animate-spin',

      'before:absolute',
      'before:left-0',
      'before:top-0',

      'before:h-5',
      'before:w-5',

      'before:rounded-full',

      'before:opacity-[0.14]'
    ],
    {
      variants: {
        variant: {
          primary: ['before:bg-brand-12', 'light:before:bg-brand-1'],
          secondary: ['before:bg-brand-10']
        }
      }
    }
  );

  const comet = cva(
    [
      'absolute',
      'left-[9px]',
      'top-[-0.5px]',

      'h-0.5',
      'w-0.5',

      'rounded-full',
      'bg-current',

      'before:absolute',
      'before:left-[-3.5px]',
      'before:top-[-3.5px]',

      'before:h-2',
      'before:w-2',

      'before:rounded-full',
      'before:bg-current',

      'before:opacity-30',

      'before:blur-sm'
    ],
    {
      variants: {
        variant: {
          primary: [
            'bg-brand-12',
            'light:bg-brand-1',
            'before:bg-brand-12',
            'light:before:bg-brand-1'
          ],
          secondary: ['bg-brand-10', 'before:bg-brand-10']
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let variant: undefined | VariantProps<typeof spinner>['variant'] = 'primary';
</script>

<div
  aria-label="loading"
  role="progressbar"
  class={cn(spinner({ variant }), className, 'body', variant)}
  {...$$restProps}
/>
<div class="absolute left-0 top-0 h-5 w-5 animate-spin">
  <div class={cn(comet({ variant }))} />
</div>

<style>
  .body {
    background: conic-gradient(var(--trail-color-start) 80%, var(--trail-color-end));
    clip-path: circle(50%);
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0) 9px, black 9px);
  }

  .body.primary {
    --trail-color-start: hsla(240, 50%, 99%, 0);
    --trail-color-end: hsla(240, 50%, 99%, 0.6);
  }

  .body.secondary {
    --trail-color-start: hsla(250, 51%, 53%, 0);
    --trail-color-end: hsla(250, 51%, 53%, 0.6);
  }
</style>
