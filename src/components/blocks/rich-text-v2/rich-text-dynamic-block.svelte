<script lang="ts" context="module">
  const map = {
    gist: Gist,
    disclaimer: Disclaimer,
    'highlights-paragraph': HighlightsParagraph,
    metrics: MetricsParagraph,
    'paragraph-heading': ParagraphHeading,
    'paragraph-list': ParagraphList,
    'testimonial-block': TestimonialBlock,
    'youtube-video': YoutubeVideo,
    'center-static-banner-v01': CenterStaticBannerV01,
    // earlier version commented out
    // 'center-static-banner-v02': CenterStaticBannerV02,
    'center-static-banner-v02': CenterStaticBannerV04,
    'toolkit-links-banner': ToolkitLinksBanner,
    'blog-text-table': BlogTextTable,
    'blog-checklist-table': BlogChecklistTableV2,
    'blog-comparison-table': BlogComparisonTable,
    'message-box-with-link': MessageBoxWithLink
  };

  export type RichTextBlocks = keyof typeof map;

  const isComponent = (block: { component: string }): block is { component: RichTextBlocks } => {
    return !!block.component && block.component in map;
  };
</script>

<script lang="ts">
  import { dev } from '$app/environment';
  import type { ComponentProps, ComponentType } from 'svelte';

  import Gist from '$components/blocks/rich-text-v2/gist.svelte';
  import Disclaimer from '$components/blocks/rich-text-v2/disclaimer.svelte';
  import YoutubeVideo from '$components/blocks/rich-text-v2/youtube-video.svelte';
  import ParagraphList from '$components/blocks/rich-text-v2/paragraph-list.svelte';
  import MetricsParagraph from '$components/blocks/rich-text-v2/metrics-paragraph.svelte';
  import ParagraphHeading from '$components/blocks/rich-text-v2/paragraph-heading.svelte';
  import TestimonialBlock from '$components/blocks/rich-text-v2/testimonial-block.svelte';
  import HighlightsParagraph from '$components/blocks/rich-text-v2/highlights-paragraph.svelte';
  import CenterStaticBannerV01 from '$components/center-static-banner-v01.svelte';
  import CenterStaticBannerV02 from '$components/center-static-banner-v02.svelte';
  // import CenterStaticBannerV03 from '$components/center-static-banner-v03.svelte';
  import CenterStaticBannerV04 from '$components/center-static-banner-v04.svelte';
  import ToolkitLinksBanner from '$components/toolkit-links-banner.svelte';
  import BlogTextTable from '$components/blog-text-table.svelte';
  import BlogChecklistTable from '$components/blog-checklist-table.svelte';
  import BlogChecklistTableV2 from '$components/blog-checklist-table-v2.svelte';
  import BlogComparisonTable from '$components/blog-comparison-table.svelte';
  import MessageBoxWithLink from '$components/message-box-with-link.svelte';

  type ComponentRestProps =
    | Omit<ComponentProps<Disclaimer>, 'class' | 'block'>
    | Omit<ComponentProps<Gist>, 'class' | 'block'>
    | Omit<ComponentProps<HighlightsParagraph>, 'class' | 'block'>
    | Omit<ComponentProps<MetricsParagraph>, 'class' | 'block'>
    | Omit<ComponentProps<ParagraphHeading>, 'class' | 'block'>
    | Omit<ComponentProps<ParagraphList>, 'class' | 'block'>
    | Omit<ComponentProps<TestimonialBlock>, 'class' | 'block'>
    | Omit<ComponentProps<YoutubeVideo>, 'class' | 'block'>
    | Omit<ComponentProps<CenterStaticBannerV01>, 'class' | 'block'>
    | Omit<ComponentProps<CenterStaticBannerV02>, 'class' | 'block'>
    | Omit<ComponentProps<ToolkitLinksBanner>, 'class' | 'block'>
    | Omit<ComponentProps<BlogTextTable>, 'class' | 'block'>
    | Omit<ComponentProps<BlogChecklistTable>, 'class' | 'block'>
    | Omit<ComponentProps<BlogChecklistTableV2>, 'class' | 'block'>
    | Omit<ComponentProps<BlogComparisonTable>, 'class' | 'block'>
    | Omit<ComponentProps<MessageBoxWithLink>, 'class' | 'block'>;

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
