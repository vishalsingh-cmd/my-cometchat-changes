<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let className = '';
  export let variant: 'default' | 'minimal' = 'default';

  const navTitle = tv({
    base: ['font-sans text-[14px] font-medium leading-[16px] text-[#FAFAFF] text-opacity-40'],
    variants: {
      variant: {
        default: [],
        minimal: [
          'text-[12px]',
          'font-[600]',
          'leading-[1.06]',
          'tracking-[0.02em]',
          'uppercase',
          'text-opacity-60' // Keeping opacity as per base or maybe adjusting? User asked for #FAFAFF, assuming they want the text color.
        ]
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  });
</script>

<p class={navTitle({ class: className, variant })}>
  <slot />
</p>
