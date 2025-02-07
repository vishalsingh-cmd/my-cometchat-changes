<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';

  export let icon: any;
  export let href: string;
  export let className = '';
</script>

<a
  class={cn(
    [
      'group/chipCard',
      'relative isolate h-[60px] w-[168px]',
      'flex items-center justify-center',
      'rounded-xl border border-[#2B2B34] bg-[#14131D]',
      'hover:border-[#3F337A]',
      'transition-colors duration-300'
    ],
    ['2xl:h-[88px] 2xl:w-[230px]'],
    [className]
  )}
  {href}
>
  <svelte:component this={icon} className="w-[80%]" />

  <div
    class={cn([
      'opacity-0 group-hover/chipCard:opacity-100',
      'transition-opacity duration-300',
      'absolute inset-0 -z-[1] rounded-[inherit]',
      'bg-[linear-gradient(360deg,_rgba(105,_83,_214,_0.15)_0.01%,_rgba(105,_83,_214,_0.03)_99.87%)]'
    ])}
  />
</a>
