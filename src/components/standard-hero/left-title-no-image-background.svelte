<script lang="ts">
  import Ellipses1 from './components/ellipses1.svelte';
  import Noise1 from './components/noise1.svelte';
  import Stars from './components/stars.svelte';
  import Vignette from './components/vignette.svelte';

  import Orbit from './assets/left-title-no-image/orbit.svg';
  import PinkPlanet from './assets/left-title-no-image/pink-planet.svg';
  import BlurPlanets from './assets/left-title-no-image/blur-planets.svg';
  import OrangePlanet from './assets/left-title-no-image/orange-planet.svg';
  import PurplePlanet from './assets/left-title-no-image/purple-planet.svg';
  import SmallPurplePlanet from './assets/left-title-no-image/small-purple-planet.svg';
</script>

<Noise1 />

<div class="hidden lg:block">
  <Ellipses1 />
</div>

<img src={BlurPlanets} alt="" class="absolute left-0 top-[80px] hidden w-full lg:block" />

<Vignette />

<Stars />

<!-- Planets -->
<div
  class="pointer-events-none absolute -right-[880px] bottom-0 h-[400px] w-[1211px] md:-bottom-[20px] md:-right-[640px]"
>
  <img role="presentation" src={Orbit} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -bottom-[80px] right-[50px] h-[420px] w-[420px] md:-bottom-[180px] md:right-[140px] md:h-[600px] md:w-[600px]"
>
  <img role="presentation" src={OrangePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -bottom-[80px] -right-[200px] h-[400px] w-[400px] md:-bottom-[240px] md:-right-[360px] md:h-[700px] md:w-[700px]"
>
  <img role="presentation" src={PinkPlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -bottom-[60px] -left-[230px] h-[460px] w-[460px] md:-bottom-[290px] md:-left-[400px] md:h-[800px] md:w-[800px]"
>
  <img role="presentation" src={PurplePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -top-[60px] right-[100px] hidden h-[450px] w-[450px] md:block"
>
  <img role="presentation" src={SmallPurplePlanet} alt="" class="h-full w-full" />
</div>
