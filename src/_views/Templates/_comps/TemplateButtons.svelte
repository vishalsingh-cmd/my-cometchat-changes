<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

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
    
        text-[12px]
        font-medium
        leading-none
        font-inter
    
        outline-none
        
        
        transition
  
        cursor-pointer
        disabled:pointer-events-none
        disabled:opacity-40
      `
    ],
    {
      variants: {
        variant: {
          primary: `
                bg-[#6852D6]
                text-[#FFFFFF]
                active:bg-[#5D49BE]
                hover:bg-[#7965DB]
              `,
          secondary: `
                text-[#141414]
                
                bg-[#FFFFFF]
                hover:bg-[#E8E8E8]
                
                border
                border-[#E8E8E8]
                hover:border-brand-9/30
                active:border-brand-9/60
                active:shadow-focus
                focus-visible:border-brand-9/30
                focus-visible:ring-brand-9/30
                
              `,
          chip: `gap-1 text-[#141414]
               hover:bg-[#FFFFFF]
                active:bg-[#F5F5F5]
                rounded-[1000px]
              `
        },
        size: {
          sm: `
                h-9
                rounded-[8px]
                px-3
              `,
          md: `
                h-11
                rounded-[8px]
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
  export let id = '';
  export { className as class };
  export let disabled: undefined | boolean = undefined;
  export let as: undefined | 'button' | 'a' = 'button';
  export let variant: undefined | 'chip' | VariantProps<typeof button>['variant'] = 'primary';
  export let size: undefined | VariantProps<typeof button>['size'] = 'md';
  export let icon: string | null = null;
  export let iconSide: undefined | 'left' | 'right' = 'right';
  export let canHaveGlow = true;
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
  {id}
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
  class={cn(button({ size, variant }), className)}
  {...$$restProps}
  style="transform: translate3d(0, 0, 0);"
>
  {#if icon && iconSide == 'left'}
    <Icon {icon} size="xs" class="mr-[4px]" />
  {/if}

  {#if $$slots.default}
    <span class="flex items-center justify-center gap-2">
      <slot />
    </span>
  {/if}

  {#if canHaveGlow}
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
      style="background: radial-gradient(100px circle at {position.x}px {position.y}px, {variant ===
      'primary'
        ? 'rgba(255,255,255,.16), rgba(255,255,255,0)'
        : 'hsl(var(--color-brand-7) / 0.3), hsl(var(--color-brand-7) / 0)'});"
    />
  {/if}

  {#if icon && iconSide == 'right'}
    <Icon {icon} size="xs" class="ml-[12px]" />
  {/if}
</svelte:element>
