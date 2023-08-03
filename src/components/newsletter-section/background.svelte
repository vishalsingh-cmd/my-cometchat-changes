<script lang="ts">
  import Background from './assets/background.svg';
</script>

<div class="absolute -right-[450px] -top-[250px] hidden w-[1351px] md:block">
  <img src={Background} alt="" />
</div>
<div
  class="blur1 absolute -bottom-[100px] -right-[100px] h-[248.97px] w-[248.97px] origin-center rotate-[-36.76deg] transform rounded-full opacity-30 blur-[50px] md:hidden"
/>

<style lang="postcss">
  .blur1 {
    background: linear-gradient(290deg, #fcb8a8 0%, #b968a4 48.44%, #756cf6 100%);
  }
</style>
