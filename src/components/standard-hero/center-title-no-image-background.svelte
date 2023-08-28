<script lang="ts">
  import Background1 from './assets/center-title-no-image/background-1.svg';
  import Background2 from './assets/center-title-no-image/background-2.svg';

  import Stars from '$components/stars.svelte';

  import Ellipses1 from './components/ellipses1.svelte';
  import Noise1 from './components/noise1.svelte';
  import StarsComponent from './components/stars.svelte';
  import Vignette from './components/vignette.svelte';
</script>

<StarsComponent />
<div class="absolute -right-[400px] top-[171px] h-[1386px] w-[803px] origin-center -rotate-[30deg]">
  <Stars amount={40} backgroundColours={['bg-gray-1']} />
</div>

<Noise1 />

<Ellipses1 />

<img src={Background1} alt="" class="absolute left-[52px] top-[71px] w-full" />

<Vignette />

<img src={Background2} alt="" class="absolute -bottom-[20px] -left-[200px] w-[519px]" />
