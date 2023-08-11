<script lang="ts">
  import { cva } from 'class-variance-authority';

  import { cn } from '$lib/utils';

  import Comet from './assets/comet.svg';
  import Comet2 from './assets/comet-2.svg';
  import Orbit from './assets/orbit.svg';

  import Stars from '$components/stars.svelte';

  const blur = cva(['absolute', 'origin-center', 'transform', 'rounded-1/2'], {
    variants: {}
  });
</script>

<!-- Top stars -->
<div class="absolute w-full max-w-content">
  <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-orange-8', 'bg-brand-7']} />
</div>

<!-- Mid stars tilted -->
<div
  class="absolute left-[calc(50%-300px)] top-[1200px] w-full max-w-content rotate-45 opacity-60"
  data-theme="light"
>
  <Stars amount={40} backgroundColours={['bg-brand-2']} />
</div>

<!-- Bottom stars -->
<div class="absolute bottom-[500px] left-0 w-[500px]">
  <Stars amount={20} backgroundColours={['bg-brand-9', 'bg-orange-8', 'bg-brand-7']} />
</div>

<!-- Bottom blurs -->
<div
  class={cn(
    blur(),
    'bottom-[-440px] right-[-855px]',
    'h-[480.17px] w-[1857.12px]',
    'rotate-[-32.6deg]',
    'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-11/100 from-0% to-purple-11/0 to-75%',
    'opacity-40',
    'blur-[150px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'bottom-[-62px] right-[-682px]',
    'h-[664.46px] w-[1091.9px]',
    'rotate-[-31.8deg]',
    'bg-[hsla(231,63%,24%,1)]',
    'mix-blend-soft-light',
    'blur-[100px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'bottom-[-660px] right-[-861px]',
    'h-[605.55px] w-[1648.02px]',
    'rotate-[-31.8deg]',
    'bg-[hsla(245,63%,24%,0.3)]',
    'blur-[100px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>

<!-- Top blurs -->
<div
  class={cn(
    blur(),
    'left-[-381px]] bottom-[calc(50%-300px)]',
    'h-[480.17px] w-[1857.12px]',
    'rotate-[32.6deg]',
    'opacity-40',
    'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-11/100 from-0% to-purple-11/0 to-75%',
    'blur-[150px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[-512px]] bottom-[calc(50%-300px)]',
    'h-[687.32px] w-[1627.82px]',
    'rotate-[38.6deg]',
    'opacity-40',
    'blur-[75px]',
    'gradientClass1'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[-9px]] bottom-[200px]',
    'h-[664px] w-[1092px]',
    'rotate-[31.8deg]',
    'mix-blend-soft-light',
    'bg-[hsla(231,63%,24%,1)]',
    'blur-[100px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<div
  class={cn(
    blur(),
    'left-[-272px]] bottom-[calc(50%-300px)]',
    'h-[605.55px] w-[1648.02px]',
    'rotate-[31.8deg]',
    'bg-[hsla(245,63%,24%,0.3)]',
    'blur-[100px]'
  )}
  style="transform: translate3d(0, 0, 0);"
/>
<img
  src={Comet}
  class="absolute -left-[230px] bottom-[200px] z-10 min-w-[400px] sm:-left-[350px] lg:-bottom-[50px]"
  alt=""
/>
<img src={Comet2} class="absolute -right-[150px] bottom-[530px] z-10 w-[270px] sm:hidden" alt="" />
<img src={Orbit} alt="" class="absolute bottom-[337px] right-[-410px]" />

<style lang="postcss">
  .gradientClass1 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.2) 0%, rgba(109, 53, 0, 0.12) 100%);
  }
</style>
