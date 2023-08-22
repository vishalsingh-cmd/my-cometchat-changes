<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import CornerPlanet from './assets/corner-planet.svg';
  import Noise from './assets/noise.svg';
  import SmallPlanetsBack from './assets/small-planets-back.svg';
  import Stars from '$components/stars.svelte';

  const ellipse = cva([
    'absolute',
    'transform',
    'rounded-1/2',
    'origin-center',
    '-rotate-[14.283deg]'
  ]);
</script>

<!-- Noise -->
<div class="absolute bottom-0 left-0 h-full">
  <img src={Noise} alt="" />
</div>

<!-- Blurs -->
<div
  class={cn(ellipse(), 'blur1 -right-[300px] top-[100px] h-[449.05px] w-[1379.64px] blur-[44px]')}
/>
<div
  class={cn(
    ellipse(),
    '-right-[200px] -top-[100px] h-[698.83px] w-[923.9px] bg-[hsl(231,63%,24%)]/60 mix-blend-soft-light blur-[58px]'
  )}
/>
<div
  class={cn(
    ellipse(),
    'blur2 -right-[200px] top-[100px] h-[564.65px] w-[1363.52px] mix-blend-screen blur-[44px]'
  )}
/>
<div
  class={cn(
    ellipse(),
    '-right-[100px] top-[50px] h-[550.815px] w-[1366.711px] bg-[hsl(245,63%,24%)]/30 blur-[58px]'
  )}
/>

<div class="absolute left-2 top-[127px]">
  <img src={SmallPlanetsBack} alt="" />
</div>

<div class="absolute -top-[68px] left-[25px] h-[803px] w-[1366.711px]">
  <Stars amount={60} backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-gray-8']} />
</div>

<div class="absolute -bottom-[400px] -left-[500px] h-[1000px] w-[1000px]">
  <img src={CornerPlanet} alt="" />
</div>

<div
  class="absolute bottom-0 h-[163px] w-screen -translate-x-1/2 bg-gradient-to-t from-gray-1/100 to-gray-1/0"
/>

<style>
  .blur1 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.08) 0%, rgba(109, 53, 0, 0.05) 100%);
  }

  .blur2 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.16) 0%, rgba(109, 53, 0, 0.1) 100%);
  }
</style>
