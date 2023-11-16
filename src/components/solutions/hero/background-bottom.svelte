<script lang="ts">
  import Noise from './assets/noise.svg';
</script>

<div
  class="blur1 filter-[50px] pointer-events-none absolute -right-[71px] top-[76px] h-[500px] w-[900px] opacity-[0.22] mix-blend-hard-light"
/>
<img class="pointer-events-none absolute bottom-0" src={Noise} alt="" />

<style lang="postcss">
  .blur1 {
    background: radial-gradient(
        42.66% 39.59% at 42.4% 49.22%,
        #ca83fd 0%,
        rgba(202, 131, 253, 0) 100%
      ),
      radial-gradient(
        60.15% 46.06% at 50% 53.94%,
        rgba(255, 127, 62, 0.8) 0%,
        rgba(255, 127, 62, 0) 100%
      ),
      radial-gradient(54.9% 42.15% at 47.06% 59.15%, #141eca 0%, rgba(20, 30, 202, 0) 79.96%);
  }
</style>
