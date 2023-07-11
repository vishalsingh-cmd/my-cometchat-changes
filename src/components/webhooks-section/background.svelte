<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  import Illustration from './assets/illustration.svg';

  const blur = cva(['absolute', 'origin-center', 'transform', 'rounded-1/2']);
</script>

<div
  class={cn(
    blur(),
    'bottom-[0px] right-[-400px] h-[328px] w-[892px] rotate-[31.8deg] bg-[hsl(245,63%,24%)]/30 blur-[100px]'
  )}
/>
<div
  class={cn(
    blur(),
    'bottom-[-150px] right-[-450px] h-[359px] w-[591px] rotate-[31.8deg] bg-[#172365] blur-[100px]'
  )}
/>
<div
  class={cn(
    blur(),
    'bottom-[-40px] right-[-100px] h-[372px] w-[881px] rotate-[38.6deg] blur-[75px]'
  )}
  style="background: linear-gradient(302deg, rgba(148, 78, 110, 0.20) 0%, rgba(109, 53, 0, 0.12) 100%)"
/>
<div
  class={cn(
    blur(),
    'bottom-[-40px] right-[-600px] h-[260px] w-[1005px] rotate-[32.6deg] blur-[75px]'
  )}
  style="background: radial-gradient(126.59% 49.35% at 49.44% 54.05%, rgba(232, 200, 254, 0.40) 0%, rgba(232, 200, 254, 0.00) 76.91%);"
/>
<div class="absolute left-0 top-0 h-full w-full">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-gray-8', 'bg-brand-7']} />
</div>
<img
  src={Illustration}
  alt=""
  class="absolute bottom-12 right-[calc(50vw-250px)] max-w-[515px] md:bottom-[-50px] md:left-auto md:right-[-80px] md:max-w-[870px] lg:bottom-[30px] xl:bottom-auto xl:top-[56px]"
/>
