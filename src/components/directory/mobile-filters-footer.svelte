<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { string } from '$lib/strings';

  import Button from '$components/buttons/button.svelte';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  const dispatch = createEventDispatcher();
</script>

<div
  class="absolute bottom-0 left-0 flex h-[60px] w-full items-center justify-between border-t border-gray-12/8 px-5 lg:hidden"
>
  <GhostButton class="gap-[6px]" on:click={() => dispatch('clearFiltersAndClose')}>
    {string('directory.reset_filters')}
    <Icon size="xs" icon="trash-01" />
  </GhostButton>
  <Button variant="primary" size="sm" on:click={() => dispatch('toggleFiltersPanel')}>
    {string('directory.apply')}
  </Button>
</div>
