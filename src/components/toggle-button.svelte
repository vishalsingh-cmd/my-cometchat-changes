<script>
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let isChecked = false;

  function toggle() {
    isChecked = !isChecked;
    dispatch('toggle', isChecked);
  }
</script>

<div class="flex flex-row items-center justify-center gap-2 font-medium">
  <span class={cn(isChecked ? 'opacity-50' : 'opacity-100')}>Monthly</span>

  <button
    type="button"
    class={cn(
      'focus:ring-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
      isChecked ? 'bg-brand-9' : 'bg-gray-5'
    )}
    role="switch"
    aria-checked="false"
    on:click={toggle}
  >
    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
    <span
      aria-hidden="true"
      class={cn(
        'pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        isChecked ? 'translate-x-5' : 'translate-x-0'
      )}
    />
  </button>

  <span class={cn(isChecked ? 'opacity-100' : 'opacity-50')}>Yearly</span>
</div>
