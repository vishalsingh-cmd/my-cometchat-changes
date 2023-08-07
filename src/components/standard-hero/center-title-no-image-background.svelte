<script lang="ts">
  import Background1 from './assets/center-title-no-image/background-1.svg';
  import Background2 from './assets/center-title-no-image/background-2.svg';

  import Stars from '$components/stars.svelte';

  import Ellipses from './components/ellipses.svelte';
  import Noise1 from './components/noise-1.svelte';
  import Vignette from './components/vignette.svelte';
</script>

<div class="absolute -top-[68px] left-[25px] h-[1389px] w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-orange-8']} />
</div>
<div class="absolute -right-[400px] top-[171px] h-[1386px] w-[803px] origin-center -rotate-[30deg]">
  <Stars amount={40} backgroundColours={['bg-gray-1']} />
</div>

<Noise1 />

<Ellipses />

<img src={Background1} alt="" class="absolute left-[52px] top-[71px] w-full" />

<Vignette />

<img src={Background2} alt="" class="absolute -bottom-[20px] -left-[200px] w-[519px]" />

<div
  class="absolute bottom-0 left-0 h-[187px] w-[1440px] bg-gradient-to-t from-gray-1/100 to-gray-1/0"
/>
