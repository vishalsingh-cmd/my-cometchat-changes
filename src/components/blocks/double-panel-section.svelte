<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn, getLabelInfo } from '$lib/utils';

  import type { DoublePanelSectionStoryblok } from '$types/bloks';

  import Panel from '$components/panel.svelte';
  import Title from '$components/title.svelte';

  import Background from '$components/double-panel-section/background.svelte';

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
        'container relative mx-auto',
        (!block.title || (block.title && block.title.length === 0)) &&
          'border-y border-solid md:flex-row',
        block.theme === 'light' ? 'border-gray-12/8' : 'border-gray-12/8'
      )}
    >
      <div class="absolute -left-[157px] -top-[240px]">
        <Background />
      </div>

      {#if block.title && block.title[0]}
        {@const { label, title, description, links } = block.title[0]}
        {@const labelInfo = getLabelInfo(label, 'brand')}
        <Title label={labelInfo} {title} {description} buttons={links} alignment="center" />
      {/if}
      <div
        class={cn(
          'flex flex-col border-y border-solid md:flex-row',
          block.theme === 'light' ? 'border-gray-12/8' : 'border-gray-2/8'
        )}
      >
        {#each block.panels as panel}
          <Panel item={panel} class="flex-1 last:border-r-0" />
        {/each}
      </div>
    </div>
  </section>
{/if}
