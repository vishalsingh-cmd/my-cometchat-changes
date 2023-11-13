<script lang="ts">
  import type { CoreFeaturesPricingSectionStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import TitleSection from '$components/blocks/title-section.svelte';

  export let block: CoreFeaturesPricingSectionStoryblok;
</script>

{#if block}
  {@const { title } = block}
  <section
    data-theme="dark"
    class="relative isolate overflow-hidden bg-gray-1"
    use:storyblokEditable={block}
  >
    {#if title && title.length > 0 && title[0]}
      <TitleSection block={title[0]} />
    {/if}
  </section>
{/if}
