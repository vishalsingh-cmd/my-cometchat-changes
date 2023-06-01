<script context="module" lang="ts">
  const files = import.meta.glob('./assets/*.svg', { as: 'raw', eager: true });

  export const illustrations = Object.entries(files).reduce<Record<string, string>>(
    (acc, [path, file]) => {
      const name = path.replace('./assets/', '').replace('.svg', '');
      acc[name] = file;
      return acc;
    },
    {}
  );

  export type IllustrationOptions =
    | 'community'
    | 'education'
    | 'events'
    | 'healthcare'
    | 'matrimonial'
    | 'on-demand'
    | 'saas'
    | 'sports'
    | 'team';
</script>

<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  export const illustrationStyle = cva(['inline-block'], {
    variants: {
      size: {
        sm: ['h-5', 'w-5'],
        lg: ['h-10', 'w-10']
      }
    }
  });

  let className: undefined | string = undefined;
  export { className as class };
  export let illustration: IllustrationOptions;
  export let size: VariantProps<typeof illustrationStyle>['size'] = 'sm';
</script>

{#if illustrations[illustration]}
  <i
    data-icon={illustration}
    aria-hidden="true"
    class={cn(illustrationStyle({ size }), className)}
    {...$$restProps}
  >
    <!-- eslint-disable-next-line -->
    {@html illustrations[illustration]}
  </i>
{/if}
