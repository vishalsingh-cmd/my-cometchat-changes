<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { activateIndex } from '$lib/stores/pricing-stores-v2';

  const dispatch = createEventDispatcher();

  let isYearly = false;

  function togglePricing() {
    isYearly = !isYearly;

    // SEND VALUE TO PARENT
    dispatch('change', { isYearly });
  }
</script>

<div class={`mb-[32px] ml-0 flex w-full items-center justify-center lg:ml-20 lg:justify-start `}>
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
      class={`relative h-[20px] w-11 rounded-[50px] ${
        !isYearly ? 'bg-gray-11' : 'bg-[#6852D6]'
      } transition-colors`}
      aria-label="Toggle pricing"
    >
      <span
        class="absolute -top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out"
        style="transform: translateX({isYearly ? '5px' : '-24px'});"
      />
    </button>

    <!-- Pay yearly -->
    <div class="flex flex-col gap-3 lg:flex-row lg:gap-5">
      <span
        class={`text-lg font-[640px] text-white transition-opacity duration-200 ${
          isYearly ? 'opacity-100' : 'opacity-75'
        }`}
      >
        Pay yearly
      </span>

      <!-- Save 20% Badge -->
      <div
        class="rounded-[7px] border border-gray-11/20 bg-gray-11/[0.04] px-[6px] py-1 text-xs font-semibold text-white"
      >
        Save 20%
      </div>
    </div>
  </div>
</div>

<style>
  /* Additional custom styles if needed */
</style>
