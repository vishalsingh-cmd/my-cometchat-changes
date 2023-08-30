<script lang="ts">
  import { cn } from '$lib/utils';

  export let id: number;
  export let label: string;
  export let isActive: boolean;
</script>

<button
  on:click
  id="{id}-buttontabhead"
  type="button"
  role="tab"
  class={cn(
    'px-2.5 md:px-5',
    'py-1.5 md:py-3',
    'bg-gray-12/[0.06] hover:bg-brand-10/[0.12]',
    'text-lg/tight text-gray-12/64 hover:text-brand-10',
    'rounded-[10px] md:rounded-[14px]',
    'transition-colors',
    'font-semibold',
    'min-w-fit',
    'cursor-pointer',
    'break-keep',
    isActive && 'bg-brand-10/[0.12] text-brand-10'
  )}
>
  {label}
</button>
