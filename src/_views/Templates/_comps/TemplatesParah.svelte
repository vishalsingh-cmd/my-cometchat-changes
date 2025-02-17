<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type {
    TemplatesParahSize,
    TemplatesParahTag,
    TemplatesParahWeight
  } from '$src/types/bloks';

  export let tag: TemplatesParahTag = 'p';
  export let size: TemplatesParahSize = 'base';
  export let weight: TemplatesParahWeight = '400';
  export let className = '';

  const templatesParah = tv({
    base: ['font-inter text-[#727272]'],
    variants: {
      weight: {
        '400': ['font-[400]'],
        '500': ['font-[500]'],
        '600': ['font-[600]'],
        '700': ['font-[700]']
      },
      size: {
        large: ['text-[14px] lg:text-[20px]'],
        medium: ['text-[18px]'],
        base: ['text-[16px]'],
        small: ['text-[14px]']
      }
    },
    defaultVariants: {
      weight: weight,
      size: size
    }
  });
</script>

<svelte:element this={tag} class={templatesParah({ class: className })} {...$$restProps}>
  <slot />
</svelte:element>
