<script lang="ts">
  import Ellipses2 from './components/ellipses2.svelte';
  import Noise2 from './components/noise2.svelte';
  import Stars from './components/stars.svelte';

  import Background1 from './assets/left-title-image/background-1.svg';
</script>

<Noise2 />

<Ellipses2 />

<div class="absolute -right-[500px] top-20 w-[1007.13px]">
  <img src={Background1} alt="" class="w-full" />
</div>

<Stars />
