<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';

  export let className = '';
  export let as: 'button' | 'a' = 'button';
  export let color: 'brand' | 'white' = 'white';
  export let variant: 'contained' | 'outlined' | 'chip' | 'text' = 'contained';

  export let icon: string | null = null;
  export let iconSide: undefined | 'left' | 'right' = 'right';

  const button = tv({
    base: [
      'flex items-center justify-center',
      'font-inter font-[500] text-[14px]',
      'disabled:opacity-60 rounded-lg',
      'transition-colors duration-300'
    ],
    variants: {
      color: {
        brand: [],
        white: []
      },
      variant: {
        contained: ['border border-transparent'],
        outlined: ['border'],
        chip: ['border rounded-2xl'],
        text: []
      }
    },
    compoundVariants: [
      {
        variant: ['contained', 'outlined', 'chip'],
        class: ['min-w-[160px] px-6 py-3']
      },
      /* -------------------------------- contained ------------------------------- */
      {
        color: 'brand',
        variant: 'contained',
        class: ['text-[#FFFFFF]', 'bg-[#6852D6] hover:bg-[#7965DB] active:bg-[#5D49BE]']
      },
      {
        color: 'white',
        variant: 'contained',
        class: ['text-[#141414]', 'bg-[#FFFFFF] hover:bg-[#F5F5F5] active:bg-[#DCDCDC]']
      },

      /* -------------------------------- outlined -------------------------------- */
      {
        color: 'brand',
        variant: 'outlined',
        class: [
          'border-[#6852D6] hover:border-[#7965DB] active:border-[#5D49BE]',
          'text-[#6852D6] hover:text-[#7965DB] active:text-[#5D49BE]'
        ]
      },
      {
        color: 'white',
        variant: 'outlined',
        class: [
          'text-[#141414] hover:text-[#070707] active:text-[#020202]',
          'border-[#DCDCDC] hover:border-[#cbcbcb] active:border-[#b1b1b1]'
        ]
      },

      /* ---------------------------------- text ---------------------------------- */
      {
        color: 'brand',
        variant: 'text',
        class: ['text-[#6852D6] hover:text-[#7965DB] active:text-[#5D49BE]']
      },
      {
        color: 'white',
        variant: 'text',
        class: ['text-[#141414] hover:text-[#070707] active:text-[#020202]']
      }
    ],
    defaultVariants: {
      color: color,
      variant: variant
    }
  });
</script>

<svelte:element this={as} class={button({ class: className })} {...$$restProps}>
  {#if icon && iconSide == 'left'}
    <Icon {icon} size="xs" />
  {/if}

  <slot />

  {#if icon && iconSide == 'right'}
    <Icon {icon} size="xs" />
  {/if}
</svelte:element>
