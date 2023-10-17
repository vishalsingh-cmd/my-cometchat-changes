<script lang="ts">
  import { cn } from '$lib/utils';
  import { cva } from 'class-variance-authority';

  import Stars from '$components/stars.svelte';

  import Noise from './assets/noise.svg';
  import Orbit from './assets/orbit.svg';
  import BlurPlanets from './assets/blur-planets.svg';
  import OrangePlanet from './assets/orange-planet.svg';
  import PinkPlanet from './assets/pink-planet.svg';
  import PurplePlanet from './assets/purple-planet.svg';

  const blur = cva([
    'absolute',
    'origin-center',
    'transform',
    'rounded-1/2',
    'pointer-events-none'
  ]);
</script>

<!-- Stars -->
<div class="pointer-events-none absolute top-[100px] h-full w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>

<!-- Noise -->
<div class="pointer-events-none absolute top-0 h-[1079px] w-[1440px]">
  <img src={Noise} alt="" />
</div>

<!-- Orbit -->
<div class="pointer-events-none absolute bottom-[200px] left-[100px] hidden w-[1211.03px] lg:block">
  <img role="presentation" src={Orbit} alt="" class="h-full w-full" />
</div>

<!-- Blurs -->
<div
  class={cn(
    blur(),
    'left-0 top-[80px] h-[710.96px] w-[1423.31px] rotate-[-18deg] bg-[hsl(245,63%,24%)]/30 blur-[58px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>

<!-- Blur Planets -->
<div class="pointer-events-none absolute left-[30px] top-[50px]">
  <img role="presentation" src={BlurPlanets} alt="" class="h-full w-full" />
</div>

<!-- Side Gradients -->
<div
  class="pointer-events-none absolute left-[-2px] top-0 h-[970px] w-[104px] bg-gradient-to-r from-gray-1/60 to-transparent 2xl:hidden"
/>
<div
  class="pointer-events-none absolute right-[-2px] top-0 h-[970px] w-[191px] bg-gradient-to-l from-gray-1/60 to-transparent 2xl:hidden"
/>

<!-- Planets -->

<!-- Bigger purple planet -->
<div class="pointer-events-none absolute -left-[340px] top-[200px] h-[700px] w-[700px] lg:top-0">
  <img role="presentation" src={PurplePlanet} alt="" class="h-full w-full" />
</div>

<!-- Smaller purple planet -->
<div
  class="pointer-events-none absolute right-1/2 top-1/2 hidden h-[500px] w-[500px] -translate-y-[200px] lg:block lg:translate-x-[320px] xl:translate-x-[280px]"
>
  <img role="presentation" src={PurplePlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute -bottom-[100px] -left-[260px] hidden lg:block">
  <img role="presentation" src={OrangePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -bottom-[280px] -right-[320px] scale-75 lg:-right-[360px] lg:bottom-0 lg:scale-100"
>
  <img role="presentation" src={PinkPlanet} alt="" class="h-full w-full" />
</div>
