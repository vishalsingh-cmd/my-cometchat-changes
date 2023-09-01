<script lang="ts">
  import type { SbBlokData } from '@storyblok/js';
  import type { ComponentType } from 'svelte';

  import Disclaimer from './disclaimer.svelte';
  import Gist from './gist.svelte';
  import HighlightsParagraph from './highlights-paragraph.svelte';
  import MetricsParagraph from './metrics-paragraph.svelte';
  import ParagraphHeading from './paragraph-heading.svelte';
  import ParagraphList from './paragraph-list.svelte';
  import TestimonialBlock from './testimonial-block.svelte';
  import YoutubeVideo from './youtube-video.svelte';

  export let block: SbBlokData;

  const map: Record<string, ComponentType> = {
    gist: Gist,
    disclaimer: Disclaimer,
    'highlights-paragraph': HighlightsParagraph,
    metrics: MetricsParagraph,
    'paragraph-heading': ParagraphHeading,
    'paragraph-list': ParagraphList,
    'testimonial-block': TestimonialBlock,
    'youtube-video': YoutubeVideo
  };
</script>

{#if typeof block.component === 'string' && map[block.component]}
  <svelte:component this={map[block.component]} {block} {...$$restProps} />
{/if}
