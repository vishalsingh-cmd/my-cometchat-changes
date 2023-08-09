<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { string } from '$lib/strings';
  import { cn } from '$lib/utils';

  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  import Tag from './tag.svelte';

  export let panels: {
    type:
      | 'technology'
      | 'tutorial_type'
      | 'industries'
      | 'integration_tool'
      | 'category'
      | 'industry';
    title: string;
    tags: string[];
    selectedTags: string[];
  }[];

  const dispatch = createEventDispatcher();
</script>

<div class="mt-5 lg:mt-0">
  {#each panels as panel, i}
    <div class={cn('border-t border-solid border-gray-12/8 pt-8', i !== 0 && 'mt-8')}>
      <p class="mb-4 text-lg font-semibold leading-tight">{panel.title}</p>
      <div class="flex flex-row flex-wrap gap-2">
        {#each panel.tags as tag}
          {@const isTagSelected = panel.selectedTags.includes(tag)}
          {@const panelType = panel.type}
          <Tag {tag} {panelType} {isTagSelected} on:selectTag />
        {/each}
      </div>
    </div>
  {/each}
  <GhostButton
    class="isolate z-30 mt-8 hidden gap-1.5 lg:inline-flex"
    on:click={() => dispatch('clearFilters')}
  >
    {string('directory.reset_filters')}
    <Icon size="xs" icon="trash-01" />
  </GhostButton>
</div>
