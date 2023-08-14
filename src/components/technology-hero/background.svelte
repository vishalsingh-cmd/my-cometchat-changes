<script lang="ts">
  import BigComet from './assets/big-comet.svg';
  import SmallComet from './assets/small-comet.svg';
  import Ellipse from './assets/ellipse.svg';
  import Noise from './assets/noise.svg';

  import Stars from '$components/stars.svelte';
</script>

<div class="absolute right-0 top-0 w-full">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-gray-8', 'bg-brand-7']} />
</div>

<img src={Ellipse} alt="" role="presentation" class="absolute -bottom-[20px] -left-[300px]" />
<img
  src={BigComet}
  alt=""
  role="presentation"
  class="absolute -bottom-[180px] -left-[150px] min-w-[600px] md:-bottom-[180px] md:-left-[340px] md:min-w-[1200px]"
/>

<img
  src={SmallComet}
  alt=""
  role="presentation"
  class="absolute -bottom-[50px] -right-[66px] w-[160px] md:w-[250px] xl:bottom-[50px] xl:right-[50px]"
/>
<img src={Noise} alt="" role="presentation" class="absolute top-0 h-full" />
