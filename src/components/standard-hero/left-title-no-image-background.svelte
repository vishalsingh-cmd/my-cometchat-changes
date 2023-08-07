<script lang="ts">
  import Ellipses from './components/ellipses.svelte';
  import Noise from './components/noise.svelte';
  import Vignette from './components/vignette.svelte';

  import Background1 from './assets/left-title-no-image/background-1.svg';
  import Background2 from './assets/left-title-no-image/background-2.svg';

  import Stars from '$components/stars.svelte';
</script>

<Noise />
<Ellipses />
<img src={Background1} alt="" class="absolute left-[52px] top-[127px] w-full" />
<Vignette />
<div class="absolute -top-[68px] left-[25px] h-[803px] w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-gray-8']} />
</div>
<div class="absolute -left-[300px] -top-[20px] w-[2149.59px]">
  <img src={Background2} alt="" />
</div>
<div
  class="absolute bottom-0 left-0 h-[187px] w-[1440px] bg-gradient-to-t from-gray-1/100 to-gray-1/0"
/>
