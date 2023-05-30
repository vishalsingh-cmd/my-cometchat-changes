<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';

  let gradientX = 0;
  let gradientY = 0;

  const button = cva(
    `
      group
      relative
      box-border
  
      inline-flex
      items-center
      justify-center
      gap-2.5
  
      overflow-hidden
      whitespace-nowrap
  
      text-sm
      font-regular
      leading-none
  
      outline-none
  
      transition-all
  
      disabled:pointer-events-none
      disabled:opacity-40

      after:absolute
      after:top-10
      after:left-10
      after:w-10
      after:h-10
      after:opacity-0
      after:blur-[20px]
      after:rotate-[145.28deg]

      hover:after:opacity-[8]

      focus:shadow-focus
    `,
    {
      variants: {
        variant: {
          primary: `
              bg-brand-9
              text-background

              after:bg-brand-6

              active:bg-brand-10
            `,
          secondary: `
              bg-gray-10/[0.08]
              text-foreground
              border
              border-solid
              border-gray-6

              after:bg-brand-7

              hover:border-brand-7

              active:border-brand-10
            `
        },
        size: {
          sm: `
              px-3
              h-9
              rounded-[10px]
            `,
          md: `
              px-4
              h-11
              rounded-xl
            `
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let disabled: undefined | boolean = undefined;
  export let as: undefined | 'button' | 'a' = 'button';
  export let label: undefined | string = undefined;
  export let variant: undefined | VariantProps<typeof button>['variant'] = 'primary';
  export let size: undefined | VariantProps<typeof button>['size'] = 'md';

  let buttonRef: HTMLButtonElement | HTMLAnchorElement;

  function mouseMoveEvent(e: Event) {
    const { x, y } = buttonRef.getBoundingClientRect();

    gradientX = (e as MouseEvent).clientX - x * 1.5;
    gradientY = (e as MouseEvent).clientY - y * 1.5;
  }
</script>

<svelte:element
  this={as}
  bind:this={buttonRef}
  on:click
  on:mouseenter
  on:mousemove={mouseMoveEvent}
  on:mouseleave
  on:keydown
  on:keyup
  on:keypress
  on:focus
  on:blur
  {disabled}
  class={twMerge(
    button({ size, variant }),
    'hover:after:top-[var(--gradient-y)]',
    'hover:after:left-[var(--gradient-x)]',
    className
  )}
  style={`--gradient-x: ${gradientX}px; --gradient-y: ${gradientY}px;`}
  {...$$restProps}
>
  {#if label}
    <span class="isolate z-10">{label}</span>
  {/if}
</svelte:element>

<style>
</style>
