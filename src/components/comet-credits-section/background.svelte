<script lang="ts">
  import Stars from '$components/stars.svelte';
  import OrangePlanet from './assets/orange-planet.svg';
</script>

<!-- Stars -->
<div class="pointer-events-none absolute top-[100px] h-full w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>

<div
  class="ellipse absolute -right-[800px] -top-[150px] h-[1394.097px] w-[2095.365px] origin-center -rotate-[31.407deg] transform opacity-40 mix-blend-hard-light blur-[50px] md:-top-[400px] md:right-1/2 md:translate-x-1/2"
/>

<!-- Planets -->
<div
  class="pointer-events-none absolute -right-[320px] -top-[380px] z-20 hidden h-[700px] w-[700px] md:block xl:-right-[360px] xl:-top-[420px] xl:h-[800px] xl:w-[800px]"
>
  <img role="presentation" src={OrangePlanet} alt="" class="h-full w-full" />
</div>

<style lang="postcss">
  .ellipse {
    background: radial-gradient(
        38.96% 17.2% at 53.66% 53.67%,
        rgba(202, 131, 253, 0.5) 0%,
        rgba(202, 131, 253, 0) 100%
      ),
      radial-gradient(
        101.78% 31.2% at 39.5% 60.15%,
        rgba(255, 127, 62, 0.3) 0%,
        rgba(255, 113, 41, 0) 71.73%
      ),
      radial-gradient(
        85.45% 76.8% at 81.67% 32.23%,
        rgba(20, 30, 202, 0.3) 0%,
        rgba(20, 30, 202, 0) 79.96%
      ),
      rgba(10, 9, 20, 0.2);
  }
</style>
