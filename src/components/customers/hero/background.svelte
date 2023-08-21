<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  import Noise from './assets/noise.svg';
  import Orbit from './assets/orbit.svg';
  import RedPlanet from './assets/red-planet.svg';
  import BlurPlanets from './assets/blur-planets.svg';
  import OrangePlanet from './assets/orange-planet.svg';
  import BigPinkPlanet from './assets/big-pink-planet.svg';
  import BigPurplePlanet from './assets/big-purple-planet.svg';
  import SmallPurplePlanet from './assets/small-purple-planet.svg';

  const blur = cva(['absolute', 'origin-center', 'transform', 'rounded-1/2']);
</script>

<!-- Stars -->
<div class="absolute top-[-68px] h-[803px] w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>
<div
  class="absolute left-[50vw] top-[400px] h-[803px] w-[1386px] origin-center rotate-[30deg] 2xl:-left-[100px] 2xl:top-0"
  data-theme="light"
>
  <Stars amount={40} backgroundColours={['bg-brand-1']} />
</div>

<!-- Noise -->
<div class="absolute top-0 h-[1079px] w-[1440px]">
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
<div
  class={cn(
    blur(),
    'left-[-260px] top-[30px] h-[747.56px] w-[1391.74px] rotate-[-18deg] mix-blend-screen blur-[44px]'
  )}
  style="background: linear-gradient(285.43deg, rgba(148, 78, 110, 0.16) 37.49%, rgba(109, 53, 0, 0.096) 85.53%); transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[calc(50vw-100px)] top-[-50px] h-[925.218px] w-[943.016px] rotate-[-12deg] bg-[hsl(245,63%,24%)]/60 mix-blend-soft-light blur-[58px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[-30px] top-[210px] h-[601.54px] w-[1388.48px] rotate-[-9deg] blur-[44px]'
  )}
  style="background: linear-gradient(285.43deg, rgba(148, 78, 110, 0.08) 37.49%, rgba(109, 53, 0, 0.048) 85.53%); transform: translate3d(0, 0, 0);"
/>

<!-- Blur Planets -->
<div class="absolute left-0 top-[50px]">
  <img src={BlurPlanets} alt="" class="h-full w-full" />
</div>

<!-- Side Gradients -->
<div
  class="absolute left-[-2px] top-0 h-[970px] w-[104px] bg-gradient-to-r from-gray-1/60 to-gray-1/0 2xl:hidden"
/>
<div
  class="absolute right-[-2px] top-0 h-[970px] w-[191px] bg-gradient-to-l from-gray-1/60 to-gray-1/0 2xl:hidden"
/>

<!-- Planets - In Front of side gradients -->
<div
  class="absolute -bottom-[150px] -right-[140px] hidden md:-bottom-[180px] md:-right-[300px] md:block md:h-[600px] md:w-[600px]"
>
  <img src={BigPurplePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="absolute -bottom-[60px] -left-[180px] h-[400px] w-[400px] md:-left-[290px] md:bottom-[0px] md:h-[600px] md:w-[600px]"
>
  <img src={BigPinkPlanet} alt="" class="h-full w-full" />
</div>

<div
  class="absolute right-[100px] top-[100px] hidden scale-150 md:top-[80px] md:block md:scale-90 xl:scale-100"
>
  <img src={OrangePlanet} alt="" class="h-full w-full" />
</div>

<div class="absolute -right-[100px] -top-[70px] w-[450px] md:left-0 md:top-0 xl:left-[250px]">
  <img src={RedPlanet} alt="" class="h-full w-full" />
</div>

<!-- In Front of bottom gradient -->

<!-- Orbit -->
<div class="absolute -bottom-[60px] left-[100px] w-[1211.029px]">
  <img src={Orbit} alt="" class="h-full w-full" />
</div>

<!-- Planet -->
<div class="absolute -bottom-[60px] left-[100px] w-[400px] md:-bottom-[60px] md:w-[450px]">
  <img src={SmallPurplePlanet} alt="" class="h-full w-full" />
</div>
