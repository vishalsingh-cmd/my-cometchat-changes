<script lang="ts">
  let isYearly = false;

  import { activateIndex } from '$lib/stores/pricing-stores-v2';

  function togglePricing() {
    isYearly = !isYearly;
  }
</script>

<div
  class={`mb-[32px] flex w-full items-center ${
    $activateIndex == 3 ? ' justify-center' : 'ml-20 justify-start'
  } `}
>
  <div class="inline-flex items-center gap-4 px-6 py-3">
    <!-- Pay monthly -->
    <span
      class={`text-lg font-[640px] text-white transition-opacity duration-200  ${
        isYearly ? 'opacity-75' : 'opacity-100 '
      }`}
    >
      Pay monthly
    </span>

    <!-- Toggle Switch -->
    <button
      on:click={togglePricing}
      class={`relative h-[20px] w-11 rounded-[50px] bg-[#6852D6] transition-colors`}
      aria-label="Toggle pricing"
    >
      <span
        class="absolute -top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out"
        style="transform: translateX({isYearly ? '5px' : '-24px'});"
      />
    </button>

    <!-- Pay yearly -->
    <span
      class={`text-lg font-[640px] text-white transition-opacity duration-200 ${
        isYearly ? 'opacity-100' : 'opacity-75'
      }`}
    >
      Pay yearly
    </span>

    <!-- Save 20% Badge -->
    <div
      class="ml-[12px] rounded-[7px] border border-gray-11/20 bg-gray-11/[0.04] px-[6px] py-1 text-xs font-semibold text-white"
    >
      Save 20%
    </div>
  </div>
</div>

<style>
  /* Additional custom styles if needed */
</style>
