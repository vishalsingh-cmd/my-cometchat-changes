<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  import Planets from './assets/planets.svg';
  import Noise from './assets/noise.svg';

  const blur = cva(['absolute', 'origin-center', 'transform', 'rounded-1/2']);
</script>

<!-- Stars -->
<div class="absolute top-[-68px] h-[803px] w-[1389px]">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-orange-8']} />
</div>
<div
  class="absolute left-[50vw] top-[400px] h-[803px] w-[1386px] origin-center rotate-[30deg]"
  data-theme="light"
>
  <Stars amount={40} backgroundColours={['bg-brand-1']} />
</div>

<!-- Noise -->
<div class="absolute top-0 h-[1079px] w-[1440px]">
  <img src={Noise} alt="" />
</div>

<!-- Blurs -->
<div
  class={cn(
    blur(),
    'left-[180px] top-[80px] h-[710.96px] w-[1423.31px] rotate-[-18deg] bg-[hsl(245,63%,24%)]/30 blur-[58px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[-260px] top-[30px] h-[747.56px] w-[1391.74px] rotate-[-18deg] mix-blend-screen blur-[44px]'
  )}
  style="background: linear-gradient(285.43deg, rgba(148, 78, 110, 0.16) 37.49%, rgba(109, 53, 0, 0.096) 85.53%); transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[calc(50vw-100px)] top-[-50px] h-[925.218px] w-[943.016px] rotate-[-12deg] bg-[hsl(245,63%,24%)]/60 mix-blend-soft-light blur-[58px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[-30px] top-[210px] h-[601.54px] w-[1388.48px] rotate-[-9deg] blur-[44px]'
  )}
  style="background: linear-gradient(285.43deg, rgba(148, 78, 110, 0.08) 37.49%, rgba(109, 53, 0, 0.048) 85.53%); transform: translate3d(0, 0, 0);"
/>

<!-- Gradient -->
<div
  class="absolute bottom-0 left-0 h-[398px] w-full bg-gradient-to-t from-gray-1/100 to-gray-1/0"
/>

<!-- Planets -->
<div
  class="absolute left-[-180px] top-0 w-[1509px] md:left-auto md:top-5 md:h-[876px] md:w-[1871px]"
>
  <img src={Planets} alt="" class="h-full w-full" />
</div>

<!-- Gradients -->
<div
  class="absolute left-[-2px] top-0 h-[970px] w-[104px] bg-gradient-to-r from-gray-1/60 to-gray-1/0"
/>
<div
  class="absolute right-[-2px] top-0 h-[970px] w-[191px] bg-gradient-to-l from-gray-1/60 to-gray-1/0"
/>
