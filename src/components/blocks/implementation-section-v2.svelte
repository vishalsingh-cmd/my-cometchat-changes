<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn, getLabelInfo } from '$lib/utils';

  import type { ImplementationSectionV2Storyblok } from '$types/bloks';

  import Title from '$components/title.svelte';
  import Panel from '$components/panel.svelte';
  import Media from '$components/media.svelte';

  export let block: ImplementationSectionV2Storyblok;

  const leftItems = block.items.slice(0, block.items.length - 1);
  const rightItems = block.items.slice(block.items.length - 1);
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="overflow-hidden bg-gray-1 text-gray-12"
    data-theme="dark"
  >
    <div class="container mx-auto">
      {#if block.header[0]}
        {@const { label, title, description, links } = block.header[0]}
        {@const labelInfo = getLabelInfo(label, block.accent_colour || 'orange')}
        <Title label={labelInfo} {title} {description} buttons={links} size="small" />
      {/if}

      <div class="flex flex-col border-y border-gray-12/[.08] lg:flex-row">
        <div class="flex flex-1 flex-col">
          {#if leftItems.length > 0}
            {#each leftItems as item, i}
              <Panel
                {item}
                class={cn(
                  'px-container md:px-container',
                  i !== 0 && 'border-t border-gray-12/[.08]'
                )}
              />
            {/each}
          {/if}
        </div>
        <div class="flex flex-1 flex-col overflow-x-visible">
          {#if rightItems[0]}
            <Panel item={rightItems[0]} class="px-container md:border-r-0 md:px-container" />
            <Media
              media={block.illustration}
              class="-translate-x-10 scale-125 transform md:translate-x-0"
            />
          {/if}
        </div>
        <div />
      </div>
    </div>
  </section>
{/if}
