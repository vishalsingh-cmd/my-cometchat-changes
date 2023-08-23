<script lang="ts">
  import Ellipses1 from './components/ellipses1.svelte';
  import Noise1 from './components/noise1.svelte';
  import Stars from './components/stars.svelte';
  import Vignette from './components/vignette.svelte';

  import Background1 from './assets/left-title-no-image/background-1.svg';
  import Background2 from './assets/left-title-no-image/background-2.svg';
</script>

<Noise1 />

<Ellipses1 />

<img src={Background1} alt="" class="absolute left-[52px] top-[127px] w-full" />

<Vignette />

<Stars />

<div class="absolute -left-[300px] -top-[20px] w-[2149.59px]">
  <img src={Background2} alt="" />
</div>

<div
  class="absolute -left-1/2 bottom-0 h-[187px] w-screen bg-gradient-to-t from-gray-1/100 to-gray-1/0"
/>
