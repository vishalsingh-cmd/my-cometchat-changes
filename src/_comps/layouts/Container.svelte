<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    expand?: 'full' | 'boxed';
    isHero?: boolean;
    pyEnabled?: boolean;
    pxEnabled?: boolean;
  }

  export let className = '';
  export let expand: 'full' | 'boxed' = 'boxed';
  export let isHero = false;
  export let pyEnabled = !isHero;
  export let pxEnabled = true;

  const container = tv({
    base: [''],
    variants: {
      expand: {
        full: '',
        boxed: ['container mx-auto max-w-[1440px]']
      },
      pyEnabled: {
        true: 'py-10 md:py-14 lg:py-20'
      },
      pxEnabled: {
        true: 'px-5 md:px-8 lg:px-10 xl:px-20'
      },
      isHero: {
        true: ['px-5 md:px-8 lg:px-10 xl:px-20', 'pt-32 pb-10 md:pb-14 lg:pt-40 lg:pb-20']
      }
    },
    defaultVariants: {
      expand,
      pyEnabled,
      pxEnabled,
      isHero
    }
  });
</script>

<div class={container({ class: className })} {...$$props}>
  <slot />
</div>
