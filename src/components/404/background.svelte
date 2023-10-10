<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  import Noise from './assets/noise.svg';
  import Orbit from './assets/orbit.svg';
  import BlurPlanets from './assets/blur-planets.svg';
  import BigOrangePlanet from './assets/big-orange-planet.svg';
  import BigRedPlanet from './assets/big-red-planet.svg';
  import PinkPlanet from './assets/pink-planet.svg';
  import BigPurplePlanet from './assets/big-purple-planet.svg';
  import SmallPurplePlanet from './assets/small-purple-planet.svg';
  import Zero from './assets/zero.svg';
  import Four from './assets/four.svg';

  const blur = cva([
    'absolute',
    'origin-center',
    'transform',
    'rounded-1/2',
    'pointer-events-none'
  ]);
</script>

<!-- Noise -->
<div class="pointer-events-none absolute top-0 h-[1079px] w-[1440px]">
  <img src={Noise} alt="" />
</div>

<!-- Blurs -->
<div
  class={cn(
    blur(),
    'left-[180px] top-[100px] h-[710.96px] w-[1000px] rotate-[-18deg] bg-[hsl(245,63%,20%)]/30 blur-[58px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>

<!-- Blur Planets -->
<div class="pointer-events-none absolute right-[100px] top-[50px] hidden md:block">
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
<div class="pointer-events-none absolute left-[150px] top-[150px] hidden md:block">
  <img role="presentation" src={Orbit} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -left-[260px] top-[20px] scale-50 md:top-[150px] md:scale-100"
>
  <img role="presentation" src={BigOrangePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -top-[10px] left-[30px] scale-[70%] md:left-[150px] md:top-[100px] md:scale-100 lg:left-[150px] lg:top-[150px] xl:left-[280px] xl:top-[150px] xl:scale-100"
>
  <img role="presentation" src={PinkPlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute -bottom-[170px] -right-[330px] hidden scale-95 md:block">
  <img role="presentation" src={BigPurplePlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute -right-[220px] bottom-0 md:bottom-[50px] md:right-[50px]">
  <img role="presentation" src={SmallPurplePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute bottom-[230px] left-1/2 h-[147px] w-[80px] -translate-x-[40px] scale-75 md:left-1/2 md:top-[180px] md:-translate-x-[28px] md:scale-[110%]"
>
  <img role="presentation" src={Zero} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute left-1/2 top-[140px] h-[230px] w-[230px] -translate-x-[60px] md:top-[140px] md:h-[300px] md:w-[300px] md:-translate-x-[80px] lg:top-[100px] lg:h-[400px] lg:w-[400px] lg:-translate-x-[100px]"
>
  <img role="presentation" src={BigRedPlanet} alt="" class="h-full w-full" />
</div>

<!-- Big Four -->
<div
  class="pointer-events-none absolute right-[60px] top-[90px] translate-x-[80px] scale-[80%] lg:right-[200px] xl:right-[360px] xl:top-[100px] xl:scale-100"
>
  <img role="presentation" src={Four} alt="" class="h-full w-full" />
</div>

<!-- Small Four -->
<div
  class="pointer-events-none absolute -left-[60px] top-[120px] translate-x-[80px] -rotate-[30deg] scale-[60%] lg:left-[200px] lg:top-[340px]"
>
  <img role="presentation" src={Four} alt="" class="h-full w-full" />
</div>

<!-- Stars -->
<div class="pointer-events-none absolute top-[-68px] h-[803px] w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>
