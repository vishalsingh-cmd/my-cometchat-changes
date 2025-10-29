<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { string } from '$lib/strings';

  import Icon from '$components/icon/icon.svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="relative flex h-[58px] w-full items-center lg:hidden">
  <button class="h-4 w-4" on:click={() => dispatch('toggleFiltersPanel')}>
    <Icon icon="x-close" size="xs" class="text-gray-1 opacity-74" />
  </button>
  <p
    class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-2 text-md font-semibold leading-tight tracking-wide text-gray-1 opacity-74"
  >
    <Icon class="h-4 w-4" icon="filter-02" size="xs" />
    {string('directory.filters')}
  </p>
</div>
