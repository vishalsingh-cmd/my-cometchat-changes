<script lang="ts">
  import Button from '$components/buttons/button.svelte';
</script>

<section data-theme="dark" class="overflow-hidden bg-brand-1 px-20 pb-20 pt-[188px]">
  <div class="mx-auto max-w-[528px]">
    <h1 class="text-[60px] font-semibold leading-tighter text-gray-12 text-opacity-[.54]">
      Everything you need to build<br />
      <span class="text-gray-12 text-opacity-100">in-app messaging</span>
    </h1>
    <div class="mt-10 flex gap-3">
      <Button variant="secondary">Start now</Button>
      <Button variant="primary">Chat with us</Button>
    </div>
  </div>
  <div class="relative h-[762px]">
    <div
      class="absolute left-[calc(50vw-371.43px)] top-[167.11px] h-[301px] w-[903px] origin-center rotate-[-19.77deg] transform rounded-50 bg-[#944E6E]/80 blur-[75px]"
    />
    <div
      class="ellipse2 absolute left-[calc(50vw-456.97px)] top-[18.63px] h-[371.2px] w-[1435.66px] origin-center rotate-[-19.97deg] transform rounded-50 blur-[75px]"
    />
    <div
      class="ellipse3 absolute right-[calc(50vw-612.54px)] top-[35px] h-[371.2px] w-[1258.4px] origin-center rotate-[-13.96deg] transform rounded-50 blur-[75px]"
    />
    <div
      class="ellipse4 relative right-[calc(50vw-477.4px)] top-[237.27px] h-[315.1px] w-[1245.75px] origin-center rotate-[-20.77deg] transform rounded-50 mix-blend-screen blur-[75px]"
    />
  </div>
</section>

<style lang="postcss">
  .ellipse2 {
    background: radial-gradient(
      45.9% 125.25% at 49.44% 54.05%,
      rgba(232, 200, 254, 0.8) 0%,
      rgba(232, 200, 254, 0) 76.91%
    );
  }

  .ellipse3 {
    background: linear-gradient(
      285.43deg,
      rgba(148, 78, 110, 0.2) 37.49%,
      rgba(109, 53, 0, 0.12) 85.53%
    );
  }

  .ellipse4 {
    background: linear-gradient(
      285.43deg,
      rgba(148, 78, 110, 0.4) 37.49%,
      rgba(109, 53, 0, 0.24) 85.53%
    );
  }
</style>
