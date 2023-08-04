<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  const button = cva(
    [
      'inline-flex',
      'items-center',
      'flex-row',
      'gap-1.5',

      'font-semibold',
      'leading-tight',
      'transition-all',

      'active:text-brand-10',

      'disabled:pointer-events-none',
      'disabled:opacity-40',

      'outline-none',
      'outline-1',
      'outline-brand-7/0',

      'focus-within:outline-brand-7/100'
    ],
    {
      variants: {
        variant: {
          default: [
            'text-md',
            'text-gray-12',
            'tracking-wide',

            '[&>i]:opacity-74',

            'hover:text-brand-9',
            'hover:[&>i]:opacity-100'
          ],
          highlighted: ['text-lg', 'text-brand-9', 'relative']
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let disabled: undefined | boolean = undefined;
  export let as: undefined | 'button' | 'a' = 'button';
  export let variant: undefined | VariantProps<typeof button>['variant'] = 'default';
</script>

<svelte:element
  this={as}
  on:click
  on:mouseenter
  on:mousemove
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  on:focus
  on:blur
  {disabled}
  {...$$restProps}
  class={cn(button({ variant }), className, 'group')}
  style="transform: translate3d(0, 0, 0);"
>
  <slot />
  {#if variant === 'highlighted'}
    <div class="absolute -bottom-3 hidden h-2 w-full group-hover:block">
      <div
        class="line absolute h-px w-full origin-right rounded-full bg-gradient-to-l from-brand-9/100 to-brand-9/0 opacity-0"
      />
      <div
        class="star absolute left-0 h-1 w-1 -translate-y-1/2 rounded-full bg-brand-9 opacity-0 after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-brand-9/60 after:blur-sm"
        style="transform: translate3d(0, 0, 0);"
      />
    </div>
  {/if}
</svelte:element>

<style lang="postcss">
  .line {
    animation: line 1s cubic-bezier(0.9, 0.3, 0, 1);
  }

  .star {
    animation: star 1s cubic-bezier(0.9, 0.3, 0, 1);
  }

  @keyframes line {
    0% {
      width: 0;
      opacity: 1;
    }

    50% {
      width: 100%;
      transform: scaleX(1);
    }

    100% {
      width: 100%;
      transform: scaleX(0);
      opacity: 0;
    }
  }

  @keyframes star {
    0% {
      left: 0%;
      opacity: 1;
    }

    50% {
      left: calc(100% - 2px);
    }

    100% {
      left: calc(100% - 2px);
      opacity: 0;
    }
  }
</style>
