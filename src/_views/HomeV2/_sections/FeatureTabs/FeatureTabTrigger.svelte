<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  export let isActive: boolean;
  export let tabHeader: string;
  export let tabProgress: number;
  export let targetId: string;
</script>

<a
  data-name="home-banner-tab-anchor"
  href={'#' + targetId}
  class={cn(
    [
      'relative isolate py-6',
      'whitespace-nowrap font-sans text-md font-semibold text-[#FAFAFF]',
      'transition-opacity duration-300 hover:opacity-100',
      'opacity-54 data-[state="active"]:opacity-100'
    ],
    ['lg:text-[22px]']
  )}
  data-state={isActive ? 'active' : 'inactive'}
>
  {tabHeader}
  <div
    class="absolute bottom-0 left-0 h-[1px] bg-[#6958BE]"
    style:width={isActive ? `${tabProgress * 100}%` : '0%'}
    style:opacity={isActive ? '1' : '0'}
    style:transition="width 0.1s linear"
  />
  <div
    class={cn([
      'pointer-events-none absolute bottom-0 left-1/2 -z-[1]',
      'h-[135px] w-[203px] -translate-x-1/2 translate-y-3/4',
      'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(104,_82,_214,_0.12)_0%,_rgba(104,_82,_214,_0)_100%)]'
    ])}
    style:opacity={isActive ? '1' : '0'}
  />
</a>
