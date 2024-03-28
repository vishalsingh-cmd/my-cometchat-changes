<script lang="ts">
  import Stars from '$components/stars.svelte';
  import BlurPlanets from './assets/blur-planets.svg';
  import BigOrangePlanet from './assets/orange-planet.svg';
  import BigPurplePlanet from './assets/big-purple-planet.svg';
  import SmallPurplePlanet from './assets/small-purple-planet.svg';
</script>

<!-- Overlay Blur
<div
  class="absolute inset-0 z-10 backdrop-blur-md"
/> -->

<!-- Blurs -->
<div
  class=" absolute -right-[800px] -top-[100px] h-[301px] w-[1003px] origin-center rotate-[-20.768deg] transform rounded-[774.568px;] bg-[rgba(148,78,110,0.20)] opacity-50 blur-[75px] md:-top-[100px] md:left-[calc(50%-371.43px)]"
/>

<!-- Blur Planets -->
<div class=" pointer-events-none absolute right-[100px] top-0 hidden opacity-50 md:block">
  <img role="presentation" src={BlurPlanets} alt="" class="h-full w-full" />
</div>

<!-- Planets - In Front of side gradients -->
<div
  class="pointer-events-none absolute -left-[160px] top-[718px] h-[380px] w-[380px] min-w-[380px] opacity-50 md:-left-[320px] md:-top-[140px] md:h-[700px] md:w-[700px]"
>
  <img role="presentation" src={BigOrangePlanet} alt="" class="h-full w-full" />
</div>

<div
  class="pointer-events-none absolute -right-[220px] bottom-[86px] h-[480px] w-[480px] min-w-[480px] opacity-40 md:-right-[420px] md:bottom-[150px] md:h-[900px] md:w-[900px]"
>
  <img role="presentation" src={BigPurplePlanet} alt="" class="h-full w-full" />
</div>

<div class="pointer-events-none absolute -left-0 top-[200px] hidden opacity-40 lg:block">
  <img role="presentation" src={SmallPurplePlanet} alt="" class="h-full w-full" />
</div>

<!-- Stars -->
<div class="pointer-events-none absolute top-[-68px] h-[803px] w-full opacity-40">
  <Stars amount={40} backgroundColours={['bg-gray-8', 'bg-brand-7']} />
</div>
