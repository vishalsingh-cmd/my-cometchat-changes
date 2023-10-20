<script lang="ts">
  import { cn } from '$lib/utils';

  let halfWidth: number | string = 132;
  const switchItemClass = cn(
    'relative',
    'cursor-pointer',
    'break-keep',
    'px-4 py-3',
    'rounded-2xl',
    'text-lg leading-tight text-center font-semibold text-brand-12',
    'motion-safe:transition-opacity'
  );

  let className: undefined | string = undefined;
  export { className as class };

  export let name: string | undefined = undefined;
  export let checked = false;
</script>

<label class={cn('rounded-2xl border border-brand-12/2 bg-brand-12/2 p-1', className)}>
  <div class="relative inline-flex">
    <input type="checkbox" {name} bind:checked class="peer sr-only" />
    <span
      style:--width="{halfWidth}px"
      class="absolute left-0 top-0 h-full w-full max-w-[--width] rounded-2xl border border-brand-9/2 bg-brand-9/64 peer-checked:max-w-[calc(100%-var(--width))] peer-checked:translate-x-[--width] motion-safe:transition-all"
    />
    <div
      bind:clientWidth={halfWidth}
      class={cn(switchItemClass, 'opacity-100 peer-checked:opacity-64')}
    >
      <slot name="unchecked" />
    </div>
    <div class={cn(switchItemClass, 'opacity-64 peer-checked:opacity-100')}>
      <slot name="checked" />
    </div>
  </div>
</label>
