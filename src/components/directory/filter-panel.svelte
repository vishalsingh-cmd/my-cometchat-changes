<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { string } from '$lib/strings';
  import { cn } from '$lib/utils';

  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  import Tag from './tag.svelte';
  import Accordion from '$components/accordion.svelte';

  export let panels: {
    type:
      | 'category'
      | 'tutorial_type'
      | 'industry'
      | 'industries'
      | 'integration_tool'
      | 'product'
      | 'product-categories'
      | 'platform'
      | 'features'
      | 'language'
      | 'framework';
    title: string;
    tags: {
      name: string;
      value: string;
    }[];
    selectedTags: string[];
  }[];

  const dispatch = createEventDispatcher();
</script>

<div class="mt-5 flex flex-col gap-4 lg:mt-0">
  {#each panels as panel, i}
    <Accordion id={panel.title + i}>
      <div slot="header" let:expanded let:attributes let:onClick>
        <button
          {...attributes}
          on:click={onClick}
          class="flex w-full justify-between border-t border-solid border-gray-1/10 pb-4 pt-8"
        >
          <p
            class={`text-md font-semibold leading-tight ${
              expanded ? 'text-gray-1' : 'text-gray-1/74'
            }`}
          >
            {panel.title}
          </p>
          <Icon
            icon="chevron-up"
            size="xs"
            class={cn('text-gray-1 transition-transform duration-300', expanded && 'rotate-180')}
          />
        </button>
      </div>
      <div class="flex flex-col gap-2 pb-4">
        {#each panel.tags as tag}
          {@const isTagSelected = panel.selectedTags.includes(tag.value)}
          {@const panelType = panel.type}
          <Tag {tag} {panelType} {isTagSelected} on:selectTag />
        {/each}
      </div>
    </Accordion>
  {/each}

  <GhostButton
    class="isolate z-30 mt-5 hidden gap-1.5 text-gray-1 lg:inline-flex"
    on:click={() => dispatch('clearFilters')}
  >
    {string('directory.reset_filters')}
    <Icon size="xs" icon="trash-01" />
  </GhostButton>
</div>
