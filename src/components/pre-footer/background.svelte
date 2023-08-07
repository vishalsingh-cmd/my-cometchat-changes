<script lang="ts">
  import Ellipse from './assets/ellipse.svg';
  import BigComet from './assets/big-comet.svg';
  import SmallComet from './assets/small-comet.svg';
  import Stars from '$components/stars.svelte';
</script>

<div class="absolute top-0 h-full w-full">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>

<img alt="" src={Ellipse} class="absolute top-0 w-full" />
<img
  alt=""
  src={BigComet}
  class="absolute -left-[100px] -top-[120px] h-[250px] w-[250px] lg:-left-[200px] lg:-top-[200px] lg:h-[550px] lg:w-[550px]"
/>
<img
  alt=""
  src={SmallComet}
  class="absolute -bottom-36 -right-[200px] h-[420px] w-[420px] lg:-bottom-32 lg:-right-[100px] lg:h-[500px] lg:w-[500px]"
/>
