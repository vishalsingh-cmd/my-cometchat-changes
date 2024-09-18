<script lang="ts">
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  const options = ['Pay Monthly', 'Pay Yearly'];

  export let isBilledAnnually = true;

  const dispatch = createEventDispatcher();
  $: dispatch('change', isBilledAnnually);
</script>

<div
  class="relative flex h-[54px] w-[340px] items-center justify-around rounded-2xl border border-gray-8 p-1 shadow-2xl"
  style="background-color:rgba(250, 250, 255, 0.09) ;box-shadow: 0px 0px 40px rgba(104, 83, 214, 0.24);"
>
  <div
    class={cn(
      'absolute -z-10 h-[85%] rounded-2xl bg-brand-9 transition-transform duration-300',
      isBilledAnnually && 'w-[186px] translate-x-[72px]',
      !isBilledAnnually && 'w-[150px] -translate-x-[90px]'
    )}
  />
  <button
    on:click={() => (isBilledAnnually = !isBilledAnnually)}
    class={cn(
      'h-full w-[250px] text-lg font-semibold leading-[20px]',
      isBilledAnnually && 'opacity-75'
    )}
    >{options[0]}
  </button>
  <button
    on:click={() => (isBilledAnnually = !isBilledAnnually)}
    class={cn(
      'h-full w-full text-lg font-semibold leading-[20px]',
      !isBilledAnnually && 'opacity-75'
    )}
    >{options[1]}
    <p class="inline rounded-lg border p-1 text-xs font-semibold leading-[16.8px]">Save 20%</p>
  </button>
</div>
