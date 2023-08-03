<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { string } from '$lib/strings';

  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  import Tag from './tag.svelte';

  export let tags: string[];
  export let selectedTags: string[];

  const dispatch = createEventDispatcher();
</script>

<div class="mt-5 lg:mt-0">
  <p class="mb-4 text-lg font-semibold leading-tight">Industries</p>
  <div class="flex flex-row flex-wrap gap-2">
    {#each tags as tag}
      {@const isTagSelected = selectedTags.includes(tag)}
      <Tag {tag} {isTagSelected} on:selectTag />
    {/each}
  </div>
  <GhostButton
    class="isolate z-30 mt-8 hidden gap-1.5 lg:inline-flex"
    on:click={() => dispatch('clearFilters')}
  >
    {string('directory.reset_filters')}
    <Icon size="xs" icon="trash-01" />
  </GhostButton>
</div>
