<script lang="ts">
  import Stars from '$components/stars.svelte';
  import PinkPlanet from './assets/pink-planet.svg';
  import BlurPlanets from './assets/blur-planets.svg';
  import OrangePlanet from './assets/orange-planet.svg';
  import PurplePlanet from './assets/purple-planet.svg';
</script>

<!-- Blurs -->
<div
  class="absolute -right-[800px] -top-[100px] h-[301px] w-[1003px] origin-center rotate-[-20.768deg] transform rounded-[774.568px;] bg-[rgba(148,78,110,0.20)] blur-[75px] md:-top-[100px] md:left-[calc(50%-371.43px)]"
/>

<!-- Blur Planets -->
<div class="pointer-events-none absolute right-[100px] top-0 hidden md:block">
  <img role="presentation" src={BlurPlanets} alt="" class="h-full w-full" />
</div>

<!-- Planets - In Front of side gradients -->
<div
  class="pointer-events-none absolute -left-[150px] top-[580px] h-[340px] w-[340px] xl:-left-[20px] xl:-top-[200px] xl:h-[480px] xl:w-[480px]"
>
  <img role="presentation" src={OrangePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -bottom-[140px] -right-[350px] h-[700px] w-[700px] xl:-right-[480px] xl:bottom-[86px] xl:h-[1000px] xl:w-[1000px]"
>
  <img role="presentation" src={PinkPlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute -bottom-[300px] -left-[730px] hidden xl:block">
  <img role="presentation" src={PurplePlanet} alt="" class="h-full w-full" />
</div>

<!-- Stars -->
<div class="pointer-events-none absolute top-[-68px] h-full w-full">
  <Stars amount={40} backgroundColours={['bg-gray-8', 'bg-brand-7']} />
</div>
