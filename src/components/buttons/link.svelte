<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  const link = cva(
    [
      `
      h-5
      inline-flex
      flex-row
      gap-1
      rounded
      text-sm
      leading-normal
      tracking-widest
      font-semibold
      outline-none
      outline-brand-7/0
      focus-within:outline-1
      focus-within:outline-brand-7/100
    `
    ],
    {
      variants: {
        variant: {
          primary: `
              text-gray-12/[0.83]
              hover:text-brand-9
              active:text-brand-10
            `,
          secondary: `
              text-gray-12
            `
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let variant: undefined | VariantProps<typeof link>['variant'] = 'primary';
  export let href = '';
</script>

<a {href} {...$$restProps} class={cn(link({ variant }), className)}>
  <slot />
</a>
