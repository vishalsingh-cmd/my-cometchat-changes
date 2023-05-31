<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { cva, type VariantProps } from 'class-variance-authority';

  const button = cva(
    [
      'flex',
      'flex-row',
      'gap-1.5',

      'font-semibold',
      'leading-tight',
      'transition-all',

      'active:text-brand-10',

      'disabled:pointer-events-none',
      'disabled:opacity-40',

      'outline-brand-7/0',

      'focus-within:outline-1',
      'focus-within:outline-brand-7/100'
    ],
    {
      variants: {
        variant: {
          default: [
            'text-md',
            'text-gray-12',
            'tracking-wide',

            '[&>svg]:text-gray-11',

            'hover:text-brand-9',
            'hover:[&>svg]:text-gray-9'
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
  export let label = '';
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
  class={twMerge(button({ variant }), className, 'group')}
>
  {label}
  {#if variant === 'highlighted'}
    <div class="absolute bottom-[-10px] hidden h-2 w-full group-hover:block">
      <div class="line" />
      <div class="star" />
    </div>
  {/if}
</svelte:element>

<style lang="postcss">
  .line {
    content: '';
    position: absolute;

    opacity: 0;

    width: 100%;
    height: 1px;

    background: linear-gradient(to left, hsla(250, 62%, 58%, 1), hsla(250, 62%, 58%, 0));

    border-radius: 999px;

    animation: line 1s ease-in-out;
    transform-origin: center right;
  }

  .star {
    content: '';
    position: absolute;
    top: -2px;
    left: 0%;

    opacity: 0;

    width: 4px;
    height: 4px;

    background: hsla(250, 62%, 58%, 1);

    border-radius: 999px;

    filter: blur(2px);

    animation: star 1s ease-in-out;
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
