<script lang="ts">
  import type { TitleSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getLabelInfo } from '$lib/utils';

  import Title from '$components/title.svelte';

  export let block: TitleSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class=" mx-auto bg-gray-1 text-gray-12"
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
  >
    {#if block.title && block.title[0]}
      {@const { title, description, links, size } = block.title[0]}
      {@const label = getLabelInfo(block.title[0].label, block.accent_colour || 'orange')}
      <Title
        {label}
        {title}
        {description}
        buttons={links}
        alignment={block.alignment || 'center'}
        size={size || 'small'}
      />
    {/if}
  </section>
{/if}
