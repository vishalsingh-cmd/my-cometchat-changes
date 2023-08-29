<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import LeftSidePlanets from './assets/left-side-planets.svg';
  import LeftSidePlanetsMobile from './assets/left-side-planets-mobile.svg';
  import Noise from './assets/noise.svg';
  import RightSidePlanets from './assets/right-side-planets.svg';
  import RightSidePlanetsMobile from './assets/right-side-planets-mobile.svg';

  import Stars from '$components/stars.svelte';

  const blur = cva([
    'absolute',
    'origin-center',
    'rounded-1/2',
    '-rotate-[20deg]',
    'blur-[58px]',
    'pointer-events-none'
  ]);
</script>

<div class="pointer-events-none absolute -top-[68px] left-[25px] h-[803px] w-[1389px]">
  <Stars backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-orange-8']} />
</div>

<div
  class="pointer-events-none absolute -bottom-[600px] -right-[600px] h-[803px] w-[1386px] origin-center rotate-[30deg]"
>
  <Stars backgroundColours={['bg-brand-1']} />
</div>

<!-- Noise -->
<div class="pointer-events-none absolute top-0 h-[452px] w-[1440px]">
  <img role="presentation" src={Noise} alt="" />
</div>

<!-- Blurs -->
<div class={cn(blur(), 'left-28 top-10 h-[329.03px] w-[1370.06px] bg-[hsl(245,63%,24%)]/30')} />
<div
  class={cn(
    blur(),
    'blur1 -left-[200px] top-10 h-[345.97px] w-[1339.67px] mix-blend-screen blur-[43px]'
  )}
/>
<div
  class={cn(
    blur(),
    '-right-20 -top-10 h-[428.19px] w-[907.73px] bg-[hsl(245,63%,24%)]/60 mix-blend-soft-light'
  )}
/>
<div class={cn(blur(), 'blur2 -left-10 top-20 h-[262.16px] w-[1372.26px] -rotate-[10deg]')} />

<!-- Planets | Desktop -->
<div
  class="pointer-events-none absolute -left-80 -top-10 hidden h-[676.72px] w-[876.72px] md:block"
>
  <img role="presentation" src={LeftSidePlanets} alt="" />
</div>

<div class="pointer-events-none absolute -right-10 top-0 hidden h-[487px] w-[519px] md:block">
  <img role="presentation" src={RightSidePlanets} alt="" />
</div>

<!-- Planets | Mobile -->
<div class="pointer-events-none absolute -left-60 top-0 h-[889.15px] w-[789.15px] md:hidden">
  <img role="presentation" src={LeftSidePlanetsMobile} alt="" />
</div>
<div class="absolute -right-40 -top-10 h-[320px] w-[320px] md:hidden">
  <img role="presentation" src={RightSidePlanetsMobile} alt="" class="h-full w-full" />
</div>

<style>
  .blur1 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.16) 0%, rgba(109, 53, 0, 0.1) 100%);
  }

  .blur2 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.08) 0%, rgba(109, 53, 0, 0.05) 100%);
  }
</style>
