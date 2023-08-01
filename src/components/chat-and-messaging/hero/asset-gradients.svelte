<script>
  import { cn } from '$lib/utils';
  import { cva } from 'class-variance-authority';
  const ellipse = cva(['absolute', 'origin-center', 'transform', 'rotate-[-12deg]']);
</script>

<div
  class={cn(
    ellipse(),
    '-bottom-[20px] -left-[30px] h-[250px] w-[100px] bg-gray-1 blur-[20px] md:-left-[350px] md:h-[600px] md:w-[523px] md:blur-[58px] 2xl:w-[1000px]'
  )}
  style="transform: translate3d(0, 0, 0)"
/>

<div
  class={cn(
    ellipse(),
    'lg -bottom-[100px] -left-[100px] h-[200px] w-[350px] bg-gray-1/90 blur-[20px] md:-bottom-[120px] md:left-0 md:h-[300px] md:w-[600px] lg:w-[1000px] 2xl:-bottom-[80px] 2xl:left-[500px]'
  )}
  style="transform: translate3d(0, 0, 0)"
/>
