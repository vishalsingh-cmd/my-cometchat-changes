<script lang="ts">
  import Ellipses2 from './components/ellipses2.svelte';
  import Noise2 from './components/noise2.svelte';
  import Stars from './components/stars.svelte';

  import Background1 from './assets/center-title-image/background-1.svg';
</script>

<Noise2 />

<Ellipses2 />

<div class="absolute -left-[240px] top-[69px] w-[2309px]">
  <img src={Background1} alt="" class="w-full" />
</div>

<Stars />
