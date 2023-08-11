<script lang="ts">
  import Ellipse from './assets/ellipse.svg';
  import BigComet from './assets/big-comet.svg';
  import SmallComet from './assets/small-comet.svg';
  import Stars from '$components/stars.svelte';
</script>

<div class="absolute top-0 h-full w-full">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>

<img alt="" role="presentation" src={Ellipse} class="absolute top-0 w-full" />
<img
  alt=""
  role="presentation"
  src={BigComet}
  class="absolute -left-[100px] -top-[120px] h-[250px] w-[250px] md:-left-[150px] md:-top-[150px] md:h-[400px] md:w-[400px] lg:-left-[240px] lg:-top-[220px] lg:h-[600px] lg:w-[600px]"
/>
<img
  alt=""
  role="presentation"
  src={SmallComet}
  class="absolute -bottom-[60px] -right-[120px] h-[250px] w-[250px] lg:bottom-[70px] lg:right-0 lg:h-[250px] lg:w-[250px]"
/>
<div
  class="absolute bottom-0 left-0 h-[80px] w-full bg-gradient-to-b from-[rgba(10,9,20,0.00)] to-[#0A0914]"
/>
