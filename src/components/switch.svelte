<script lang="ts">
  import { cn } from '$lib/utils';

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

<label
  class={cn('rounded-xl border border-brand-12/2 bg-brand-12/2 p-1 md:rounded-2xl', className)}
>
  <div class="relative inline-flex">
    <input type="checkbox" {name} bind:checked class="peer sr-only" />
    <span
      style:--width="{halfWidth}px"
      class="absolute left-0 top-0 h-full w-full max-w-[--width] rounded-[10px] border border-brand-9/2 bg-brand-9/64 peer-checked:max-w-[calc(100%-var(--width))] peer-checked:translate-x-[--width] motion-safe:transition-all md:rounded-2xl"
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
