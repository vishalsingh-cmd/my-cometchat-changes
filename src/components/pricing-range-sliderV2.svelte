<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  let selectedIndex = 0;

  export let maus: string[] = [];
  onMount(() => {
    setTimeout(() => {
      selectedIndex = 1;
    }, 100);
  });
  // Calculate the percentage of progress
  $: progress = (selectedIndex / (maus.length - 1)) * 100;
  // Dynamically update the gradient based on the progress
  $: gradient = `linear-gradient(to right, #6853D6 0%, #9384E1 ${progress}%, #353535 ${progress}%)`;

  const dispatch = createEventDispatcher();
  $: dispatch('index', selectedIndex);

  // Calculate the number of steps
  $: steps = maus.length - 1;

  // Create the vertical line indicators
  $: lines = `repeating-linear-gradient(to right, #ffffff30, #ffffff30 1px, transparent 1px, transparent ${
    100 / steps
  }%)`;
</script>

<div class="mt-10 flex h-full flex-col lg:mt-0 lg:w-[640px]">
  <p class="mb-6 text-center font-medium leading-[27px] md:text-xl">
    How many monthly users do you need?
  </p>
  <input
    type="range"
    class="w-full cursor-pointer appearance-none rounded-full focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    style="--thumb-color: #6852D6; --thumb-border-color: #FCFCFE; --slider-bg-gradient: {gradient}; --slider-lines: {lines};"
    min={0}
    max={steps}
    step={1}
    bind:value={selectedIndex}
  />
  <div class="mt-[14px] flex items-center justify-between">
    {#each maus as mau, index}
      {#if index !== maus.length - 1}
        <p class="ml-2 text-sm opacity-64 md:text-md/tight md:font-medium">
          {mau}
        </p>
      {:else}
        <p class="relaitve text-sm opacity-64 md:text-md/tight md:font-medium">
          {mau} <span class="absolute text-xs">+</span>
        </p>
      {/if}
    {/each}
  </div>
</div>

<style>
  input[type='range'] {
    --thumb-color: white;
    --thumb-border-color: #ccc;
    --slider-bg-gradient: linear-gradient(to right, #8a2be2, #4b0082);
    --slider-lines: repeating-linear-gradient(
      to right,
      #353535,
      #353535 1px,
      transparent 1px,
      transparent 5%
    );
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    border: 4px solid var(--thumb-border-color);
    background-color: var(--thumb-color);
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
    margin-right: 0px;
    margin-bottom: -6px;
  }
  input[type='range']::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border: 4px solid var(--thumb-border-color);
    background-color: var(--thumb-color);
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
    margin-right: 0px;
    margin-bottom: -6px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    background: var(--slider-lines), var(--slider-bg-gradient);
    border-radius: 0.9rem;
  }

  input[type='range']::-moz-range-track {
    background: var(--slider-lines), var(--slider-bg-gradient);
    border-radius: 0.9rem;
  }
</style>
