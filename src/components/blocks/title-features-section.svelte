<script lang="ts">
  import type { TitleFeaturesSectionStoryblok } from '$types/bloks';

  import { getLabelInfo } from '$lib/utils';

  import Title from '$components/title.svelte';
  import TitleImageSection from './title-image-section.svelte';

  export let block: TitleFeaturesSectionStoryblok;
</script>

{#if block}
  <section>
    {#if block.title && block.title[0]}
      {@const labelInfo = getLabelInfo(block.title[0].label, 'brand')}
      <Title
        label={labelInfo}
        title={block.title[0].title}
        description={block.title[0].description}
        buttons={block.title[0].links}
        alignment="center"
        size="small"
      />
    {/if}

    {#if block.features && block.features.length > 0}
      {#each block.features as feature}
        <TitleImageSection block={{ ...feature, theme: block.theme ?? 'light' }} />
      {/each}
    {/if}
  </section>
{/if}
