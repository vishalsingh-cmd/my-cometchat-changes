<script lang="ts">
  // import Stars from '$components/stars.svelte';
  // import BlurPlanets from './assets/blur-planets.svg';
  // import BigPurplePlanet from './assets/big-purple-planet.svg';
  // import SmallPurplePlanet from './assets/small-purple-planet.svg';
  import FarAwayGalaxy from './assets/far-away-galaxy.svg';
</script>

<!-- Overlay Blur
<div
  class="absolute inset-0 z-10 backdrop-blur-md"
/> -->

<!-- Blurs -->
<!-- <div class="relative h-[900px] w-full"> -->
<!-- <div
    class="absolute -right-[800px] -top-[100px] h-[301px] w-[1003px] origin-center rotate-[-20.768deg] transform rounded-[774.568px;] bg-[rgba(148,78,110,0.20)] opacity-50 blur-[75px] md:-top-[100px] md:left-[calc(50%-371.43px)]"
  /> -->

<!-- Blur Planets -->
<!-- <div class=" pointer-events-none absolute right-[100px] top-0 hidden opacity-50 md:block">
    <img role="presentation" src={BlurPlanets} alt="" class="h-full w-full" />
  </div> -->

<!-- Planets - In Front of side gradients -->
<div class="pointer-events-none">
  <img role="presentation" src={FarAwayGalaxy} alt="" class="h-full w-full" />
</div>

<!-- <div
    class="pointer-events-none absolute -right-[220px] bottom-[86px] h-[480px] w-[480px] min-w-[480px] opacity-40 md:-right-[420px] md:bottom-[150px] md:h-[900px] md:w-[900px]"
  >
    <img role="presentation" src={BigPurplePlanet} alt="" class="h-full w-full" />
  </div> -->

<!-- <div class="pointer-events-none absolute -left-0 top-[200px] hidden opacity-40 lg:block">
    <img role="presentation" src={SmallPurplePlanet} alt="" class="h-full w-full" />
  </div> -->

<!-- Stars -->
<!-- <div class="pointer-events-none absolute top-[-68px] h-[803px] w-full opacity-40">
    <Stars amount={40} backgroundColours={['bg-gray-8', 'bg-brand-7']} />
  </div> -->
<!-- </div> -->
<!-- /* Developer */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 60px;
isolation: isolate;

width: 304px;
height: 660px;

background: linear-gradient(180deg, rgba(104, 83, 214, 0.06) 0%, rgba(104, 83, 214, 0.006) 100%), rgba(250, 250, 255, 0.09);
box-shadow: 0px 0px 40px rgba(104, 83, 214, 0.24);
border-radius: 0px 0px 24px 24px;

/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 1; -->
