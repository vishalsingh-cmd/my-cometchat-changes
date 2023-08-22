<script>
  import { cn } from '$lib/utils';
  import { cva } from 'class-variance-authority';
  const ellipse = cva(['absolute']);
</script>

<div
  class={cn(
    ellipse(),
    '-bottom-[120px] -left-[100px] h-[200px] w-[400px] bg-gray-1/90 blur-[20px] md:-bottom-[200px]  md:left-0 md:h-[300px] md:w-[600px] lg:-bottom-[170px] lg:w-[1000px] 2xl:-bottom-[200px] 2xl:left-[500px]'
  )}
  style="transform: translate3d(0, 0, 0)"
/>
