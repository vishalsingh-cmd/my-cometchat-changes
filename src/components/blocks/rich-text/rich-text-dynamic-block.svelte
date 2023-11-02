<script lang="ts" context="module">
  const map = {
    gist: Gist,
    disclaimer: Disclaimer,
    'highlights-paragraph': HighlightsParagraph,
    metrics: MetricsParagraph,
    'paragraph-heading': ParagraphHeading,
    'paragraph-list': ParagraphList,
    'testimonial-block': TestimonialBlock,
    'youtube-video': YoutubeVideo
  };

  export type RichTextBlocks = keyof typeof map;

  const isComponent = (block: { component: string }): block is { component: RichTextBlocks } => {
    return !!block.component && block.component in map;
  };
</script>

<script lang="ts">
  import { dev } from '$app/environment';
  import type { ComponentProps, ComponentType } from 'svelte';

  import Gist from '$components/blocks/rich-text/gist.svelte';
  import Disclaimer from '$components/blocks/rich-text/disclaimer.svelte';
  import YoutubeVideo from '$components/blocks/rich-text/youtube-video.svelte';
  import ParagraphList from '$components/blocks/rich-text/paragraph-list.svelte';
  import MetricsParagraph from '$components/blocks/rich-text/metrics-paragraph.svelte';
  import ParagraphHeading from '$components/blocks/rich-text/paragraph-heading.svelte';
  import TestimonialBlock from '$components/blocks/rich-text/testimonial-block.svelte';
  import HighlightsParagraph from '$components/blocks/rich-text/highlights-paragraph.svelte';

  type ComponentRestProps =
    | Omit<ComponentProps<Disclaimer>, 'class' | 'block'>
    | Omit<ComponentProps<Gist>, 'class' | 'block'>
    | Omit<ComponentProps<HighlightsParagraph>, 'class' | 'block'>
    | Omit<ComponentProps<MetricsParagraph>, 'class' | 'block'>
    | Omit<ComponentProps<ParagraphHeading>, 'class' | 'block'>
    | Omit<ComponentProps<ParagraphList>, 'class' | 'block'>
    | Omit<ComponentProps<TestimonialBlock>, 'class' | 'block'>
    | Omit<ComponentProps<YoutubeVideo>, 'class' | 'block'>;

  export let block: { component: string };
  export let richTextBlockProps: ComponentRestProps | undefined = undefined;

  const component: ComponentType | null = isComponent(block) ? map[block.component] : null;

  if (!component && dev) {
    console.error('Uncaught component', block.component);
  }
</script>

{#if component}
  <svelte:component this={component} {block} {...richTextBlockProps} {...$$restProps} />
{/if}
