<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  const ellipse = cva(['absolute', 'origin-center', 'transform', 'rotate-[-12deg]', 'rounded-1/2']);
</script>

<div
  class={cn(
    ellipse(),
    'top-[499px] h-[145px] w-[383px] rotate-[-11deg] bg-[hsl(332,31%,44%)]/20 blur-[44px] md:left-[50%] md:top-[557px] md:h-[380px] md:w-[1007px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    'ellipse2',
    ellipse(),
    'right-[-200px] top-[450px] h-[178px] w-[609px] rotate-[-11deg] blur-[44px] md:h-[468px] md:w-[1601px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    'ellipse3',
    ellipse(),
    'left-[-150px] top-[530px] h-[180px] w-[528px] rotate-[-5deg] blur-[44px] md:top-[569px] md:h-[473px] md:w-[1389px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    'ellipse4',
    ellipse(),
    'left-[-300px] top-[530px] h-[151px] w-[529px] mix-blend-screen blur-[44px] md:top-[550px] md:h-[397px] md:w-[1392px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    ellipse(),
    'right-[-200px] top-[434px] h-[229px] w-[359px] bg-[hsl(231,63%,24%)] mix-blend-soft-light blur-[58px] md:top-[334px] md:h-[601px] md:w-[943px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    ellipse(),
    'left-0 top-[500px] h-[187px] w-[541px] bg-[hsl(245,63%,24%)]/30 blur-[58px] md:top-[400px] md:h-[493px] md:w-[1423px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>

<style lang="postcss">
  .ellipse2 {
    background: radial-gradient(
      126.59% 49.35% at 49.44% 54.05%,
      rgba(232, 200, 254, 0.6) 0%,
      rgba(232, 200, 254, 0) 76.91%
    );
  }

  .ellipse3 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.2) 0%, rgba(109, 53, 0, 0.12) 100%);
  }

  .ellipse4 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.5) 0%, rgba(109, 53, 0, 0.3) 100%);
  }
</style>
