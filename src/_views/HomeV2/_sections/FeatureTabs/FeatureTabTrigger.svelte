<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';

  export let tabHeader: string;
</script>

<button
  data-name="feature-tab-trigger"
  class={cn(
    [
      'group/feature-tab-trigger',
      'relative isolate py-6',
      'whitespace-nowrap font-sans text-[16px] font-semibold text-[#FAFAFF]',
      'transition-opacity duration-300 hover:opacity-100',
      'opacity-54 data-[state="active"]:opacity-100'
    ],
    ['lg:text-[22px]']
  )}
>
  {tabHeader}
  <div
    data-name="feature-tab-video-progress"
    class={cn([
      'absolute bottom-0 left-0 h-[1px] w-0 bg-[#6958BE]',
      'transition-[width] duration-100',
      'group-data-[state="active"]/feature-tab-trigger:w-[var(--progress-width)]'
    ])}
  />
  <div
    class={cn([
      'pointer-events-none absolute bottom-0 left-1/2 -z-[1]',
      'h-[135px] w-[203px] -translate-x-1/2 translate-y-3/4',
      'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(104,_82,_214,_0.12)_0%,_rgba(104,_82,_214,_0)_100%)]',
      'opacity-0 group-data-[state="active"]/feature-tab-trigger:opacity-100'
    ])}
  />
</button>
