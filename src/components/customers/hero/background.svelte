<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  import Noise from './assets/noise.svg';
  import RedPlanet from './assets/red-planet.svg';
  import BlurPlanets from './assets/blur-planets.svg';
  import OrangePlanet from './assets/orange-planet.svg';
  import BigPinkPlanet from './assets/big-pink-planet.svg';

  const blur = cva([
    'absolute',
    'origin-center',
    'transform',
    'rounded-1/2',
    'pointer-events-none'
  ]);
</script>

<!-- Stars -->
<div class="pointer-events-none absolute top-[-68px] h-[803px] w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>

<!-- Noise -->
<div class="pointer-events-none absolute top-0 h-[1079px] w-[1440px]">
  <img src={Noise} alt="" />
</div>

<!-- Blurs -->
<div
  class={cn(
    blur(),
    'left-[180px] top-[80px] h-[710.96px] w-[1423.31px] rotate-[-18deg] bg-[hsl(245,63%,24%)]/30 blur-[58px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>

<!-- Blur Planets -->
<div class="pointer-events-none absolute left-0 top-[50px]">
  <img role="presentation" src={BlurPlanets} alt="" class="h-full w-full" />
</div>

<!-- Side Gradients -->
<div
  class="pointer-events-none absolute left-[-2px] top-0 h-[970px] w-[104px] bg-gradient-to-r from-gray-1/60 to-gray-1/0 2xl:hidden"
/>
<div
  class="pointer-events-none absolute right-[-2px] top-0 h-[970px] w-[191px] bg-gradient-to-l from-gray-1/60 to-gray-1/0 2xl:hidden"
/>

<!-- Planets - In Front of side gradients -->
<div
  class="pointer-events-none absolute -bottom-[140px] -left-[290px] hidden md:block md:h-[600px] md:w-[600px]"
>
  <img role="presentation" src={BigPinkPlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute hidden md:-right-[50px] md:-top-[20px] md:block">
  <img role="presentation" src={OrangePlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute -bottom-[100px] left-[60px] hidden w-[450px] md:block">
  <img role="presentation" src={RedPlanet} alt="" class="h-full w-full" />
</div>
