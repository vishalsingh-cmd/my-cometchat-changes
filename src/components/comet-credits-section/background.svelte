<script lang="ts">
  import Stars from '$components/stars.svelte';
  import OrangePlanet from './assets/orange-planet.svg';
</script>

<!-- Stars -->
<div class="pointer-events-none absolute top-[100px] h-full w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>

<!-- Planets -->

<div class="pointer-events-none absolute">
  <img role="presentation" src={OrangePlanet} alt="" class="h-full w-full" />
</div>
