<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type {
    TemplatesHeadingName,
    TemplatesHeadingSize,
    TemplatesHeadingWeight
  } from '$src/types/bloks';

  export let tag: TemplatesHeadingName = 'h2';
  export let size: TemplatesHeadingSize = 'h2';
  export let weight: TemplatesHeadingWeight = '500';
  export let className = '';

  const templatesHeading = tv({
    base: ['font-inter text-[#141414]'],
    variants: {
      size: {
        h1: ['text-[24px] lg:text-[40px]'],
        h2: ['text-[24px] lg:text-[32px]'],
        h3: ['text-[20px] lg:text-[24px]'],
        h4: ['text-[18px]'],
        h5: ['text-[16px]'],
        h6: []
      },
      weight: {
        '400': ['font-[400]'],
        '500': ['font-[500]'],
        '600': ['font-[600]'],
        '700': ['font-[700]']
      }
    },
    defaultVariants: {
      size: size,
      weight: weight
    }
  });
</script>

<svelte:element
  this={tag}
  class={templatesHeading({ class: className, size, weight })}
  {...$$restProps}
>
  <slot />
</svelte:element>
