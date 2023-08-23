<script lang="ts">
  import { cn, getLabelInfo } from '$lib/utils';

  import type { TitleSectionStoryblok } from '$types/bloks';

  import Title from '$components/title.svelte';

  export let block: TitleSectionStoryblok;
</script>

{#if block}
  <section class="bg-gray-1 text-gray-12" data-theme={block.theme === 'light' ? 'light' : 'dark'}>
    {#if block.title && block.title[0]}
      {@const { label, title, description, links, size } = block.title[0]}
      {@const labelInfo = getLabelInfo(label, block.accent_colour || 'orange')}
      <Title
        label={labelInfo}
        {title}
        {description}
        buttons={links}
        alignment={block.alignment || 'center'}
        size={size || 'small'}
      />
    {/if}
  </section>
{/if}
