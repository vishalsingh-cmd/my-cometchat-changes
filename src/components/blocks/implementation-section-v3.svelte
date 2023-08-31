<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn, getLabelInfo } from '$lib/utils';

  import type { ImplementationSectionV3Storyblok } from '$types/bloks';

  import Title from '$components/title.svelte';
  import Panel from '$components/panel.svelte';
  import Media from '$components/media.svelte';

  export let block: ImplementationSectionV3Storyblok;

  const leftItems = block.items.slice(0, 1);
  const rightItems = block.items.slice(1, block.items.length);
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="overflow-hidden bg-gray-1 text-gray-12"
    data-theme={block.theme}
  >
    <div class="container mx-auto">
      {#if block.header[0]}
        {@const { title, description, links } = block.header[0]}
        {@const label = getLabelInfo(block.header[0].label, block.accent_colour || 'orange')}
        <Title {label} {title} {description} buttons={links} size="small" />
      {/if}

      <div class="flex flex-col border-y border-gray-12/[.08] lg:flex-row">
        <div class="flex flex-1 flex-col justify-between border-r border-gray-12/[.08]">
          {#if leftItems[0]}
            <Panel item={leftItems[0]} class={cn('border-0 md:border-0')} />
            <Media media={block.illustration} />
          {/if}
        </div>
        <div class="flex flex-1 flex-col overflow-x-visible">
          {#if rightItems.length > 0}
            {#each rightItems as item, i}
              <Panel
                {item}
                class={cn(
                  'border-r-0 px-container md:border-r-0 md:px-container',
                  i === 0 && 'border-t lg:border-t-0',
                  i === 1 && 'border-b-0 border-r-0 border-t-0 md:border-t'
                )}
              />
            {/each}
          {/if}
        </div>
        <div />
      </div>
    </div>
  </section>
{/if}
