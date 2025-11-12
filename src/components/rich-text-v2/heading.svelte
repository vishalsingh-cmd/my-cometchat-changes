<script lang="ts">
  import { cn } from '$lib/utils';
  import { RichTextResolver, type ISbRichtext } from '@storyblok/js';

  export let content: ISbRichtext;

  const resolver = new RichTextResolver();
</script>

<svelte:element
  this={`h${content.attrs.level}`}
  class={cn(
    'font-semibold leading-tighter text-gray-12 [&_span]:!text-gray-1',
    content?.attrs?.level == 2 && 'text-h1',
    content?.attrs?.level == 2 && 'text-h2',
    content?.attrs?.level == 3 && 'text-h3',
    content?.attrs?.level == 4 && 'text-h4',
    content?.attrs?.level == 2 ? 'mb-2.5 mt-5 md:mb-3 md:mt-10' : 'my-3 md:mb-3 md:mt-5'
  )}
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html resolver.render(content)}
</svelte:element>
