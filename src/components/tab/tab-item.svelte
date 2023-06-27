<script lang="ts">
  import { cn } from '$lib/utils';

  export let id: string;
  export let label: string;
  export let isActive = false;
</script>

<div
  class={cn(
    'relative isolate w-fit overflow-hidden transition-all',
    isActive ? 'border-b-[1px] border-b-brand-8' : ''
  )}
  {id}
>
  <p
    data-theme="light"
    class={cn(
      'z-10 w-fit cursor-pointer py-5 text-xl/tighter font-semibold text-gray-12 opacity-54 hover:opacity-100 md:px-5 md:py-6',
      isActive ? 'opacity-100' : ''
    )}
  >
    {label}
  </p>
  <!-- <div
    class="absolute -bottom-4 z-0 h-14 w-full"
    style={cn(
      isActive
        ? 'background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(104, 82, 214, 0.16) 0%, rgba(104, 82, 214, 0.00) 100%);'
        : ''
    )}
  /> -->
</div>
