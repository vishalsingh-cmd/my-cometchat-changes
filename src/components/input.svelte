<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

  interface $$Props extends HTMLInputAttributes {
    icon?: string;
    className?: string | null;
  }

  let className: $$Props['className'] = undefined;
  export { className as class };
  export let value: HTMLInputAttributes['value'] = undefined;
  export let icon: $$Props['icon'] = undefined;
</script>

<label for={$$props.id} class={cn('relative w-full text-gray-12', className)}>
  {#if icon}
    <Icon {icon} size="xs" class="absolute left-4 top-1/2 -translate-y-2/4 text-gray-12/74" />
  {/if}
  <input
    class={cn(
      'w-full lg:max-w-[304px]',
      'rounded-[14px] border border-gray-12/10 bg-gray-12/2',
      'px-4 py-[13px]',
      'text-md font-semibold leading-tight tracking-wide',
      'placeholder:text-opacity-64',
      'hover:border-brand-9/30',
      'outline-none',
      'active:border-brand-9/60',
      'focus:border-brand-9/60',
      'peer-focus:border-brand-9/40 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-9/30',
      icon && 'pl-10',
      value && value.length > 0 && 'pr-10'
    )}
    bind:value
    on:change
    on:mouseenter
    on:mouseleave
    on:click
    on:focus
    {...$$restProps}
  />
  {#if value && value.length > 0}
    <button
      class="absolute right-4 top-1/2 h-[14px] w-[14px] -translate-y-2/4 text-gray-12/74"
      on:click={() => (value = '')}
    >
      <Icon size="xs" icon="x-circle" />
    </button>
  {/if}
</label>
