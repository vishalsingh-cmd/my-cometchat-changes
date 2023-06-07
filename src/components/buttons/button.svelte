<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  import Comet from '../comet.svelte';

  let position = { x: 0, y: 0 };

  const button = cva(
    [
      `
      group
      relative
      box-border
  
      inline-flex
      items-center
      justify-center
  
      overflow-hidden
      whitespace-nowrap
  
      text-sm
      font-semibold
      leading-none
  
      outline-none
      focus-visible:ring-4
      focus-visible:shadow-focus
  
      transition

      disabled:pointer-events-none
      disabled:opacity-60
    `
    ],
    {
      variants: {
        variant: {
          primary: `
              bg-brand-9
              ring-brand-9/30
              text-brand-1
              dark:text-brand-12

              active:bg-brand-10
            `,
          secondary: `
              text-brand-12
              
              border
              border-brand-11/20
              hover:border-brand-9/50
              focus-visible:border-brand-9/50
              active:border-brand-9/80

              ring-brand-9/20
            `
        },
        size: {
          sm: `
              h-9
              rounded-[10px]
              px-3
            `,
          md: `
              h-11
              rounded-xl
              px-4
            `
        },
        loading: {
          true: `[&>*:not(.btn-spinner)]:opacity-0`
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let disabled: undefined | boolean = undefined;
  export let as: undefined | 'button' | 'a' = 'button';
  export let variant: undefined | VariantProps<typeof button>['variant'] = 'primary';
  export let size: undefined | VariantProps<typeof button>['size'] = 'md';
  export let loading: undefined | VariantProps<typeof button>['loading'] = false;

  let el: HTMLButtonElement | HTMLAnchorElement;
  function mouseMoveEvent(e: MouseEvent) {
    const rect = el.getBoundingClientRect();
    position = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
</script>

<svelte:element
  this={as}
  bind:this={el}
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
  class={cn(button({ size, loading, variant }), className)}
  {...$$restProps}
>
  {#if $$slots.default}
    <span>
      <slot />
    </span>
  {/if}
  {#if loading}
    <div class={'btn-spinner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}>
      <Comet {variant} />
    </div>
  {/if}
  <div
    class="pointer-events-none absolute -inset-px opacity-100 transition duration-300"
    style="background: radial-gradient(100px circle at {position.x}px {position.y}px, {variant ===
    'primary'
      ? 'rgba(255,255,255,.16), rgba(255,255,255,0)'
      : 'hsl(var(--color-brand-7) / 0.3), hsl(var(--color-brand-7) / 0)'});"
  />
</svelte:element>
