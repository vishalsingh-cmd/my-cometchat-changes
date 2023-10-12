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
  class={cn(
    ellipse(),
    'blur1 -bottom-[50px] -right-[200px] h-[325.6px] w-[931.18px] blur-[44px] md:-right-[300px] md:top-[100px] md:h-[449.05px] md:w-[1379.64px]'
  )}
/>
<div
  class={cn(
    ellipse(),
    '-left-[100px] bottom-5 h-[504.91px] w-[625.36px] bg-[hsl(231,63%,24%)]/60 mix-blend-soft-light blur-[58px] md:-right-[200px] md:-top-[100px] md:h-[698.83px] md:w-[923.9px]'
  )}
/>
<div
  class={cn(
    ellipse(),
    'blur2 -left-[100px] bottom-[10px] h-[407.96px] w-[922.92px] mix-blend-screen blur-[44px] md:-right-[200px] md:top-[100px] md:h-[564.65px] md:w-[1363.52px]'
  )}
/>
<div
  class={cn(
    ellipse(),
    '-right-[100px] bottom-[10px] h-[387.98px] w-[943.86px] bg-[hsl(245,63%,24%)]/30 blur-[58px] md:top-[50px] md:h-[550.815px] md:w-[1366.711px]'
  )}
/>

<div class="absolute left-2 top-[127px]">
  <img draggable="false" src={SmallPlanetsBack} alt="" class="pointer-events-none" />
</div>

<div class="absolute -top-[68px] left-[25px] h-[803px] w-[1366.711px]">
  <Stars amount={60} backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-gray-8']} />
</div>

<div class="absolute -bottom-[400px] -left-[500px] hidden h-[1000px] w-[1000px] md:block">
  <img draggable="false" src={CornerPlanet} alt="" class="pointer-events-none" />
</div>

<div
  class="absolute bottom-0 h-[163px] w-screen bg-gradient-to-t from-gray-1/100 to-transparent md:-translate-x-1/2"
/>

<style>
  .blur1 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.08) 0%, rgba(109, 53, 0, 0.05) 100%);
  }

  .blur2 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.16) 0%, rgba(109, 53, 0, 0.1) 100%);
  }
</style>
