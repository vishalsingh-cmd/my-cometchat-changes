<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  import Illustration from './assets/illustration.svg';
  import IllustrationMobile from './assets/illustration-mobile.svg';

  const blur = cva(['absolute', 'origin-center', 'transform', 'rounded-1/2']);
</script>

<div
  class={cn(
    blur(),
    'bottom-[-150px] right-[-450px] h-[359px] w-[591px] rotate-[31.8deg] bg-[#172365] blur-[100px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'bottom-[-40px] right-[-100px] h-[372px] w-[881px] rotate-[38.6deg] blur-[75px]'
  )}
  style="background: linear-gradient(302deg, rgba(148, 78, 110, 0.20) 0%, rgba(109, 53, 0, 0.12) 100%); transform: translate3d(0, 0, 0);"
/>

<div class="absolute left-0 top-0 h-full w-full">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-gray-8', 'bg-brand-7']} />
</div>

<div
  class="absolute bottom-0 left-0 h-[80px] w-full bg-gradient-to-b from-[rgba(10,9,20,0.00)] to-[#0A0914]"
/>

<img
  src={Illustration}
  alt=""
  class="absolute bottom-[-50px] left-auto right-[-80px] hidden max-w-[870px] xl:bottom-auto xl:top-[56px] xl:block"
/>

<img
  src={IllustrationMobile}
  alt=""
  class="absolute bottom-12 right-0 min-w-[515.113px] max-w-[800px] translate-x-[16%] pt-8 xl:hidden"
/>
