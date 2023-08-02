<script lang="ts">
  import Stars from '$components/stars.svelte';
  import BackgroundDesktop from './assets/background-desktop.svg';
  import BackgroundMobile from './assets/background-mobile.svg';
  import Noise from './assets/noise.svg';
</script>

<div class="absolute bottom-0 left-0">
  <img src={Noise} alt="" />
</div>
<div
  class="blur2 absolute -top-[200.13px] left-[251.15px] h-[747.56px] w-[1391.74px] origin-center rotate-[9.71deg] transform rounded-full blur-[44px]"
/>
<div
  class="absolute -right-[200px] -top-[511.12px] h-[925.218px] w-[943.016px] origin-center rotate-[-11.607deg] transform rounded-full bg-[hsl(231,63%,24%)] mix-blend-soft-light blur-[59px]"
/>
<div
  class="blur1 absolute -top-[336.13px] left-[46.54px] h-[747.56px] w-[1391.74px] origin-center rotate-[-17.44deg] transform rounded-full mix-blend-screen blur-[44px]"
/>
<div
  class="absolute -top-[336.13px] left-[484.9px] h-[710.96px] w-[1423.31px] origin-center rotate-[-17.44deg] transform rounded-full bg-[hsl(245,63%,24%)]/30 blur-[59px]"
/>
<div
  class="absolute bottom-0 left-0 h-[350px] w-full bg-gradient-to-r from-gray-1/100 to-gray-1/0"
/>
<div class="absolute left-[51px] top-0 h-[803px] w-[1389px]">
  <Stars backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-gray-8']} />
</div>
<div class="absolute left-0 top-0 h-[803px] w-[1389px]">
  <Stars backgroundColours={['bg-brand-9', 'bg-brand-7', 'bg-gray-8']} />
</div>
<div class="absolute -bottom-[250px] left-[-200px] hidden w-[2235.13px] md:block">
  <img src={BackgroundDesktop} alt="" />
</div>
<div class="absolute -bottom-[100px] -left-[250px] block w-[1290.1px] md:hidden">
  <img src={BackgroundMobile} alt="" />
</div>

<style lang="postcss">
  .blur1 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.16) 0%, rgba(109, 53, 0, 0.1) 100%);
  }

  .blur2 {
    background: linear-gradient(302deg, rgba(148, 78, 110, 0.08) 0%, rgba(109, 53, 0, 0.05) 100%);
  }
</style>
