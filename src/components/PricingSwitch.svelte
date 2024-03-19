<script lang="ts">
  import { cn } from '$lib/utils';
  import { fade } from 'svelte/transition';

  let halfWidth: number | string = 132;
  const switchItemClass = cn(
    'relative',
    'cursor-pointer',
    'break-keep',
    'px-2.5 py-1.5 md:px-4 md:py-3',
    'text-lg leading-tight text-center font-semibold text-brand-12',
    'motion-safe:transition-opacity'
  );

  let className: undefined | string = undefined;
  export { className as class };

  export let name: string | undefined = undefined;
  export let checked = false;
</script>

<label class={cn('rounded-xl border border-brand-12/2 p-1 md:rounded-2xl', className)}>
  <div class="relative inline-flex">
    <input type="checkbox" {name} bind:checked class="peer sr-only" />
    <span
      style:--width="{halfWidth}px"
      class="absolute left-0 top-0 h-full w-full max-w-[--width] rounded-[10px] border border-brand-9/2 peer-checked:max-w-[calc(100%-var(--width))] peer-checked:translate-x-[--width] motion-safe:transition-all md:rounded-2xl"
    />
    <div
      bind:clientWidth={halfWidth}
      class={cn(switchItemClass, 'opacity-100 peer-checked:opacity-64')}
    >
      <slot name="unchecked" />

      {#if checked}
        <div
          in:fade
          class="absolute -bottom-5 left-0 h-14 w-3/4 translate-x-0 animate-slide-back-and-foward-smothly bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_var(--tw-gradient-stops))] from-[rgba(104,82,214,1)] to-[rgba(104,82,214,0.00)] opacity-[12%]"
        />
      {/if}
    </div>
    <div class={cn(switchItemClass, 'opacity-64 peer-checked:opacity-100')}>
      <slot name="checked" />

      {#if checked}
        <div
          in:fade
          class="absolute -bottom-5 left-0 h-14 w-3/4 translate-x-0 animate-slide-back-and-foward-smothly bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_var(--tw-gradient-stops))] from-[rgba(104,82,214,1)] to-[rgba(104,82,214,0.00)] opacity-[12%]"
        />
      {/if}
    </div>
  </div>
</label>
