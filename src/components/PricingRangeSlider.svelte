<script lang="ts">
  import { convertToK } from '$lib/strings/utils';
  import { createEventDispatcher } from 'svelte';

  interface Mau {
    _uid: string;
    value: string;
    component: string;
  }

  export let maus: Mau[] = [];

  let selectedIndex = 1;

  $: maxValue = maus[maus.length - 1].value;
  $: stepValue = Math.floor(maus.length / 5);
  $: currentValue = maus[selectedIndex].value;

  // Calculate the percentage of progress
  $: progress = (selectedIndex / (maus.length - 1)) * 100;

  // Dynamically update the gradient based on the progress
  $: gradient = `linear-gradient(to right, #5D41CE 0%, #a993ff ${progress}%, #353535 ${progress}%)`;

  // display the current value
  const dispatch = createEventDispatcher();

  $: dispatch('value', currentValue);

  // Calculate the number of steps
  $: steps = maus.length - 1;

  // Create the vertical line indicators
  $: lines = `repeating-linear-gradient(to right, #ffffff30, #ffffff30 1px, transparent 1px, transparent ${
    100 / steps
  }%)`;
</script>

<div class="mt-5 flex w-full flex-col">
  <label for="steps-range-slider-usage" class="sr-only">Grow plan pricing range</label>
  <input
    type="range"
    class="w-full cursor-pointer appearance-none rounded-full focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    style="--thumb-color: white; --thumb-border-color: #55506C; --slider-bg-gradient: {gradient}; --slider-lines: {lines};"
    id="steps-range-slider-usage"
    min="0"
    max={steps}
    step={stepValue}
    bind:value={selectedIndex}
  />
  <div class="mt-3 flex items-center justify-between">
    <p class="text-lg/tight font-semibold text-white">{convertToK(Number(currentValue))} MAU</p>
    <p class="text-lg/tight font-semibold opacity-64">{convertToK(Number(maxValue))}</p>
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
    width: 20px;
    height: 20px;
    border: 4px solid var(--thumb-border-color);
    background-color: var(--thumb-color);
    border-radius: 50%;
    cursor: pointer;
    margin-top: 0px;
    margin-right: -5px;
  }
  input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 4px solid var(--thumb-border-color);
    background-color: var(--thumb-color);
    border-radius: 50%;
    cursor: pointer;
    margin-top: 0px;
    margin-right: -5px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    background: var(--slider-lines), var(--slider-bg-gradient);
    border-radius: 0.5rem;
  }

  input[type='range']::-moz-range-track {
    background: var(--slider-lines), var(--slider-bg-gradient);
    border-radius: 0.5rem;
  }
</style>
