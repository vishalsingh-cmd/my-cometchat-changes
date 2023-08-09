<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { DoublePanelSectionStoryblok } from '$types/bloks';

  import Panel from '$components/panel.svelte';

  export let block: DoublePanelSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="bg-gray-1 text-gray-12"
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
  >
    <div
      class={cn(
        'container mx-auto flex flex-col border-solid md:flex-row md:border-y',
        block.theme === 'light' ? 'border-gray-12/8' : 'border-gray-2/8'
      )}
    >
      {#each block.panels as panel}
        <Panel item={panel} />
      {/each}
    </div>
  </section>
{/if}
